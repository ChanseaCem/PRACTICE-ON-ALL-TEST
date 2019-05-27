/**
 * verification v1.0.0
 * Author:Chansea Cem
 * Includes: tellphone verification, ID verification
 * Date: Wed Jun 13 2018 16:49:55 GMT+0800
 */

//省代码
var cityCode={
	11:"北京",
	12:"天津",
	13:"河北",
	14:"山西",
	15:"内蒙古",
	21:"辽宁",
	22:"吉林",
	23:"黑龙江",
	31:"上海",
	32:"江苏",
	33:"浙江",
	34:"安徽",
	35:"福建",
	36:"江西",
	37:"山东",
	41:"河南",
	42:"湖北",
	43:"湖南",
	44:"广东",
	45:"广西",
	46:"海南",
	50:"重庆",
	51:"四川",
	52:"贵州",
	53:"云南",
	54:"西藏",
	61:"陕西",
	62:"甘肃",
	63:"青海",
	64:"宁夏",
	65:"新疆",
	71:"台湾",
	81:"香港",
	82:"澳门",
	91:"国外"
}; 

/**
 * [身份证号合法性验证]
 * 身份证号码为15位或者18位：
 * 15位时全为数字（6位地址码+6位出生年月+3位顺序码）；
 * 18位时前17位为数字（6位地址码+8位出生年月+3位顺序码+1位校验码），最后一位是校验位可能为数字或字符X；
 * @param {[String]} cardNum [身份证号码]
 */
function IdCodeValid(cardNum){ 
	var myDate = new Date();
	console.log(myDate.getFullYear());

	//验证15位身份证号码是否为全数字
	var isDigital15=/(^\d{15}$)/;

	//验证18位身份证号码是否是17为数字+1位验证码（数字或X或x）
	var isDigital18=/(^\d{17}(\d|X|x)$)/;
	
	//地址码
	var addrCode = /[1-9]\d{5}/;
	var getAddrNum = cardNum.substring(0,6);

	//出生年月
	var birthCode15 = /(0[1-9]|1[012])(0[1-9]|[12]\d|3[01])/;//15位验证
	var birthCode18 = /(18|19|20)\d{2}(0[1-9]|1[012])(0[1-9]|[12]\d|3[01])/;//18位验证
	var getBirthday15 = cardNum.substring(6,12);
	var getBirthday18 = cardNum.substring(6,14);		

	//校验码
	var checkCode = /(\d|[xX])/;//18位验证
	var getCheckCode = cardNum.substring(17);
	
	if(isDigital15.test(cardNum)) { //15位
		console.log("身份证输入的15位合法");
		if(cityCode[cardNum.substring(0,2)]){
			console.log("省地址码合法");
			if(birthCode15.test(getBirthday15)){
				console.log("出生年月合法");
				return true; 
			}
			console.log("出生年月不合法");
			return false; 
		}
		console.log("省地址码不合法");
		return false; 
	}else if(isDigital18.test(cardNum)) { //18位
		console.log("身份证输入的18位合法");
		if(cityCode[cardNum.substring(0,2)]){
			console.log("省地址码合法");
			if(birthCode18.test(getBirthday18)){
				console.log("出生年月合法");
				if(checkCode.test(getCheckCode)){

					//18位身份证需要验证最后一位校验位  
		            cardNum = cardNum.split('');  

		            //∑(ai×Wi)(mod 11)  
		            //加权因子  
		            var factor = [ 7, 9, 10, 5, 8, 4, 2, 1, 6, 3, 7, 9, 10, 5, 8, 4, 2 ];  

		            //校验位  
		            var parity = [ 1, 0, 'X', 9, 8, 7, 6, 5, 4, 3, 2 ];  

		            var sum = 0;  
		            var ai = 0;  
		            var wi = 0;  
		            for (var i = 0; i < 17; i++){  
		                ai = cardNum[i];  
		                wi = factor[i];  
		                sum += ai * wi;  
		            }  
		            if(parity[sum % 11] != cardNum[17].toUpperCase()){ 
						console.log("身份证号校验位错误"); 
						return false; 
		            }  
					console.log("校验码合法");
					return true; 
				}
				console.log("校验码不合法");
				return false; 
			}
			console.log("出生年月不合法");
			return false; 
		}
		console.log("省地址码不合法");
		return false; 
	}
	console.log("身份证输入不合法");
	return false;
}

/**
 * [手机号验证]
 * @param  {[String]}  poneInput [手机号]
 * @return {Boolean}            [description]
 */
function isPoneValid(phoneNum) {  
	var myreg=/^1[3456789][0-9]{9}$/;  
	if (!myreg.test(phoneNum)) {  
	    return false;  
	} else {  
	    return true;  
	}  
}  

/**
 * 邮箱
 */