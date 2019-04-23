/**
 * 加载数据并缓存
 * @param collectionName 集合名
 * @param propName 属性名
 * @param defValue 默认值
 * @param isInitDb 是否初始化数据
 * @param isUser 是否为用户信息
 * @param backFun 成功回调
 */
loadDataFromDb: function(collectionName, propName, defValue, isInitDb, isUser, backFun) {
	if(isUser && !this.openid) {
		setTimeout(() => {
			this.loadUserDataFromDb(...arguments);
		}, 500);
		
		setTimeout(function(){
			this.loadUserDataFromDb(...arguments);
		})
		return;
	}
	if(typeof this[propName] != "undefined" && this[propName] != null) {
		backFun && backFun(this[propName]);
	} else {
		const db = wx.cloud.database();
		let temp = db.collection(collectionName);
		if(isUser) {
			temp = temp.where({
				_openid: this.openid
			});
		}
		temp.get().then(res => {
			if(res.data.length > 0) {
				this[propName] = res.data[0][propName];
				backFun && backFun(this[propName]);
			} else {
				this[propName] = defValue;
				if(isInitDb) {
					let data = {
						data: {}
					};
					data.data[propName] = this[propName];
					db.collection(collectionName)
						.add(data)
						.then(res2 => {
							this[propName] = defValue;
							backFun && backFun(this[propName]);
						})
				} else {
					backFun && backFun(this[propName]);
				}
			}
		});
	}
},