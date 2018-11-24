/*
	sebuah function arrayPanjangGanjil menerima array yang berisi string
	function ini akan mengembalikan array yang berisi data yang hanya memiliki
  jumlah karakter bernilai ganjil.

	Note:
	Wajib menggunakan metode recursive

	Contoh
	console.log(arrayPanjangGanjil(['satu', 'dua', 'tiga', 'empat']));

	Hasil
	['dua', 'empat']
*/

function arrayPanjangGanjil(datas){
	if(datas.length == 0){
		return datas;
	}else{
		if(datas[datas.length-1].length%2 != 0)
			return arrayPanjangGanjil(datas.slice(0,-1)).concat(datas[datas.length-1]);
		else
			return arrayPanjangGanjil(datas.slice(0,-1));
	}
}

console.log(arrayPanjangGanjil(['satu', 'dua', 'tiga', 'empat'])); // ['dua', 'empat']
console.log(arrayPanjangGanjil(['banyak', 'jalan', 'menuju', 'roma'])); // [ 'jalan' ]
console.log(arrayPanjangGanjil(['Hab', 'geduld', 'alle', 'dinge', 'sind', 'schwierig', 'bevor', 'sie', 'leicht', 'werden'])); // [ 'Hab', 'dinge', 'schwierig', 'bevor', 'sie' ]
