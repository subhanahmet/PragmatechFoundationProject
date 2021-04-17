let prevBtn = document.querySelector('#prevBtn')
let nextBtn = document.querySelector('#nextBtn')

let imgSrc = document.querySelector('.slider-frame img')
let imgTitle = document.querySelector('.desc p')

let slides = [{
        img: 'img/1.jpg',
        title: '1-ci seklin aciqlamasi'
    },
    {
        img: 'img/2.jpg',
        title: '2-ci seklin aciqlamasi'
    },
    {
        img: 'img/3.jpg',
        title: '3-cu seklin aciqlamasi'
    }
]

imgSrc.setAttribute('src', slides[0].img)
imgTitle.innerHTML = slides[0].title
i = 0;


nextBtn.disabled = false
prevBtn.disabled = true

nextBtn.addEventListener('click', function () {
    imgSrc.setAttribute('src', slides[i + 1].img)
    imgTitle.innerHTML = slides[i + 1].title
    i++

    prevBtn.disabled = false

    if (i === slides.length - 1) {
        nextBtn.disabled = true
        // cells.disabled = true
    }
})

prevBtn.addEventListener('click', function () {
    imgSrc.setAttribute('src', slides[i - 1].img)
    imgTitle.innerHTML = slides[i - 1].title
    i--
    nextBtn.disabled = false

    if (i == 0) {
        prevBtn.disabled = true
    }

})