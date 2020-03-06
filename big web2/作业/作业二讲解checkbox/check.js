function tableCheckBox(outBoxDom) {
	this.clickNum = {};
	this.outBoxDom = document.getElementById(outBoxDom);
	this.allcheckbox = this.outBoxDom.querySelectorAll('.checkbox');
}

tableCheckBox.prototype = {
	constructor: tableCheckBox,
	//给所有的checkbox初始值
	bindClick: function() {
		this.outBoxDom.addEventListener('click', function(ev) {
			if(/checkbox/.test(ev.target.className)) {
				var target = ev.target;
				var tagid = target.getAttribute('tag');
				if(this.clickNum[tagid] == undefined) {
					//默认是未选状态给0
					this.clickNum[tagid] = 0;
				}
				this.clickNum[tagid] += 1;
				if(this.clickNum[tagid] == 3) {
					this.clickNum[tagid] = 0;
				}
				target.className = 'checkbox';
				var statusCls = {
					0: 'none',
					1: 'ok',
					2: 'no'
				};
				target.classList.add(statusCls[this.clickNum[tagid]]);
			}
		}.bind(this))
	},

	getValue: function() {
		//传对象的形式
		console.log(this.clickNum);
		//传数组的形式
		// Object.keys(clickNum)
		var arr = Object.values(this.clickNum);
	}

}