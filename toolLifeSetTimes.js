var toolLifeSetTimes = function() {
	var _this = this;
	_this.hadData = [] //列表数据
	_this.toolSpec = [] //刀具规格列表数据
	_this.addIndex = null
	_this.defaultColor = "#008000"
	_this.lifeType = "times"
	_this.html_stage = `
						<li class="clearfix li-stage$LEN">
							<div class="tip time-tip">阶段$LEN：</div>
							<div class="con mlf con-one">
								<input class="form-control inp-one" type="number" value="$DEFAULTSTARTTIME" placeholder="阶段开始次数" data-start="$LEN" readonly/>
							</div>
							<div class="con mlf con-two">
								<input class="form-control inp-two" type="number" data-end="$LEN" value="$DEFAULTEMDTIME" placeholder="阶段结束次数"  data-id="$ID"/>
							</div>
							<div class="con mlf">
								<input class="form-control inp-three chose-color$LEN" type="text" value="$COLOR" data-color="$LEN">
							</div>
							<div class="con mlf">
								<input class="form-control inp-four" type="text" value="$DES" placeholder="如磨合期，危险期" data-des="$LEN"/>
							</div>
						</li>	
					`
	_this.html_end = `
					<li class="clearfix li-stage$LEN">
						<div class="tip time-tip">寿命结束：</div>
						<div class="con mlf con-one">
							<input class="form-control inp-one" type="number" value="$DEFAULTSTARTTIME" placeholder="阶段开始次数" data-start="$LEN" readonly/>
						</div>
						<div class="con mlf con-two">
							<input class="form-control" type="text" data-id="$ID" readonly style="background:transparent;border-width:0"/>
						</div>
						<div class="con mlf">
							<input class="form-control inp-three chose-color$LEN" type="text" value="$COLOR" data-color="$LEN">
						</div>
						<div class="con mlf">
							<input class="form-control inp-four" type="text" value="$DES" placeholder="超出预设寿命" data-des="$LEN"/>
						</div>
					</li>	
				`
	_this._html_tt = `
						<li class="li-tt li-tt-tip"></li>
						<li class="li-tt li-tt-start mlf">开始次数(%)</li>
						<li class="li-tt li-tt-end mlf">结束次数(%)</li>
						<li class="li-tt li-tt-color mlf">寿命阶段颜色</li>
						<li class="li-tt li-tt-des mlf">备注</li>
					`

	this.init = function() {
		_this.UIView();
		_this.onEvent();
		_this.updateCon();
	}

	/**
	 * 初始化界面排版和内容
	 */
	this.UIView = function() {

	}

	/**
	 * 事件初始化监听
	 */
	this.onEvent = function() {

		//新增寿命状态
		$(".btn_add_life").on("click", function() {
			_this.operationCon.addToolsData()
		})

		//总寿命次数不能小于等于0  阶段寿命开始不能大于结束；上一阶段结束不能大于下一阶段开始
		$(document).on("input", ".inp-two", function(e) {
			if(!e) {
				return
			}
			if(e.target.attributes["data-end"]) {
				let dn = +e.target.attributes["data-end"].value + 1
				if($("input[data-start='" + dn + "']").length > 0) {
					$("input[data-start='" + dn + "']").val(e.target.value)
				}
			}
		})

		//添加寿命阶段
		$(document).on("click", ".add-life-stage", function(e) {
			let startNums = $(".inp-one")
			let lifeStage = $("#lifeStage").val()
			if(startNums.length > +lifeStage) {
				layer.msg("已经达到已设寿命阶段")
				return
			}
			let endNums = $(".inp-two")
			let default_value = 0
			if(endNums.length > 　0) {
				default_value = endNums[endNums.length - 1].value || 0
			}
			let len = $(".time-tip").length + 1
			let _html = _this.html_stage.replace(/\$LEN/g, len)
				.replace("$COLOR", _this.defaultColor)
				.replace("$DEFAULTSTARTTIME", default_value)
				.replace("$DEFAULTEMDTIME", "")
				.replace("$DES", "")
				.replace("$ID", "")
			if(startNums.length == +lifeStage) {
				_html = _this.html_end.replace(/\$LEN/g, len)
					.replace("$COLOR", _this.defaultColor)
					.replace("$DEFAULTSTARTTIME", default_value)
					.replace("$DES", "")
					.replace("$ID", "")
			}
			$(".ul-life").append(_html)
			Comm.utils.initColorChoose(".chose-color" + len)
		})

		//新增弹窗:删除寿命阶段
		$(document).on("click", ".sub-life-stage", function(e) {
			let len = $(".ul-life li").length
			$(".ul-life li").remove(".li-stage" + len)
		})

		//输入寿命阶段
		$(document).on("input", "#lifeStage", function(e) {
			if(e) {
				if(e.target.id == "lifeStage") {
					$(".ul-life").html("")
					if(e.target.value <= 0) {
						$("#lifeStage").val(0)
					}
				}
			}
		})

		//编辑寿命状态
		$(".btn_edit_life").on("click", function() {
			_this.operationCon.editToolsData()
		})

		//删除数据
		$(document).on("click", ".btn_del_life", function(e) {
			let ids = $('#DataList').bootstrapTable('getSelections')
			if(ids.length == 0) {
				layer.alert('请选择要删除的数据', {
					icon: 0
				})
			} else {
				var keyValue = ids[0]
				let arr = _this.hadData.filter(item => {
					return item.type == keyValue.type
				})
				if(arr.length > 0) {
					layer.confirm("确定删除?", {
						btn: ['是', '否'],
						icon: 6
					}, function(_index, res) {
						_this.objData.deleteToolsColor({
							type: keyValue.type,
							toolSpec: keyValue.toolSpec
						}, function(res) {
							if(res.code == 200) {
								layer.msg("删除成功")
								$("#DataList").bootstrapTable('destroy');
								_this.objData.initTableData()
							} else {
								layer.msg("删除失败")
							}
						})
						layer.close(_index)
					}, function(_index, res) {
						layer.close(_index)
					});
				}
			}
		})
	}

	/**
	 * 初始化内容数据
	 */
	this.updateCon = function() {
		_this.objData.initTableData()
		Comm.objData.selToolSpec(function(res) {
			if(res && res.length > 0) {
				_this.toolSpec = res
			}
		})
	}

	/**
	 * 各种数据请求
	 */
	this.objData = {
		/**
		 * 初始化页面数据
		 */
		initTableData: function() {
			$('#DataList').bootstrapTable({
				url: BASE_URL + "/ae_cnc/chk_detect/queryToolColors",
				method: "post",
				mobileResponsive: true,
				toolbar: '#toolbar',
				iconSize: 'outline',
				toolbarAlign: "left", //工具栏对齐方式
				striped: true,
				cache: true,
				pagination: true, //是否分页
				pageNumber: 1,
				pageSize: 10,
				queryParams: "", //传递参数（*）
				sidePagination: "client",
				pageList: [10, 25, 50, 100],
				showToggle: true,
				showColumns: true,
				showRefresh: true,
				showFooter: false,
				minimumCountColumns: 2,
				clickToSelect: false,
				cardView: false,
				detailView: false,
				smartDisplay: true,
				singleSelect: true,
				paginationPreText: "上一页",
				paginationNextText: "下一页",
				paginationFirstText: "首页",
				paginationLastText: "尾页",
				buttonsClass: "default btn-sm",
				responseHandler: function(res) {
					_this.hadData = res.data
					let arr = res.data
					if(arr.length > 0) {
						arr.map((item, index) => {
							item.select = false
							item.index = index
							item.typeText = "寿命次数"
							item.lifeStageStartTimeText = item.lifeStageStartTime + "%"
							if(item.lifeStageEndTime) {
								item.lifeStageEndTimeText = item.lifeStageEndTime + "%"
							}
							item.colorText = '<span style="width:10px;height:10px;display:inline-block;margin-right:5px;background:' + item.color + ';"></span>' + item.color
							return item
						})
					}
					return arr
				},
				columns: [{
						field: "select",
						title: "",
						checkbox: true,
						width: 20, //宽度
						align: "center", //水平
						valign: "middle" //垂直
					},
					{
						field: 'index',
						title: '序号',
						valign: "middle",
						align: "left",
						width: 30, //宽度
						formatter: function(value, row, index) {
							return index + 1;
						}
					},
					{
						field: 'toolSpec',
						title: '刀具规格',
						valign: "middle",
						align: "left"
					},
					{
						field: 'typeText',
						title: '类型',
						valign: "middle",
						align: "left"
					},
					{
						field: 'lifeStageStartTimeText',
						title: '开始次数',
						valign: "middle",
						align: "left"
					},
					{
						field: 'lifeStageEndTimeText',
						title: '结束次数',
						valign: "middle",
						align: "left"
					},
					{
						field: 'colorText',
						title: '颜色',
						valign: "middle",
						align: "left"
					},
					{
						field: 'des',
						title: '备注',
						valign: "middle",
						align: "left"
					},
				],
				onLoadError: function(status) {

				},
				onClickRow: function(row, tr, flied) {
					let data = $('#DataList').bootstrapTable('getData')
					for(let i = 0; i < data.length; i++) {
						if(data[i].id.split("-")[0] == row.id.split("-")[0]) {
							if(data[i].select) {
								data[i].select = false
							} else {
								data[i].select = true
							}
						} else {
							data[i].select = false
						}
						$('#DataList').bootstrapTable('updateRow', {
							index: data[i].index,
							row: data[i]
						})
					}
				}
			});
		},

		/**
		 * 保存新增数据
		 * @param {Object} data e.g. [{"color":"#008000","des":"","type":"time","_life":[0,21600],"life":[0,6]},{"color":"#008000","des":"","type":"time","_life":[21600],"life":[6]}]
		 * @param {Function} fn
		 */
		addData: function(data, fn) {
			$.ajax({
				"type": "POST",
				"url": BASE_URL + "/ae_cnc/chk_detect/saveToolColors",
				"contentType": "application/json;charset=UTF-8",
				"data": JSON.stringify(data),
				"dataType": "json",
				"success": function(res) {
					layer.msg(res.msg)
					if(_this.addIndex) layer.close(_this.addIndex)
					$("#DataList").bootstrapTable('destroy');
					_this.objData.initTableData()
					fn && fn(res)
				},
				"error": function(res) {
					layer.msg(res.statusText)
					console.log(res)
				}
			})
		},

		/**
		 * 更新数据
		 * @param {Object} data e.g. [{"id":"timesC42GL-100-1","color":"#008000","des":"","type":"time","life":[0,2],"toolSpec":"C42GL"},{"id":"timesC42GL-100-2","color":"#008000","des":"","type":"time","life":[2,100],"toolSpec":"C42GL"}];
		 * @param {Function} fn
		 */
		updateData: function(data, fn) {
			$.ajax({
				"type": "POST",
				"url": BASE_URL + "/ae_cnc/chk_detect/updateToolColors",
				"contentType": "application/json;charset=UTF-8",
				"data": JSON.stringify(data),
				"dataType": "json",
				"success": function(res) {
					layer.msg(res.msg)
					if(_this.addIndex) layer.close(_this.addIndex)
					$("#DataList").bootstrapTable('destroy');
					_this.objData.initTableData()
					fn && fn(res)
				},
				"error": function(res) {
					layer.msg(res.statusText)
					console.log(res)
				}
			})
		},

		/**
		 * 删除对应数据
		 * @param {Object} obj e.g. { type: "time6-0", id: "time6-1", toolSpec:"C42G"}
		 * @param {Function} fn
		 */
		deleteToolsColor: function(obj, fn) {
			$.ajax({
				"type": "POST",
				"url": BASE_URL + "/ae_cnc/chk_detect/deleteToolColors",
				"contentType": "application/json;charset=UTF-8",
				"data": JSON.stringify(obj),
				"dataType": "json",
				"success": function(res) {
					console.log(JSON.stringify(obj), res)
					fn && fn(res)
				},
				"error": function(res) {
					layer.msg(res.statusText)
					console.log(res)
				}
			})
		}
	}

	/**
	 * 各种接口数据实际操作
	 */
	this.objDataImpl = {

	}

	/**
	 * 内容数据操作
	 */
	this.operationCon = {

		//新增数据
		addToolsData: function() {
			_this.addIndex = layer.open({
				type: 1,
				area: ['850px', '400px'],
				title: '新增或重置寿命次数状态',
				shade: 0.6,
				anim: 1,
				content: `<div style="padding:15px;">
								<div class="life" style:"display:flex;">
									<div class="clearfix">
										<div class="tip">寿命类型：</div>
										<div class="con mlf con-chose">
											<input id="lifeType" class="form-control" value="次数" style="background:#fff" readonly />
										</div>
										<div class="tip">寿命阶段：</div>
										<div class="con mlf con-chose">
											<input id="lifeStage" class="form-control" type="number" value="3" placeholder="请输入寿命阶段"/>
										</div>
										<div class="tip">刀具规格：</div>
										<div class="con mlf con-chose">
											<select id="toolSpec" class="form-control" tabindex="-1" aria-hidden="true"></select>
										</div>
										<div class="con mlf"><a class="btn btn-primary btn-sm add-life-stage" ><i class="fa fa-plus"></i> 新建寿命阶段</a></div>
										<div class="con mlf"><a class="btn btn-primary btn-sm sub-life-stage" ><i class="fa fa-sub"></i> 删除寿命阶段</a></div>
									</div>
									<p style="color:#C8b000;margin-left:15px"><i><small>注意: 寿命次数的设置为寿命百分比设置,最低 0%,最高 100%,最后一个设置项必须为100</small></i></p>
									<ul class="clearfix ul-tt"></ul>
									<ul class="ul-life"></ul>
								</div>
							</div>`,
				btn: ['确认', '关闭'],
				success: function(layero, index) {
					$(".ul-life").html("")
					$(".ul-tt").html(_this._html_tt)

					let toolSpecHtml = _this.toolSpec.map(item => {
						return '<option value="' + item + '">' + item + '</option>'
					})
					$("#toolSpec").html(toolSpecHtml)
				},
				yes: function(index, layero) {
					_this.operationCon.dealwithUpdate("1")
				},
				no: function(index, layero) {
					layer.close(index); //如果设定了yes回调，需进行手工关闭
				}
			});
		},

		//编辑数据
		editToolsData: function() {
			var ids = $('#DataList').bootstrapTable('getSelections');

			if(ids.length == 0) {
				layer.alert('请选择要设置的数据', {
					icon: 0
				})
			} else {
				var keyValue = ids[0]
				_this.addIndex = layer.open({
					type: 1,
					area: ['800px', '400px'],
					title: '编辑寿命次数状态',
					shade: 0.6,
					anim: 1,
					content: `<div style="padding:15px;">
									<div class="life" style:"display:flex;">
										<div class="clearfix">
											<div class="tip">寿命类型：</div>
											<div class="con mlf con-chose">
												<input id="lifeType" class="form-control" type="text" value="次数" readonly/>
											</div>
											<div class="tip">寿命阶段：</div>
											<div class="con mlf con-chose">
												<input id="lifeStage" class="form-control" type="text" readonly/>
											</div>
											<div class="tip">刀具规格：</div>
											<div class="con mlf con-chose">
												<input id="toolSpec" class="form-control" type="text" readonly/>
											</div>
										</div>
										<ul class="clearfix ul-tt"></ul>
										<ul class="ul-life"></ul>
									</div>
								</div>`,
					btn: ['确认', '关闭'],
					success: function(layero, index) {
						$(".ul-life").html("")
						$(".ul-tt").html(_this._html_tt)
						$("#lifeStage").val(ids.length - 1)
						$("#toolSpec").val(keyValue.toolSpec)

						let html_con_parent = ""

						for(let i = 0; i < ids.length; i++) {
							let len = i + 1
							let html_con = _this.html_stage.replace(/\$LEN/g, len)
								.replace("$COLOR", ids[i].color)
								.replace("$DEFAULTSTARTTIME", ids[i].lifeStageStartTime)
								.replace("$DEFAULTEMDTIME", ids[i].lifeStageEndTime)
								.replace("$DES", ids[i].des)
								.replace("$ID", ids[i].id)

							let html_con_last = _this.html_end.replace(/\$LEN/g, len)
								.replace("$COLOR", ids[i].color)
								.replace("$DEFAULTSTARTTIME", ids[i].lifeStageStartTime)
								.replace("$DES", ids[i].des)
								.replace("$ID", ids[i].id)

							if(i == ids.length - 1) {
								html_con_parent += html_con_last
							} else {
								html_con_parent += html_con
							}
						}
						$(".ul-life").append(html_con_parent)
						for(let i = 0; i < ids.length; i++) {
							Comm.utils.initColorChoose(".chose-color" + (i + 1))
						}
					},
					yes: function(index, layero) {
						_this.operationCon.dealwithUpdate("2")
					},
					no: function(index, layero) {
						layer.close(index); //如果设定了yes回调，需进行手工关闭
					}
				});
			}
		},

		/**
		 * 新增或编辑的确认按钮 -- 处理数据
		 * @param {String} btnType 1:新增;2:编辑
		 */
		dealwithUpdate: function(btnType) {
			let type = _this.lifeType
			let startNums = $(".inp-one")
			let endNums = $(".inp-two")
			let colors = $(".inp-three")
			let des = $(".inp-four")
			let lifeTime = [];
			let lifeStage = +$("#lifeStage").val()
			let toolSpec = $("#toolSpec").val()
			let _count = 0
			for(let i = 0; i < endNums.length; i++) {
				if(endNums[i].value === "") {
					_count++
					layer.msg("请填写完寿命阶段结束百分比后确认")
					break
				}
				if(startNums[i].value - endNums[i].value >= 0) {
					_count++
					layer.msg("每阶段的结束百分比不能小于等于这阶段的开始百分比")
					break
				}
			}

			//防止二次进入startNums.length != lifeStage + 1的判断提示
			if(_count > 0) {
				return
			}
			if(startNums.length != lifeStage + 1) {
				layer.msg("请继续添加寿命阶段直至出现 “寿命结束” 并设置后确认")
				return
			}
			if(type == "times" && +endNums[endNums.length - 1].value !== 100) {
				layer.msg("寿命次数为百分比寿命,最后一个设置必须是100%")
				return
			}

			//组合参数数据
			for(let i = 0; i < startNums.length; i++) {
				let obj = {
					color: colors[i].value,
					des: des[i].value,
					type: type,
					toolSpec: toolSpec
				}
				if(i == startNums.length - 1) {
					let len = endNums.length - 1
					obj.life = [+endNums[len].value]
					obj._life = [+endNums[len].value + "%"]
				} else {
					obj.life = [+startNums[i].value, +endNums[i].value]
					obj._life = [+startNums[i].value + "%", +endNums[i].value + "%"]
				}
				lifeTime.push(obj)
			}

			let arr = []
			let temp = _this.hadData.filter(item => {
				return item.toolSpec == toolSpec
			})

			if(temp.length == lifeTime.length) {
				//参数对象数据
				arr = temp.map((item, index) => {
					let obj = {
						id: item.id,
						color: lifeTime[index].color,
						des: lifeTime[index].des,
						type: lifeTime[index].type,
						life: [+lifeTime[index].life[0], +lifeTime[index].life[1] || ""],
						toolSpec
					}
					return obj
				})
			}

			//有就重置(更新),没有就添加
			if(arr.length > 0) {
				let text = null
				if(btnType == "1") {
					text = "已有配置,是否继续新增覆盖？"
				} else {
					text = "确定更新?"
				}
				layer.confirm(text, {
					btn: ['是', '否'],
					icon: 6
				}, function(_index, res) {
					_this.objData.updateData(arr)
					layer.close(_index)
				}, function(_index, res) {
					layer.close(_index)
				});
			} else {
				//1.temp.length == 0直接增加;2.temp.length > 0 先删后加(当新增的阶段数与原版阶段数量不一致而且寿命终点值一致时执行)
				if(temp.length == 0) {
					_this.objData.addData(lifeTime)
				} else {
					layer.confirm("已有配置,是否继续新增覆盖？", {
						btn: ['是', '否'],
						icon: 6
					}, function(_index, res) {
						_this.objData.deleteToolsColor({
							type,
							toolSpec
						})
						_this.objData.addData(lifeTime)
						layer.close(_index)
					}, function(_index, res) {
						layer.close(_index)
					});
				}
			}
		}

	}
}

window.ToolLifeSetTimes = new toolLifeSetTimes();
window.ToolLifeSetTimes.init();