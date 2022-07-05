
/*izm=document.getElementById('test1');
izm.onclick = hide;
izm.onclick = tall;

function hide() {
	console.log(this);
	this.classList.toggle('invisible');
	}
function tall() {
	this.classList.toggle('tall');
}

znach=document.getElementById('test3');
plusznach=document.getElementById('testplus');
minusznach=document.getElementById('testminus');
x=1;
plusznach.onclick = nextZ;
minusznach.onclick = prevZ;

function plus() {
	return x+1;
}
function minus() {
	return x-1;
}
function nextZ() {
	
	Znach = plus();
	znach.innerHTML=Znach;
}
function prevZ() {
	
	Znach = minus();
	znach.innerHTML=Znach;
}*/
plusimg=document.getElementById('imgplus');
minusimg=document.getElementById('imgminus');
plusimg.onclick = nextIMG;
minusimg.onclick = prevIMG;

function nextIMG() {
	nImg=document.getElementById('image_back');
	if (x<4){x=plus();} else {x=1;}
	nImg.style.backgroundImage='url('+x+'.jpg)';
}
function prevIMG() {
	nImg=document.getElementById('image_back');
	console.log(nImg)
	if (x>1){x=minus();} else {x=4;}
	console.log(x)
	nImg.style.backgroundImage='url('+x+'.jpg)';
	console.log(nImg)
}

/*inner=prompt("ВВедите содержание дивов");
console.log(inner);
for (i=0; i<inner.length; i+=1) {
	x=document.createElement('div');
	x.innerHTML=inner[i];
	document.body.append(x);
}*/

main_div=document.querySelector("div");
main_div.onmousedown=function(e)
	{
	main_div.onmousemove=function(e) {
			point(e);
							}
	}
	main_div.onmouseup=function(e) {
			stop();
	}
function point(e){
	div=document.createElement('div');
	div.classList.toggle('point')
	console.log(e.client);
	
		div.style.left=e.clientX+"px";
		div.style.top=e.clientY+"px";
		main_div.append(div);

}

function stop() {
main_div.onmousemove=0;}