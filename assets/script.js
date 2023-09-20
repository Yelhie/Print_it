 //variables
 const slides = [
 	{
  		"image":"slide1.jpg",
 		"tagLine":"Impressions tous formats <span>en boutique et en ligne</span>"
 	},
  	{
  		"image":"slide2.jpg",
  		"tagLine":"Tirages haute définition grand format <span>pour vos bureaux et events</span>"
  	},
  	{
  		"image":"slide3.jpg",
 		"tagLine":"Grand choix de couleurs <span>de CMJN aux pantones</span>"
  	},
  	{
 		"image":"slide4.png",
 		"tagLine":"Autocollants <span>avec découpe laser sur mesure</span>"
  	}
 ]

 let currentSlide=0;

 const carrouselElementsLeftArrow = document.querySelector(".arrow_left");
 const carrouselElementsRightArrow = document.querySelector(".arrow_right");
 const carrouselElementsImage = document.querySelector(".banner-img");
 const carrousellementsInfoE = document.querySelector(".banner-text");
 const carrouselElementsDots = document.querySelector(".dots");
 console.log(carrousellementsInfoE.innerHTML)
 

 //Event Listener
carrouselElementsLeftArrow.addEventListener("click", function (){
	carouselClick('gauche');
});

carrouselElementsRightArrow.addEventListener("click", function (){
	carouselClick('droite')
});


// création des dots
function creaDots(){
	for(let i = 0; i<slides.length; i++){
		let dot = document.createElement("div");	
		dot.classList.add("dot");

		if(currentSlide === i){
			dot.classList.add("dot_selected");
		} 
		carrouselElementsDots.appendChild(dot);
	}
}

//initialisation des dots
creaDots()

// fonction click droit / click gauche
function carouselClick(direction) {
	if ('gauche' === direction) {
		if(currentSlide<=0){
			currentSlide = slides.length-1 
		}else{
			currentSlide--
		}
	}
	else {
		if(currentSlide>=slides.length-1){
			currentSlide = 0;
		}else {
			currentSlide++
		}
	}
	
	//aprés mise à jour du currentSlide supp/créa des news dots
	carrouselElementsDots.innerHTML = ""
	creaDots()

	//changement de l'image
	let src = "./assets/images/slideshow/"+ slides[currentSlide].image
	carrouselElementsImage.setAttribute("src", src)

	//changement du texte
	carrousellementsInfoE.innerHTML = slides[currentSlide].tagLine

}


