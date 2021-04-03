// var itemTransaction = document.querySelector('.item')

function closeOverlay(elem){
    document.body.removeChild(elem.parentElement)
}

function closeBosluqOverlay(elem){
    document.body.removeChild(elem)
    
}

function showBigImage(elem){
    // console.log(elem.getAttribute('src'))
    let overlayContent=`
    <div class="overlay" onclick="closeBosluqOverlay(this)">
        <div class="close" onclick="closeOverlay(this)">
            <i class="bi bi-x-square"></i>
        </div>
        <img src="${elem.getAttribute('src')}" alt="">
    </div>`


    document.body.innerHTML+=overlayContent
// itemTransaction.style.transition = "all 20s";

}

