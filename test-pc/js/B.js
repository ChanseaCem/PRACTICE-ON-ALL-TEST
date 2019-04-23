var aaaa = function(){
	
}
var _this = this;
$.ajax({
	"url": "http://rap2api.taobao.org/app/mock/137176/statistics",
	"type": "post",
	"data": "",
	"dataType": "",
	"success": function(data) {
		//更新月整体效率统计
		var effMonthData = [];
		var maxOutput = [];
		var MaxOutput = 0;
		var meff_data = data.ThreeMonth.Efficiency;
		for(var key in meff_data) {
			if(meff_data[key] && typeof meff_data[key] == 'object') {
				var mouth_data = parseInt(meff_data[key].Start_date.split("-")[1]);
				effMonthData.push({
					"month": mouth_data + "月",
					"oee": parseFloat(meff_data[key].Oee * 100).toFixed(1),
					"ar": parseFloat(meff_data[key].Operate_Time_Rate * 100).toFixed(1),
					"pr": parseFloat(meff_data[key].Performance_Rate * 100).toFixed(1),
					"qr": parseFloat(meff_data[key].Quality_Rate * 100).toFixed(1),
					"output": meff_data[key].Pro_Num
				});
				maxOutput.push(meff_data[key].Pro_Num);
			}
		}
		MaxOutput = Math.max.apply(null, [1,2,3,4,8,1,2,3]); //最大实测值
//		MaxOutput = (Math.max.apply(null, maxOutput)) * 1.15; //最大实测值
		console.log(effMonthData)
		console.log(MaxOutput)
		_this.loadMonthEfficiencyChart(effMonthData, MaxOutput);

	},
	"error": function() {

	}

})
//月统计数据更新
	this.loadMonthEfficiencyChart = function(data, s) {
		if(_this.efficiencyChart_month != null) {
			_this.efficiencyChart_month.dataProvider = data;
			_this.efficiencyChart_month.validateNow();
			_this.efficiencyChart_month.validateData();
		} else {
			_this.efficiencyChart_month = AmCharts.makeChart("eff_month", {
				"type": "serial",
				"theme": "light",
				"marginRight": 60,
				"marginLeft": 40,
				"depth3D": 20,
				"angle": 30,
				"autoMarginOffset": 20,
				"titles": [{
					"text": "整体效率统计",
					"color": "#fff",
					"size": 17
				}],
				"legend": {
					"horizontalGap": 10,
					"maxColumns": 5,
					"position": "bottom",
					"useGraphSettings": true,
					"markerSize": 10,
					"valueWidth": 10,
					"color": "#fff",

				},
				"valueAxes": [{
					"id": "v1",
					"position": "left",
					"color": "#fff",
					"maximum": s
				}, {
					"id": "v2",
					"axisAlpha": 0,
					"position": "right",
					"ignoreAxisWidth": true,
					"color": "#fff",
					"unit": "%"

				}],
				"balloon": {
					"borderThickness": 1,
					"shadowAlpha": 0
				},
				"graphs": [{
					"balloonText": "[[category]]<br><b>[[title]]:[[value]]</b>",
					"id": "o1",
					"valueAxis": "v1",
					"fillAlphas": 0.8,
					"labelText": "产量：[[value]]",
					"lineAlpha": 0.3,
					"title": "产量",
					"type": "column",
					"color": "#fff",
					"valueField": "output"
				}, {
					"id": "g1",
					"valueAxis": "v2",
					"balloonText": "[[category]]<br><b><span style='font-size:14px;'>[[title]]:[[value]]%</span></b>",
					"bullet": "round",
					"bulletSize": 8,
					"lineThickness": 2,
					"negativeLineColor": "#637bb6",
					"type": "smoothedLine",
					"valueField": "oee",
					"title": "OEE 整体效率"
				}, {
					"id": "g2",
					"valueAxis": "v2",
					"balloonText": "[[category]]<br><b><span style='font-size:14px;'>[[title]]:[[value]]%</span></b>",
					"bullet": "round",
					"bulletSize": 8,
					"lineThickness": 2,
					"negativeLineColor": "#637bb6",
					"type": "smoothedLine",
					"valueField": "ar",
					"title": "AR 时间开动率"
				}, {
					"id": "g3",
					"valueAxis": "v2",
					"balloonText": "[[category]]<br><b><span style='font-size:14px;'>[[title]]:[[value]]%</span></b>",
					"bullet": "round",
					"bulletSize": 8,
					"lineThickness": 2,
					"negativeLineColor": "#637bb6",
					"type": "smoothedLine",
					"valueField": "pr",
					"title": "PR 性能开动率"
				}, {
					"id": "g4",
					"valueAxis": "v2",
					"balloonText": "[[category]]<br><b><span style='font-size:14px;'>[[title]]:[[value]]%</span></b>",
					"bullet": "round",
					"bulletSize": 8,
					"lineThickness": 2,
					"negativeLineColor": "#637bb6",
					"type": "smoothedLine",
					"valueField": "qr",
					"title": "QR 良品率"
				}],
				"categoryField": "month",
				"categoryAxis": {
					"minorGridEnabled": true,
					"color": "#fff"
				},
				"export": {
					"enabled": true
				},
				"dataProvider": data
			});
		};
	};