var obj = {
	m: new Map(),
	init: function() {
		this.bind();
	},
	$: function(name) {
		return document.querySelector(name)
	},
	bind: function() {
		this.$(".submit").onclick = () => { //点击事件

			let [_name, _msg] = [this.$(".name").value, this.$(".message").value]

			if(_name == "" || _msg == "" || _name == "请输入昵称" || _msg == "请输入内容") {
				var text_val = "请填写正确内容"
				this.Popup(text_val) //弹窗信息
			} else if(this.m.has(_name) == true) {
				var text_val = "已有相同"
				this.Popup(text_val) //弹窗信息
			} else {
				this.m.set(_name, _msg)
				this.$(".name").value = "";
				this.$(".message").value = "";
				this.last()
			}
		}
		this.dellData() //监听事件
		this.info() //删除所有

	},
	dellData: function() {

		// ---------------监听ID box 利用冒泡行为实现 -----------
		this.$(".messageList").addEventListener('click', (event) => {
			var ev = event || window.event;
			target = ev.target || ev.srcElement;

			tid = target.getAttribute('data-name'); //获取自定义属性

			if(target.tagName == "BUTTON") {

				//删除父节点
				target.parentNode.remove()

				//删除map存储数据
				for(let [key] of this.m) {
					if(key == tid) {
						this.m.delete(key)
					}
				}

			}

		})

	},
	info: function() {
		this.$(".info").onclick = function() {
			this.$(".messageList").innerHTML = '';
			this.m.clear();
		}.bind(this)
	},
	last: function() { //渲染数据  //自定义属性 data-name 
		let str = '';
		for(let [key, value] of this.m) {
			str += `
            <li class="list-group-item">${key}
                <span class="lead">说：</span>${value}
                <button type="submit"  data-name="${key}" class="btn btn-danger pull-right">删除留言</button>
            </li>`;
		}
		this.$(".messageList").innerHTML = str;
	},
	Popup: function(text_val) {
		let [Popup, Popup_Bg, colse] = [this.$("#Popup"), this.$("#Popup_Bg"), this.$("#Popup .close")]

		Popup.className = "active_on";
		Popup_Bg.className = "active_on";
		Popup.append(text_val);

		colse.onclick = function() {
			Popup.className = "active_off";
			Popup_Bg.className = "active_off";
		}

	}

}
window.onload = function() {
	obj.init();
}