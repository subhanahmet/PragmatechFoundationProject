// Div class ile
// ----------------------------------------


let box = document.querySelector('.slide-content')

poz = 0


function test() {
	box.style.transform = `translateX(${poz - 1000}px)`
	poz += -1000

	if (poz < -2000) {
		poz = 0
		box.style.transform = "translateX(0px)"
		// box.style.transform = `translateX(${poz + 3000}px)`
		// box.style.transform = `translateX(${poz - 1000}px)`
		// poz -= 1000
	}
}

// setInterval('test()', 2000)

// Settime
// ----------------------------------------

// Set the date we're counting down to
var countDownDate = new Date("May 5, 2021 15:37:25").getTime();

// Update the count down every 1 second
var x = setInterval(function() {

  // Get today's date and time
  var now = new Date().getTime();
    
  // Find the distance between now and the count down date
  var distance = countDownDate - now;
    
  // Time calculations for days, hours, minutes and seconds
  var days = Math.floor(distance / (1000 * 60 * 60 * 24));
  var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  var seconds = Math.floor((distance % (1000 * 60)) / 1000);
    
  // Output the result in an element with id="demo"
  document.getElementById("demo").innerHTML = days + "d " + hours + "h "
  + minutes + "m " + seconds + "s ";
    
  // If the count down is over, write some text 
  if (distance < 0) {
    clearInterval(x);
    document.getElementById("demo").innerHTML = "EXPIRED";
  }
}, 1000);




// Buton ile sağa sola kaydırma
// ----------------------------------------




// let prevBtn = document.querySelector('#prevBtn')
// let nextBtn = document.querySelector('#nextBtn')
// // let box = document.querySelector('.slide-content')
// let imgSrc = document.querySelector('.slide')

// // var bigBox = document.querySelector(".slider-frame")

// // let slides = [{
// // 		img: 'img/1.jpg',
// // 	},
// // 	{
// // 		img: 'img/2.jpg',
// // 	},
// // 	{
// // 		img: 'img/3.jpg',
// // 	}
// // ]

// // prevBtn.disabled = true
// // nextBtn.disabled = false

// // poz = 0;

// let i = 0;
// imgSrc.setAttribute('src', slides[0].img)

// nextBtn.addEventListener('click', function(){
// 	// poz += 
// 	prevBtn.disabled = false
// 	imgSrc.style.transform = `translateX(${poz}px)`;
// 	imgSrc.setAttribute('src', slides[i+1].img)
// 	// poz += 1000
// 	i++

// 	if(i == slides.length -1){
// 		nextBtn.disabled = true
// 	}
// })

// prevBtn.addEventListener('click', function(){
// 	nextBtn.disabled = false
// 	imgSrc.setAttribute('src', slides[i-1].img)
// 	i--
// 	if (i == 0){
// 		prevBtn.disabled = true
// 	}
// })



// let photo = document.querySelector('.slide img')

// function zoomOut() {
// 	photo.style.transform = `translateX(${poz - 1000}px)`;
// 	poz += -1000
// }



// prevBtn.disabled = true
// nextBtn.disabled = false