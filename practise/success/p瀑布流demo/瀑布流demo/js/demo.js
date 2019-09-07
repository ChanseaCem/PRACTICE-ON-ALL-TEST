/**
 * jq写法
 * 
 * outerWidth() //不包含margin
 * innerWidth()//不包含margin border
 * width()   //不包含padding margin border
 */
$(window).on('load',function(){
    var allBox = $("#main .box");
    var boxWidth = allBox.outerWidth();   //一个盒子的宽度
    var screenWidth = $(window).width();   //可见区域的宽
    var cols = parseInt(screenWidth/boxWidth);  //列数
    var heightArr = [];//获取高度
    //遍历  for    forEach()
    $.each(allBox,function(index,item){
        var boxHeight = $(item).outerHeight();  //每张图片高度
        if(index < cols) {
            heightArr[index] = boxHeight;//var arr=[]; arr[0]=1;arr[1]=2;
        }else {
            //最小的高度  var arr = [100,120,200]    apply()
            var minBoxHeight = Math.min.apply(null,heightArr);
            //最小高度的索引 $.inArray(value,arr)数组中查找指定值 并返回它的索引（没有找到会返回-1）
            var minHeightIndex = $.inArray(minBoxHeight,heightArr);
            $(item).css({
                position:'absolute',
                left:minHeightIndex*boxWidth+'px',
                top:minBoxHeight +'px'
            });
            //最小高度更新
            heightArr[minHeightIndex] += boxHeight;
        }
    })
})



/**
 * 原生js写法
 */
//window.onload = function(){
//	var allBox = document.getElementsByClassName("box");
//	console.log(typeof allBox)
//	var boxWidth = allBox[0].clientWidth;
//	var screenWidth = document.body.clientWidth;
//	var cols = parseInt(screenWidth/boxWidth);
//	var heightArr = [];
//	for(var i in allBox){
//		var boxHeight = allBox[i].offsetHeight;
//		 if(i < cols) {
//          heightArr[i] = boxHeight;
//      }else {
//      	console.log(typeof parseInt(i));
//			if(!isNaN(i)){
//	        	var minBoxHeight = Math.min.apply(null,heightArr);
//	        	var minHeightIndex = heightArr.indexOf(minBoxHeight);
//	        	allBox[i].style.position = "absolute";
//	        	allBox[i].style.left = minHeightIndex*boxWidth+'px';
//	        	allBox[i].style.top = minBoxHeight +'px';
//			}
//      }
//      heightArr[minHeightIndex] += boxHeight;
//	}
//}
