// soal dari kak alam

function searchAll(input, search) {
	let output = [];
	let tempArr = [];

	for (const book of input) {
		let row = [];
		for (const property of book) {
			let tempStr = '';
			for (let i = 0; i < property.length; i++) {
				if (property[i] === '-') {
					continue;
				}

				if (property[i] === ' ') {
					if (property[i - 1] === '-') {
						continue;
					} else {
						row.push(tempStr);
						tempStr = '';
					}
				} else if (i === property.length - 1) {
					tempStr += property[i];
					row.push(tempStr);
					tempStr = '';
				} else {
					tempStr += property[i];
				}
			}
		}
		tempArr.push(row);
	}

	for (let i = 0; i < tempArr.length; i++) {
		for (let j = 0; j < tempArr[i].length; j++) {
			if (search === tempArr[i][j]) {
				output.push(input[i]);
				break;
			}
		}
	}

	return output;
}

let books = [
	['Fisika Terpadu - SMA', 'Bob Foster', 'Erlangga'],
	['Biologi Dasar - SMA', 'Irnaningtyas', 'Erlangga'],
	['Harry Potter', 'J. K. Rowling', 'Gramedia'],
	[
		'Pemrograman Web dengan Node.js dan Javascript',
		'Budi Raharjo',
		'Informatika',
	],
	['Ruby untuk Aplikasi Desktop dan Web', 'Budi Raharjo', 'Informatika'],
];

console.log(searchAll(books, 'dan'));
