let dictionary = [
	'A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'Ñ', 'O', 
	'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z', 'a', 'b', 'c', 'd', 'e', 
	'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'ñ', 'o', 'p', 'q', 'r', 's', 't', 
	'u', 'v', 'w', 'x', 'y', 'z', '1', '2', '3', '4', '5', '6', '7', '8', '9', '0',
	'!', '@', '#', '$', '%', '&', ' ', ',', '.', ':', ';', '?', '¡', '-','+','¿'
];

//Funcion para encriptar en cesar
function encryptCesar(text) {
	let path = 15;
	
	let text_base = text.split('');
	
	for (let i = 0; i < text_base.length; i++) {
		let dic_temp = Array.from(dictionary);

		let step = 0;
		let letter_founded = false;

		let j = 0;
		while (step < path) {
			if(letter_founded) {
				if(j < dic_temp.length) {
					step++;
				}
			}

			if(step == path) {
				// console.log(text_base[i], '===', dic_temp[j]);
				text_base[i] = dic_temp[j];
				break;
			}

			if(dic_temp[j] == text_base[i]) {
				letter_founded = true;
			}

			if(step < path && j == dic_temp.length - 1) {
				let old = dic_temp.shift();
				dic_temp.push(old);
			} else {
				j++
			}
		}
	}

	return text_base.join("");
}

//Funcion para desencryptar cesar
function decryptCesar(text) {
	let path = 15;
	
	let text_base = text.split('');
	
	for (let i = 0; i < text_base.length; i++) {
		let dic_temp = Array.from(dictionary);

		let step = 0;
		let letter_founded = false;

		let j = dic_temp.length;
		while (step < path) {
			if(letter_founded) {
				if(j > 0) {
					step++;
				}
			}

			if(step == path) {
				// console.log(text_base[i], '===', dic_temp[j]);
				text_base[i] = dic_temp[j];
				break;
			}

			if(dic_temp[j] == text_base[i]) {
				letter_founded = true;
			}

			if(step < path && j == 1) {
				let old = dic_temp.pop();
				dic_temp.unshift(old);
			} else {
				j--;
			}
		}
	}

	return text_base.join("");
}