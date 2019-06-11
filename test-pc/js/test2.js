var obj = {
	arr: new Array(9).fill(null),
	xIsNext: true,
	isWinner: false,
	his: [],
	current: 0
}
$(".square").on("click", function() {
	var person = obj.xIsNext ? "X" : "O";
	if(!obj.isWinner) {
		var str = $(this).text();
		if(!str) {
			$(this).html(person);
		} else {
			return;
		}
	} else {
		return;
	}

	var arr = obj.arr.slice();
	arr[parseInt($(this).attr("tag"))] = person;
	obj.arr = arr;
	obj.his.push(arr)
	
	var p = '<button style="margin:10px" id="history'+ (obj.current) +'" tag="' + obj.current + '">第' + (obj.current+1) + '步</button>';
	$("#his").append(p);
	obj.current++;

	var status = '';
	var winner = isWinner(arr);
	if(winner) {
		status = "Winner is:" + winner;
		obj.isWinner = true;
	} else {
		status = "Next is:" + person;
	}
	$(".status").text(status)
	obj.xIsNext = !obj.xIsNext;
	console.log(obj)
})

$(document).on("click", "#his button", function() {
	var i = $(this).attr("tag");
	obj.current = parseInt(i) + 1;
	$(".square").each(function(index, item) {
		$(this).text('');
		if(obj.his[i][index] != null) {
			$(this).text(obj.his[i][index])
		}
	})
	obj.xIsNext = !obj.xIsNext;
	var winner = isWinner(obj.his[obj.current-1]);
	if(winner) {
		obj.isWinner = true;
	}else{
		obj.isWinner = false;
	}
	console.log(obj)
})

function isWinner(arr) {
	const lines = [
		[0, 1, 2],
		[3, 4, 5],
		[6, 7, 8],
		[0, 3, 6],
		[1, 4, 7],
		[2, 5, 8],
		[0, 4, 8],
		[2, 4, 6]
	];
	for(let i = 0; i < lines.length; i++) {
		var [a, b, c] = lines[i];
		if(arr[a] && arr[a] == arr[b] && arr[a] == arr[c]) {
			return arr[a];
		}
	}
	return null;
}