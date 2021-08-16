// format nya adalah ["MarketName-jamBuka", "lokasi-jamTutup"]
// ex ["GrandLucky-10", "SCBD-22"],

const retails = [
	['GrandLucky-10', 'SCBD-22'],
	['FoodHall-10', 'Setiabudi-21'],
	['RanchMarket-11', 'Pondok Indah-21'],
	['Giant-10', 'Slipi-19'],
	['RanchMarket-11', 'Mega Kuningan-21'],
	['FoodHall-10', 'Epicentrum-20'],
	['LotteMart-10', 'Kuningan City-21'],
	['RanchMarket-11', 'Kemang-22'],
];

//   1. Buatlah function changeFormatData() untuk mengubah format menjadi berikut
// output = [
//     ['GrandLucky', 10, 'SCBD', 22],
//     ['FoodHall', 10, 'Setiabudi', 21],
//     ['RanchMarket', 11, 'Pondok Indah', 21],
//     ['Giant', 10, 'Slipi', 19],
//     ['RanchMarket', 11, 'Mega Kuningan', 21],
//     ['FoodHall', 10, 'Epicentrum', 20],
//     ['LotteMart', 10, 'Kuningan City', 21],
//     ['RanchMarket', 11, 'Kemang', 22],
//   ]

function changeFormatData(retails) {
	let output = [];
	// Put ur code here

	// loop through the retails array
	for (let i = 0; i < retails.length; i++) {
		let row = [];

		// loop through the rows
		for (let j = 0; j < retails[i].length; j++) {
			let temp = '';

			// loop through the characters
			for (let k = 0; k < retails[i][j].length; k++) {
				// if '-', push into row and reset temp
				// otherwise, put the string into temp
				if (retails[i][j][k] === '-') {
					row.push(temp);
					temp = '';
				} else {
					temp += retails[i][j][k];
				}

				// push the last set of string as a number into the row array
				if (k === retails[i][j].length - 1) {
					row.push(Number(temp));
					temp = '';
				}
			}
		}
		output.push(row);
	}
	return output;
}

//   2. Buatlah function cleanData() untuk membersihkan data yang redundant
//  data redundant yang dikeep adalah data dengan jam tutup retail paling lama apabila sama maka ambil satu aja
// didalam function cleanData() akan akan diisi dengan parameter yang sudah diformat menggunakan function changeFormatData()
//  sehingga outputnya adalah sbb:
// output = [
//     ['GrandLucky', 10, 'SCBD', 22],
//     ['FoodHall', 10, 'Setiabudi', 21],
//     ['RanchMarket', 11, 'Kemang', 22],
//     ['Giant', 10, 'Slipi', 19],
//     ['LotteMart', 10, 'Kuningan City', 21],
//   ]

function cleanData(retailsData) {
	let output = [];
	// Put ur code here

	// loop through the retailsData array
	for (let i = 0; i < retailsData.length; i++) {
		let rawHours = retailsData[i][3] - retailsData[i][1];
		let dataExist = false;

		for (let j = 0; j < output.length; j++) {
			let outputHours = output[j][3] - output[j][1];
			if (retailsData[i][0] === output[j][0]) {
				dataExist = true;
				if (rawHours > outputHours) {
					output[j] = retailsData[i];
				}
			}
		}

		if (!dataExist) {
			output.push(retailsData[i]);
		}
	}
	return output;
}

// 3. Buatlah function getClosingTimeAverage() untuk menghitung rata2 jam tutup semua retails
// didalam function getClosingTimeAverage() akan memanggil function changeFormatData() dan  cleanData()
// (22+21+22+19+21)/5 = 21
// output = `Closing Time Average is 21`

function getClosingTimeAverage(rawRetails) {
	let output;
	let newFormData = changeFormatData(rawRetails);
	let cleanedData = cleanData(newFormData);

	let totalHours = 0;
	for (let i = 0; i < cleanedData.length; i++) {
		totalHours += cleanedData[i][3];
	}

	output = totalHours / cleanedData.length;

	// Put ur code here
	return `Closing Time Average is ${output}`;
}

console.log(getClosingTimeAverage(retails));

console.log(`Happy Weekend..... \n Jangan lupa bahagia :)) ~ Seven`);
