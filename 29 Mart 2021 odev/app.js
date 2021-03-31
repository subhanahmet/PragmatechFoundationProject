let prevBtn = document.querySelector('#prevBtn')
let nextBtn = document.querySelector('#nextBtn')
let box = document.querySelector('.box')
var bigBox = document.querySelector(".slider-frame")

poz = 0

nextBtn.addEventListener("click", function(){
	box.style.transform = `translateX(${poz + 50}px)`
	poz += 50
	if (poz == 300){
		
	}
	
})

prevBtn.addEventListener("click", function(){
	box.style.transform = `translateX(${poz - 50}px)`
	poz -= 50
})

