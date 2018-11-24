/**
  Diberikan sebuah function bernama findRowPrime
  Function tersebut akan menerima sebuah parameter number.
  Function akan me-return deret prima ke berapa parameter tersebut (asumsi input
  parameter pasti bilangan prima)

  RULES
  -----
  - WAJIB MENYERTAKAN ALGORITMA/PSEUDOCODE

**/

function findRowPrime(n){
  var isPrime = true;
  var pos = 0;
  for(var j=1;j<n;j++){
  	isPrime = true;
	for(var i = 2; i < j; i++){
	  if(j % i === 0) 
	   	isPrime = false;
	}
	if(isPrime)
		pos++;
  }
  return pos;
}
console.log(findRowPrime(7)); //4
console.log(findRowPrime(229)); //50
console.log(findRowPrime(37)); //12
