function somar(a,b){
	return parseInt(a) + parseInt(b);
}

//console.log(somar(2, 5));

document.querySelector("#calcular").addEventListener("click",function () {
	let valorA = document.querySelector("#valorA").value;
	let valorB = document.querySelector("#valorB").value;
	if (valorA.length > 0 && valorB.length > 0) {
		//alert(parseInt(valorA)+ parseInt(valorB));
		alert(somar(valorA, valorB));
	} else {
		alert("Digite os valores para o cálculo");
	}
} );