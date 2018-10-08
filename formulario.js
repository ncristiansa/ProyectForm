var cont=0;
var chverde="https://banner2.kisspng.com/20180330/ulq/kisspng-check-mark-computer-icons-clip-art-green-tick-5abe6d6b71c054.1884367415224292914659.jpg";
var chrojo="https://banner2.kisspng.com/20180328/toe/kisspng-mitchell-aluminium-american-red-cross-symbol-clip-wrong-5abc6250e6c9b6.5732349715222953769453.jpg";
var chblanco="https://orig00.deviantart.net/f2ca/f/2011/148/c/0/png_fondo_blanco_by_camilhitha124-d3hgxl4.png";
var contador2=0;
var conGlobal = cont+contador2;

function comprobar1(){
	var radios = document.getElementsByName("iptRes");
	var btncomp = document.getElementById("btnRadio");


	if(radios[0].checked){
		document.getElementById("btnRadio").disabled = true;
		document.getElementById("btnReset").disabled = true;
		document.getElementById("imagenp11").src=chverde;
		document.getElementById("pcolor").style.background =" #d4f9a5 ";
		cont = cont +1;
	}
	else if(radios[1].checked){
		document.getElementById("imagenp12").src=chrojo;
		document.getElementById("pcolor2").style.background=" #f79185 ";
		cont = cont +1;
	}
	else if(radios[2].checked){
		document.getElementById("imagenp13").src=chrojo;
		document.getElementById("pcolor3").style.background=" #f79185 ";
		cont = cont +1;
	}	
	document.getElementById("btnRadio").disabled = true;
	
	document.getElementById("pContador").innerHTML = "Contador: "+cont+"/3";
	
	if(cont>=3){
		document.getElementById("btnRadio").disabled = true;
		document.getElementById("btnReset").disabled = true;

	}
}
function resetear(){
	document.getElementById("btnRadio").disabled = false;
	document.getElementById("imagenp11").src=chblanco;
	document.getElementById("imagenp12").src=chblanco;
	document.getElementById("imagenp13").src=chblanco;
	document.getElementById("intp1").checked=false;
	document.getElementById("intp2").checked=false;
	document.getElementById("intp3").checked=false;
	document.getElementById("pcolor").style.background ="";
	document.getElementById("pcolor2").style.background="";
	document.getElementById("pcolor3").style.background="";
}


function comprobar2(){
	var ch1= document.getElementById('verdad').checked;
	var ch2= document.getElementById('falso').checked;
	
	
	if(ch1==true){
		document.getElementById("imagen1").src=chrojo;
		contador2=contador2+1;
		document.getElementById("pcolor4").style.background="#f79185";
	}
	else if(ch2==true){
		document.getElementById("imagen2").src=chverde;
		contado2r=contador2+1;
		document.getElementById("enviar").disabled=true;
		document.getElementById("reset").disabled=true;
		document.getElementById("pcolor5").style.background="#d4f9a5";
	}
	if(contador2>=3){
		document.getElementById("enviar").disabled=true;
		document.getElementById("reset").disabled=true;
	}
	document.getElementById("cont").innerHTML="Contador: "+contador2+"/3";
	document.getElementById("enviar").disabled=true;

}

function limpiar(){
	
	document.getElementById("imagen1").src=chblanco;
	document.getElementById("imagen2").src=chblanco;
	document.getElementById("enviar").disabled=false;
	document.getElementById('verdad').checked=false;
	document.getElementById('falso').checked=false;
	document.getElementById("pcolor4").style.background="";
	document.getElementById("pcolor5").style.background="";

}

function p3desactivar(){
	document.getElementById("enviar3").disabled = true;
}

function b3activar(){
	document.getElementById("enviar3").disabled = false;
}

function respuesta3(){
	document.getElementById("p3r").innerHTML = "Es un deporte reconocido mundialmente."

}

function reiniciar3(){
	document.getElementById("p3r").innerHTML = "";
	document.getElementById("tx3").value="";
	document.getElementById("enviar3").disabled = true;
}
