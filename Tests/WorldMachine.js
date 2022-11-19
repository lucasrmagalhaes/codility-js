function solution(s) {
    let op = s.split(" ");
	let arr = [];

    let opList = {
	    "POP": function() {
			if (arr.length < 1) {
				return "-1";	
			} else {
			    arr.pop();
			}
		},
		"DUP": function() {
			if (arr.length < 1) {
				return "-1";
			} else {
				arr.push(arr[arr.length - 1]);
			}
		},
		"+": function() {
			if (arr.length < 2) {
				return "-1";
			} else {
				let temp1 = arr.pop();
				let temp2 = arr.pop();
				let sum = temp1 + temp2;
				
                arr.push(sum);
			}
		},
		"-": function() {
			if (arr.length < 2) {
				return -1;
			} else {
				let temp1 = arr.pop();
				let temp2 = arr.pop();
				let sub = temp1 - temp2;
				
                if (sub < 0) {
					return "-1";
				} else {
					arr.push(sub);
				}
			}
		}
	};

	for (let i = 0; i < op.length; i++) {
		let num = parseInt(op[i]);

        if (num == 1048575) {
            return -1;
        }

		if (isNaN(num)) {
			let result = opList[op[i]]();

			if (result == -1) {
				return parseInt(result);
			}
		} else {
			arr.push(num);
		}
	}

	return arr.pop();
}