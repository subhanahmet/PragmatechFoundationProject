var btnTitle = document.querySelector(".accordion-item.header")

showHideGizlidir = true

showHide = function(e){
    if(showHideGizlidir){
        e.nextElementSibling.className = "my-0 p-2 bg-light border show"
        showHideGizlidir = false
    } else {
        e.nextElementSibling.className = "my-0 p-2 bg-light border hide"
        showHideGizlidir = true
    }
}
