function init() {

	const a = 0;
	var b = 1;
	let c = 2;
	this.aaa = 5;

	this.f1 = function() {
		this.name = "zhang";
		console.log(this.name);
		console.log(this.aaa);
		
	};

	(() => {
		console.log(a)
		console.log(b)
		console.log(c)
		console.log(this.aaa)
		console.log();
		this.f1();
	})();
}

init()