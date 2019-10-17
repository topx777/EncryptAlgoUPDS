class Viegnere {

	constructor(text) {
		this.table = [];
		this.dictionaryV = [
			'A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'Ñ', 'O', 
			'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z', 'a', 'b', 'c', 'd', 'e', 
			'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'ñ', 'o', 'p', 'q', 'r', 's', 't', 
			'u', 'v', 'w', 'x', 'y', 'z', '1', '2', '3', '4', '5', '6', '7', '8', '9', '0',
			'!', '@', '#', '$', '%', '&', ' ', ',', '.', ':', ';', '?', '¡', '-','+','¿'
		];
		this.createTableVigenere();
		this.text = text;
		this.key = this.generateKey();
		this.enc_text = null;
		this.dec_text = null;
	}

	createTableVigenere() {
		this.dictionaryV.forEach(element => {
			let tmp_dictionaryV = Array.from(this.dictionaryV);
			let letter = null;
			do {
				letter = tmp_dictionaryV[0];
				if (element != letter) {
					let shift_let = tmp_dictionaryV.shift();
					tmp_dictionaryV.push(shift_let);
				}
			}
			while (element != letter);
			this.table.push(tmp_dictionaryV);
		});
	}

	generateKey() {
		let text_base = this.text.split("");
		let keyLength = parseInt(text_base.length / 2);
		let i = 0;
		let temp_key = "";
		while (i < keyLength) {
			temp_key += this.dictionaryV[this.getRndInteger(0, this.dictionaryV.length - 1)];
			i++;
		}
		return temp_key;
	}

	getRndInteger(min, max) {
		return Math.floor(Math.random() * (max - min)) + min;
	}

	encryptVigenere() {
		let text_base = this.text.split("");
		let key_tmp = Array.from(this.key.split(""));
		text_base.forEach(function(letter, index, array) {
			array[index] = key_tmp.shift();
			key_tmp.push(array[index]);
		});
		this.enc_text = "";

		text_base.forEach(function(letter, index) {
			let indexKey = this.dictionaryV.indexOf(letter);
			let indexText = this.dictionaryV.indexOf(this.text[index]);

			this.enc_text += this.table[indexKey][indexText];
		}.bind(this));

		return this.enc_text;
	}

	decryptVigenere() {
		let text_base = this.enc_text.split("");
		let cipher_base = Array.from(text_base);

		let key_tmp = Array.from(this.key.split(""));

		text_base.forEach(function(letter, index, array) {
			array[index] = key_tmp.shift();
			key_tmp.push(array[index]);
		});

		this.dec_text = "";

		cipher_base.forEach(function(letter, index) {
			let letterKey = text_base[index];
			let indexKey = this.dictionaryV.indexOf(letterKey);
			let indexText = this.table[indexKey].indexOf(letter);

			this.dec_text += this.dictionaryV[indexText];
		}.bind(this));

		return this.dec_text;
	}
}


