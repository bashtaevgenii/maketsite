/*
x=document.createElement("div");
x.class="container text-center";
x.innerHTML="Привет";
document.body.appendChild(x);

ul=document.createElement("ul");
ul.innerHTML="Список строк";
q=1;
nameLi="li"+q;
nameLi=document.createElement("li");
nameLi.innerHTML="Line №" + q;
q++;
ul.append(nameLi);
nameLi="li"+q;
nameLi=document.createElement("li");
nameLi.innerHTML="Line №" + q;
q++;
ul.append(nameLi);
nameLi="li"+q;
nameLi=document.createElement("li");
nameLi.innerHTML="Line №" + q;
q++;
ul.append(nameLi);
nameLi="li"+q;
nameLi=document.createElement("li");
nameLi.innerHTML="Line №" + q;
q++;
ul.append(nameLi);
nameLi="li"+q;
nameLi=document.createElement("li");
nameLi.innerHTML="Line №" + q;
q++;
ul.append(nameLi);
document.body.appendChild(ul);

ul2=document.createElement("ul");
v=prompt("введите число");
v=Number(v);
for (w=1; w<=v; w++) 
{
	nameLi2="li"+w;
	nameLi2=document.createElement("li");
	nameLi2.innerHTML="Line №" + w;
	ul2.append(nameLi2);	
}
document.body.appendChild(ul2);

table=document.createElement("table");
stroki=prompt("введите число");
stroki=Number(stroki);
stolbci=prompt("введите число");
stolbci=Number(stolbci);
for (r=1; r<=stroki; r++) 
{
	stroka="tr"+r;
	stroka=document.createElement("tr");
	for (c=1; c<=stolbci; c++) 
{
	stolbec="td"+c;
	stolbec=document.createElement("td");
	stolbec.innerHTML=r+""+c;
	stolbec.style.backgroundColor=r*61680+c*256;
	stolbec.style.height="20px";
	stolbec.style.width="50px";
	stroka.append(stolbec);
}
table.append(stroka);}
document.body.appendChild(table);

zx=0;
function sravnenie_3x_4isel() {
str=prompt("введите число строк x");
stl=prompt("введите число столбцов y");
sloi=prompt("введите число слоев z");
if (str==sloi && sloi==stl)alert("Все равны");
else if (str>stl) {if (stl>sloi) alert("Строк больше "+str);
				else { if (str>sloi)alert("Строк больше "+str);
						else {alert("Слоев больше "+sloi);}}} 
else {if (str>sloi) alert("Столбцов больше "+stl);
				else { if (stl>sloi)alert("Столбцов больше "+str);
						else {alert("Слоев больше "+sloi);}}}
zx++;
if (zx<3) sravnenie_3x_4isel();
}
sravnenie_3x_4isel();*/


tag=prompt("Введите название тэга");
inner=prompt("ВВедите содержание тэга");

x=document.createElement(tag);
x.innerHTML=inner;
x.style.height='200px';
x.style.width='500px';
x.style.backgroundColor='#22FF66';
x.onclick=klak;
document.body.append(x);

function klak() {
	q=document.getElementsByTagName(tag) [1];
	w=q;
	q.style.height="300px";
	q.style.width="700px";
	q.style.backgroundColor="#1166FF";
}



