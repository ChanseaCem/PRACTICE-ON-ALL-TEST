var BASE_PATH = "http://localhost:8083";
var ITEM = "XU";
var BASE_WEB_PATH = BASE_PATH + "/" + ITEM;


/**
 * 判断值是否为空
 * @param e
 * @returns {boolean}
 */
function isnull(e) {
    if (e == null || e == '' || e == undefined || e == 'null')
        return true;
    else
        return false;
}

/**
 * 判断值是否为空（判断所有选项）
 * @param e
 * @returns {boolean}
 */
function isNullOfObj(obj) {
    for(var i in obj){
        if(obj[i]==""){
            layer.open(i+"选项输入为空，请填写完整");
            return;
        }
    }
}