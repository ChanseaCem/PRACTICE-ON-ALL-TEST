var BASE_PATH = "http://cx.smcxsc.com";
var BASE_URL = BASE_PATH + "/gouwz";
var APPDOWNLOAD = "https://www.pgyer.com/PV3b";
var timer_target;
var timer_nowtime = 0;
var TOPCOLOR = "#181F29";
var ISI18NINITONLOAD = false;

//判断访问终端
var browser = {
	versions: function() {
		var u = navigator.userAgent,
			app = navigator.appVersion;
		return {
			trident: u.indexOf('Trident') > -1, //IE内核
			presto: u.indexOf('Presto') > -1, //opera内核
			webKit: u.indexOf('AppleWebKit') > -1, //苹果、谷歌内核
			gecko: u.indexOf('Gecko') > -1 && u.indexOf('KHTML') == -1, //火狐内核
			mobile: !!u.match(/AppleWebKit.*Mobile.*/), //是否为移动终端
			ios: !!u.match(/\(i[^;]+;( U;)? CPU.+Mac OS X/), //ios终端
			android: u.indexOf('Android') > -1 || u.indexOf('Adr') > -1, //android终端
			iPhone: u.indexOf('iPhone') > -1, //是否为iPhone或者QQHD浏览器
			iPad: u.indexOf('iPad') > -1, //是否iPad
			webApp: u.indexOf('Safari') == -1, //是否web应该程序，没有头部与底部
			weixin: u.indexOf('MicroMessenger') > -1, //是否微信 （2015-01-22新增）
			qq: u.match(/\sQQ/i) == " qq" //是否QQ
		};
	}(),
	language: (navigator.browserLanguage || navigator.language).toLowerCase()
}

/*******************************************************登录**********************************************************/
function doLogin() {
	//0.获得表单对象
	var acc = $("input[name='acc']").val();
	var pass = $("input[name='pass']").val();

	//1.检查参数
	if(acc != "" && pass != "") {
		layer.open({
			type: 2
		});
		$.ajax({
			"type": "POST",
			"url": BASE_URL + "/login.html",
			"data": {
				"user_acc": acc,
				"user_pass": pass
			},
			"success": function(rtnData) {
				layer.closeAll();
				var data = eval('(' + rtnData + ')');
				layer.open({
					content: data.msg,
					skin: 'footer'
				});
				if(data.code == 1) location.href = "home.html";
			},
			"error": function() {
				layer.closeAll();
				layer.open({
					content: "请求失败，请检查网络状况",
					skin: 'footer'
				});
			}
		});
	} else
		layer.open({
			content: "请输入用户名和密码",
			skin: 'footer'
		});
	return false;
}

/*******************************************************注册**********************************************************/
function getMessageCode() {
	var tel = $("input[name='user_tel']").val();

	if(tel == "" || tel == null) {
		layer.open({
			content: '请输入手机号码',
			skin: 'msg',
			time: 2
		});
		return;
	}

	if(timer_nowtime != 0)
		layer.open({
			content: '请' + timer_nowtime + '秒后再获取！',
			skin: 'msg',
			time: 2
		});
	else {
		$.ajax({
			"type": "POST",
			"url": BASE_URL + "/send_code.html",
			"data": {
				"user_tel": tel
			},
			"success": function(rtnData) {
				var data = eval('(' + rtnData + ')');
				layer.open({
					content: data.msg,
					skin: 'msg',
					time: 2
				});
			},
			"error": function() {
				layer.open({
					content: "请求失败，请检查网络状况",
					skin: 'footer'
				});
			}
		});
		startCountDown(60);
	}
}

function doRegister() {
	if($('.b-xy img').attr("src") == "img/login/android/drawable-xhdpi/chb_n.png") {
		layer.open({
			content: "请阅读注册协议",
			skin: 'msg',
			time: 2
		});
		return;
	}

	//获得传入参数
	var user_acc = $("input[name='user_acc']").val();
	var user_pass = $("input[name='user_pass']").val();
	var re_pass = $("input[name='re_pass']").val();
	var user_tel = $("input[name='user_tel']").val();
	var code = $("input[name='code']").val();
	var invite = $("input[name='invite']").val();

	//检查
	if(user_acc == "" || user_pass == "" || re_pass == "" || user_tel == "" || code == "") {
		layer.open({
			content: "请将注册资料填写完整",
			skin: 'msg',
			time: 2
		});
		return;
	}

	// if(!(/^1\d{10}$/.test(user_tel))){
	//   layer.open({content: "请输入正确的手机号",skin: 'msg',time: 2});
	//   return;
	//}

	if(user_pass != re_pass) {
		layer.open({
			content: "两次输入密码不一致",
			skin: 'msg',
			time: 2
		});
		return;
	}

	layer.open({
		type: 2
	});

	$.ajax({
		"type": "POST",
		"url": BASE_URL + "/register.html",
		"data": {
			"user_acc": user_acc,
			"user_pass": user_pass,
			"re_pass": re_pass,
			"user_tel": user_tel,
			"code": code,
			"invite": invite
		},
		"success": function(rtnData) {
			layer.closeAll();
			var data = eval('(' + rtnData + ')');
			layer.open({
				content: data.msg,
				skin: 'msg',
				time: 2
			});
			if(data.code == 1) {
				if(browser.versions.weixin)
					location.href = APPDOWNLOAD;
				else
					location.href = "home.html";
			}
		},
		"error": function() {
			layer.closeAll();
			layer.open({
				content: "请求失败，请检查网络状况",
				skin: 'footer'
			});
		}
	});
}

function checkInviteIsExist() {
	var invite = $("input[name='invite']").val();
	$.ajax({
		"type": "POST",
		"url": BASE_URL + "/checkInviteIsExist.html",
		"data": {
			"token": invite
		},
		"success": function(rtnData) {
			var data = eval('(' + rtnData + ')');
			$("#invite_check").css("display", "block");
			if(data.code == 1) {
				$("#invite_check").find("span").text(data.data.nick_name);
			} else {
				$("#invite_check").find("span").text("推荐人不存在");
			}
		},
		"error": function() {
			layer.closeAll();
			layer.open({
				content: "请求失败，请检查网络状况",
				skin: 'footer'
			});
		}
	});
}

/*******************************************************工具方法**********************************************************/
//毫秒转换为天时分秒的时间格式
function formatDuring(mss) {
	var days = parseInt(mss / (1000 * 60 * 60 * 24));
	var hours = parseInt((mss % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
	var minutes = parseInt((mss % (1000 * 60 * 60)) / (1000 * 60));
	var seconds = (mss % (1000 * 60)) / 1000;
	return days + "d " + hours + "h " + minutes + "m " + seconds + "s";
}

//获取get中参数的值
function getQueryString(name) {
	var reg = new RegExp("(^|&)" + name + "=([^&]*)(&|$)", "i");
	var r = window.location.search.substr(1).match(reg);
	if(r != null) return unescape(r[2]);
	return null;
}

//开始短信获取倒计时
function startCountDown(time) {
	timer_nowtime = time;
	if(timer_target) clearTimeout(timer_target);

	if(time > 0) {
		time--;
		$(".btn-getverify").text("等待" + time + "s");
		setTimeout(function() {
			startCountDown(time)
		}, 1000)
	} else {
		if(timer_target) clearTimeout(timer_target);
		$(".btn-getverify").text("获取验证码");
	}
}

function imgLoadError(e) {
	e.src = "img/personal/pc_hp.png";
}

function getUrlParam() {
	var url = location.search; //获取url中"?"符后的字串
	var theRequest = new Object();
	if(url.indexOf("?") != -1) {
		var str = url.substr(1);
		strs = str.split("&");
		for(var i = 0; i < strs.length; i++) {
			theRequest[strs[i].split("=")[0]] = unescape(strs[i].split("=")[1]);
		}
	}
	return theRequest;
}

function isnull(e) {
	if(e == null || e == '' || e == undefined || e == 'null')
		return true;
	else
		return false;
}

//滚动条在Y轴上的滚动距离

function getScrollTop() {　　
	var scrollTop = 0,
		bodyScrollTop = 0,
		documentScrollTop = 0;　　
	if(document.body) {　　　　
		bodyScrollTop = document.body.scrollTop;　　
	}　　
	if(document.documentElement) {　　　　
		documentScrollTop = document.documentElement.scrollTop;　　
	}　　
	scrollTop = (bodyScrollTop - documentScrollTop > 0) ? bodyScrollTop : documentScrollTop;　　
	return scrollTop;
}

//文档的总高度

function getScrollHeight() {　　
	var scrollHeight = 0,
		bodyScrollHeight = 0,
		documentScrollHeight = 0;　　
	if(document.body) {　　　　
		bodyScrollHeight = document.body.scrollHeight;　　
	}　　
	if(document.documentElement) {　　　　
		documentScrollHeight = document.documentElement.scrollHeight;　　
	}　　
	scrollHeight = (bodyScrollHeight - documentScrollHeight > 0) ? bodyScrollHeight : documentScrollHeight;　　
	return scrollHeight;
}

//浏览器视口的高度

function getWindowHeight() {　　
	var windowHeight = 0;　　
	if(document.compatMode == "CSS1Compat") {　　　　
		windowHeight = document.documentElement.clientHeight;　　
	} else {　　　　
		windowHeight = document.body.clientHeight;　　
	}　　
	return windowHeight;
}

/**
 * [isMobile 判断平台]
 * @param test: 0:iPhone    1:Android
 */
function ismobile(test) {
	var u = navigator.userAgent,
		app = navigator.appVersion;
	if(/AppleWebKit.*Mobile/i.test(navigator.userAgent) || (/MIDP|SymbianOS|NOKIA|SAMSUNG|LG|NEC|TCL|Alcatel|BIRD|DBTEL|Dopod|PHILIPS|HAIER|LENOVO|MOT-|Nokia|SonyEricsson|SIE-|Amoi|ZTE/.test(navigator.userAgent))) {
		if(window.location.href.indexOf("?mobile") < 0) {
			try {
				if(/iPhone|mac|iPod|iPad/i.test(navigator.userAgent)) {
					return '0';
				} else {
					return '1';
				}
			} catch(e) {}
		}
	} else if(u.indexOf('iPad') > -1) {
		return '0';
	} else {
		return '1';
	}
};

/*******************************************************app壳配置参数**********************************************************/

var HEADSETING = (function() {
	var setupWebViewJavascriptBridge = function(callback) {
		if(window.WebViewJavascriptBridge) {
			return callback(WebViewJavascriptBridge);
		}
		if(window.WVJBCallbacks) {
			return window.WVJBCallbacks.push(callback);
		}
		window.WVJBCallbacks = [callback];
		var WVJBIframe = document.createElement('iframe');
		WVJBIframe.style.display = 'none';
		WVJBIframe.src = 'wvjbscheme://__BRIDGE_LOADED__';
		document.documentElement.appendChild(WVJBIframe);
		setTimeout(function() {
			document.documentElement.removeChild(WVJBIframe);
		}, 0);
	};

	var jsonData = {
		"tophide": "0",
		"backhide": "0",
		"backurl": "http://120.79.139.253/center.html",
		"title": "个人中心",
		"edithide": "0",
		"editurl": "",
		"editext": "",
		"topbgcolor": "#3E78BD",
		"textcolor": "#ffffff"
	};

	var delFun = {
		"baseData": jsonData,
		"registerEvent": setupWebViewJavascriptBridge,
		"setData": function(param) {
			this.baseData = param;
		},
		"getData": function() {
			var jsonStr = JSON.stringify(this.baseData);
			var isAndroid = false;
			try {
				window.tlsj.getInfo(jsonStr);
				isAndroid = true;
			} catch(e) {
				try {
					this.registerEvent(function(bridge) {
						var uniqueId = 1;

						function log(message, data) {
							var log = document.getElementById('log');
							var el = document.createElement('div');
							el.className = 'logLine';
							el.innerHTML = uniqueId++ + '. ' + message + ':<br/>' + JSON.stringify(data);
							if(log.children.length) {
								log.insertBefore(el, log.children[0]);
							} else {
								log.appendChild(el);
							}
						}

						bridge.registerHandler('testJavascriptHandler', function(data, responseCallback) {
							log('ObjC called testJavascriptHandler with', data);
							var responseData = {
								'Javascript Says': 'Right back atcha!'
							};
							log('JS responding with', responseData);
							responseCallback(responseData);
						});

						bridge.callHandler('getInfo', jsonStr, function(response) {
							ISANDROID = true;
						});
					});
				} catch(e) {}
			}
			return isAndroid;
		},
		"showOrHide": function(array) {
			if(array == null)
				array = document.body.childNodes;
			var target;
			for(var i = 0; i < array.length; i++) {
				if(array[i].className != null && ((array[i].className).indexOf("nav-two") != -1 || (array[i].className).indexOf("space-43") != -1)) {
					target = array[i];
					target.className += " hide";
				} else {
					var child = array[i].childNodes;
					this.showOrHide(child);
				}
			}
		},
		"callCarmera": function(infos) {
			try {
				window.tlsj.onCamera(infos);
			} catch(e) {
				try {
					this.registerEvent(function(bridge) {
						var uniqueId = 1;

						function log(message, data) {
							var log = document.getElementById('log');
							var el = document.createElement('div');
							el.className = 'logLine';
							el.innerHTML = uniqueId++ + '. ' + message + ':<br/>' + JSON.stringify(data);
							if(log.children.length) {
								log.insertBefore(el, log.children[0]);
							} else {
								log.appendChild(el);
							}
						}

						bridge.registerHandler('HEADSETING.backFun', function(data, responseCallback) {
							HEADSETING.backFun(data);
							var res = {
								"msg": "success"
							};
							responseCallback(res);
						});

						bridge.callHandler('onCamera', infos, function(response) {});
					});
				} catch(e) {
					alert(e.message);
					return;
				}
			}
		},
		"jumpToPay": function(infos) {
			try {
				window.tlsj.onPay(infos);
			} catch(e) {
				try {
					this.registerEvent(function(bridge) {
						var uniqueId = 1;

						function log(message, data) {
							var log = document.getElementById('log');
							var el = document.createElement('div');
							el.className = 'logLine';
							el.innerHTML = uniqueId++ + '. ' + message + ':<br/>' + JSON.stringify(data);
							if(log.children.length) {
								log.insertBefore(el, log.children[0]);
							} else {
								log.appendChild(el);
							}
						}

						bridge.callHandler('onPay', infos, function(response) {});
					});
				} catch(e) {
					alert(e.message);
					return;
				}
			}
		},
		"playMusic": function() {
			try {
				window.tlsj.playMusic();
			} catch(e) {
				try {
					this.registerEvent(function(bridge) {
						var uniqueId = 1;

						function log(message, data) {
							var log = document.getElementById('log');
							var el = document.createElement('div');
							el.className = 'logLine';
							el.innerHTML = uniqueId++ + '. ' + message + ':<br/>' + JSON.stringify(data);
							if(log.children.length) {
								log.insertBefore(el, log.children[0]);
							} else {
								log.appendChild(el);
							}
						}

						bridge.callHandler('playMusic', "", function(response) {});
					});
				} catch(e) {
					alert(e.message);
					return;
				}
			}
		},
		"backFun": function(data) {
			if(this.baseData.hasOwnProperty("callBackFun")) {
				this.baseData.callBackFun(data);
			}
		},
		"clearCache": function() {
			try {
				window.tlsj.clearCache();
				layer.open({
					content: "成功清除缓存！",
					skin: 'footer'
				});
				setTimeout(function() {
					location.reload(true);
				}, 1000);
			} catch(e) {

			}
		},
		"checkVersionJS": function() {
			try {
				window.tlsj.checkVersionJS();
			} catch(e) {

			}
		}
	};
	return delFun;
})();

function checkI18IsEnd(backfun) {
	if(ISI18NINITONLOAD) {
		backfun();
	} else
		setTimeout(function() {
			checkI18IsEnd(backfun);
		}, 200);
}