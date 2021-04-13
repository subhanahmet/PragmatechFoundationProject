let prevBtn = document.querySelector('#prevBtn')
let nextBtn = document.querySelector('#nextBtn')

let imgSrc = document.querySelector('.slider-frame img')

// let imgNames=[
//     'img/1.jpg',
//     'img/2.jpg',
//     'img/3.jpg',
//     'img/4.jpg'
// ]

// let imgTitles=[
//     'Birinci seklin aciqlamasi',
//     'Ikinci seklin aciqlamasi',
//     'Ucuncu seklin aciqlamasi',
//     'Dorduncu seklin aciqlamasi',
// ]

let slides = [{
        img: 'img/1.jpg',
    },
    {
        img: 'img/2.jpg',
    },
    {
        img: 'img/3.jpg',
    }

]

imgSrc.setAttribute('src', slides[0].img)
i = 0;


nextBtn.disabled = false
prevBtn.disabled = true

nextBtn.addEventListener('click', function () {
    imgSrc.setAttribute('src', slides[i + 1].img)
    i++

    prevBtn.disabled = false

    if (i === slides.length - 1) {
        nextBtn.disabled = true
        // cells.disabled = true
    }
})

prevBtn.addEventListener('click', function () {
    imgSrc.setAttribute('src', slides[i - 1].img)
    i--
    nextBtn.disabled = false

    if (i == 0) {
        prevBtn.disabled = true
    }

})


var sag = function test() {
    imgSrc.setAttribute('src', slides[i + 1].img)
    i++

    if (i === slides.length - 1) {
        console.log("son")
        // slides[i-1].img;
        // i = 1
        // imgSrc.setAttribute('src', slides[i - 1].img)
        // i--
    }
}

var sol = function testTers() {
    imgSrc.setAttribute('src', slides[i - 1].img)
    i--
}


// setInterval(, 2000)