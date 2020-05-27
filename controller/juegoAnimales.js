var b1=document.getElementById('button1');
var b2=document.getElementById('button2');
var b3=document.getElementById('button3');
var b4=document.getElementById('button4');





function Toque(b)
{	
	let url_image;
	switch (b.dataset.animal) {
		case "gatito":
			url_image='url(../images/gato.jpg)';
			break;
		default:
			// statements_def
			break;
	}
	
	
	console.log("comence a ejecutar");
	b.style.backgroundImage =url_image;
	setTimeout(function(){
		b.style.backgroundImage = 'none';
		},1500);
	console.log("deje de ejecutar");
	
}

