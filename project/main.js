let box = document.querySelector('.slide-content')

poz = 0


function test() {
	box.style.transform = `translateX(${poz - 1000}px)`
	poz += -1000

	if (poz < -2000) {
		box.style.transform = "translateX(0px)"
	}
}

setInterval('test()', 2000)


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






