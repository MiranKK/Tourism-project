

var slider_img=document.querySelector('.slider-img');

var hotels=['Rotana1.jpg','Rotana2.jpg','Rotana3.jpg','Rotana4.jpg','Rotana5.jpg'];

var s=0;


function perv(){
if(s <= 0) s=hotels.length;
s--;
return setImg();

}

function next(){
if (s>=hotels.length-1) s=-1;
s++;
return setImg();

}

function setImg(){

  return slider_img.setAttribute('src',''+ hotels[s]);
}