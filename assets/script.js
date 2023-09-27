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
 const carrouselElementsInfoE = document.querySelector(".banner-text");
 const carrouselElementsDotsContainer = document.querySelector(".dots");
 
carrouselElementsLeftArrow.addEventListener("click", function (){
	carouselClick('gauche');
});

carrouselElementsRightArrow.addEventListener("click", function (){
	carouselClick('droite')
});

function creaDots() {
	for (let i = 0; i < slides.length; i++) {
	  let dot = document.createElement("span");
	  dot.classList.add("dot");
	  if (i === currentSlide) {
		dot.classList.add("dot_selected");
	  }
	  dot.addEventListener("click", () => {
		goToSlide(i);
	  });
	  carrouselElementsDotsContainer.appendChild(dot);
	}
  }

function goToSlide(slideIndex) {
	currentSlide = slideIndex;
	updateCarousel();
  }

creaDots()

function carouselClick(direction) {
	if ('gauche' === direction) {
		if(currentSlide<=0){
			currentSlide = slides.length-1;
		}else{
			currentSlide--;
		}
	}
	else {
		if(currentSlide>=slides.length-1){
			currentSlide = 0;
		}else {
			currentSlide++;
		}
	}
	updateCarousel();
  }
  
function updateCarousel() {
	let dots = document.querySelectorAll(".dot");
	dots.forEach((dot, index) => {
	  if (index === currentSlide) {
		dot.classList.add("dot_selected");
	  } else {
		dot.classList.remove("dot_selected");
	  }
	});	

	let src = "./assets/images/slideshow/"+ slides[currentSlide].image;
	carrouselElementsImage.setAttribute("src", src);

	carrouselElementsInfoE.innerHTML = slides[currentSlide].tagLine;

}


