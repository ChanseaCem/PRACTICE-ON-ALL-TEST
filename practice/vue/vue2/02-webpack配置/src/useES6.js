// es6导出用法
export let userinEs6 = "这个是es6导出用法"

export function sumEs6(){
	let total = 0;
	for(let i=0;i<arguments.length;i++){
		total += arguments[i]
	}
	return total;
}