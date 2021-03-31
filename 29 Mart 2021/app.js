let prevBtn = document.querySelector('#prevBtn')
let nextBtn = document.querySelector('#nextBtn')
let box = document.querySelector('.box')
var bigBox = document.querySelector(".slider-frame")

poz = 0;

nextBtn.addEventListener("click", function(e){
	box.style.transform = `translateX(${poz + 50}px)`
	poz += 50
})

prevBtn.addEventListener("click", function(){
	box.style.transform = `translateX(${poz - 50}px)`
	poz -= 50
})