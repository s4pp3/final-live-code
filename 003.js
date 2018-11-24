/*
========================================
Array Mastery: The Most Favorite Actor
========================================

Function mostFavoriteActor adalah function yang menerima satu parameter berupa array of string.
Function akan menghitung setiap jumlah value di dalam array tersebut.

Function akan mereturn nilai berupa string dengan pola:
=> actor(jumlahVoting), actor(jumlahVoting), actor(jumlahVoting).
Kemudian, setiap actor yang ditampilkan harus berurut dari jumlah voting terbesar ke terkecil
[CONTOH]
input: ['Lee Min Ho', 'Lee Min Ho', 'Lee Kwang Soo', 'Lee Min Ho', 'Lee Kwang Soo', 'Rain', 'Lee Minho']));
output: 'Lee Min Ho(3), Lee Kwang So(2) , Rain(1)'

RULES:
 - DILARANG menggunakan function ES6 SET
 - DILARANG menggunakan built in function .map, .filter dan .reduce
*/

function mostFavoriteActor(arr){
	var result = [];
	for(var i=0;i<arr.length;i++){
		var aktor = arr[i].toLowerCase();
		if(result.toString().toLowerCase().indexOf(aktor) == -1)
			result.push(arr[i]);
	}
	var amount = [];
	for(var i=0;i<result.length;i++){
		var n = 0;
		for(var j=0;j<arr.length;j++){
			if(result[i].toLowerCase() === arr[j].toLowerCase())
				n++;
		}
		amount.push(n);
	}
	var final_result = [];
	for(var i=0;i<result.length;i++){
		final_result.push(result[i]+'('+amount[i]+')');
	}
	return final_result.join(', ');
}

console.log(mostFavoriteActor(['Lee Min Ho', 'Lee Min Ho', 'Lee Kwang Soo', 'Lee Min Ho', 'Lee Kwang Soo', 'Rain', 'Lee Min ho']));
//'Lee Min Ho(3), Lee Kwang So(2) , Rain(1)'

console.log(mostFavoriteActor(['Cha Tae Hyun', 'Ha Jung Wo', 'Cha Tae Hyun', 'Ju Ji Hoon']));
// 'Cha Tae Hyun(2), Ha Jung Wo(1), Ju Ji Hoon(1)'
