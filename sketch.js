function trimestre(){
	var multi = document.getElementById("g").value;
	var atv = document.getElementById("a").value;
	var par = document.getElementById("p").value;
	var tri = document.getElementById("t").value;

	final = (parseFloat(multi) + parseFloat(atv) + parseFloat(par *3 ) + parseFloat(tri * 5)) / 10;

	alert("Sua média é:  " + final);

}

function limparLabel(){
  document.getElementById("p").value = '';
  document.getElementById("t").value = '';
  document.getElementById("g").value = '';
  document.getElementById("a").value = '';

}   