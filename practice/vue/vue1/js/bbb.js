var bobj = (function(){
	var obj = {}
	var name = "小红"
	var name2 = aobj.name;
	obj.name = name;
	console.log(name2)
	return obj
})()