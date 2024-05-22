const slides = [
	{
		"image":"./assets/images/slideshow/slide1.jpg",
		"tagLine":"Impressions tous formats <span>en boutique et en ligne</span>"
	},
	{
		"image":"./assets/images/slideshow/slide2.jpg",
		"tagLine":"Tirages haute définition grand format <span>pour vos bureaux et events</span>"
	},
	{
		"image":"./assets/images/slideshow/slide3.jpg",
		"tagLine":"Grand choix de couleurs <span>de CMJN aux pantones</span>"
	},
	{
		"image":"./assets/images/slideshow/slide4.png",
		"tagLine":"Autocollants <span>avec découpe laser sur mesure</span>"
	}
]
//mes variables
const arrowRight= document.querySelector(".arrow_right")
const arrowLeft= document.querySelector(".arrow_left")
let image= document.querySelector(".banner-img")
let tagLine=document.querySelector("#banner p" )
let dots=document.querySelector(".dots")
let i=0;
/*ajout event listener Right*/
    arrowRight.addEventListener("click",() =>{
	let serieDot=document.querySelectorAll(".dots .dot")
	serieDot[i].classList.remove("dot_selected")
    i ++;
	if (i>=slides.length) {
		i=0; 
	}
	serieDot[i].classList.add("dot_selected")
	image.src= slides[i].image;
	tagLine.innerHTML=slides[i].tagLine;
	
})

/*ajout event listener left*/

   arrowLeft.addEventListener("click",() =>{
    let serieDot=document.querySelectorAll(".dots .dot")
	serieDot[i].classList.remove("dot_selected")
    i --;
	if (i<0){
		i=slides.length-1;	
	}
	serieDot[i].classList.add("dot_selected")
	image.src= slides[i].image;
	tagLine.innerHTML=slides[i].tagLine;
	
})

/*create dots*/
function playDot (){for(let i=0 ;i<slides.length; i++) { 
let dot= document.createElement("div");
dots.appendChild(dot);
dot.classList.add("dot")
if (i==0){
	dot.classList.add ("dot_selected")
}

  }}
playDot();


