


function productName(){
    var name = document.querySelector('.product_title.entry-title').innerText
    return name
}




function transaction(){
// Item Names

function printItemNames(){
    var hrefs = document.querySelectorAll("body > div.elementor-section.elementor-section-boxed > div > div > div > section > table > tbody > tr > td.woocommerce-table__product-name.product-name > a")
    var result = []
    hrefs.forEach(function(e){
        result.push(e.innerText)
    })
    return result
}

productNameList = printItemNames()

// Item Price

function printItemPrices(){
    var hrefs = document.querySelectorAll("body > div.elementor-section.elementor-section-boxed > div > div > div > section > table > tbody > tr > td.woocommerce-table__product-total.product-total > span > bdi");
    var result = []
    hrefs.forEach(function(e){
        result.push(e.innerText.slice(0, -2).replace(',', '.'))
    })
    return result
}

priceList = printItemPrices()

// Item Quantity

function printItemQuantity(){
    var hrefs = document.querySelectorAll("body > div.elementor-section.elementor-section-boxed > div > div > div > section > table > tbody > tr > td.woocommerce-table__product-name.product-name > strong")
    var result = []
    hrefs.forEach(function(e){
        result.push(e.innerText.slice(2))
    })
    return result
}

item_quantity = printItemQuantity()

var products = [];

for(var i=0; i<productNameList.length;i++){
products.push({
    name: productNameList[i],
    price: priceList[i],
    quantity : item_quantity[i]
})
}

return products
}


function printItemNames(){
    var hrefs = document.querySelectorAll("td.cart-product-name > a")
    var result = []
    hrefs.forEach(function(e){
        x = (e.textContent)
        remove_after= x.indexOf('\n');
        aa =  x.substring(0, remove_after);
        result.push(aa)
    })
    return result
}

function printItemNames(){
    var hrefs = document.querySelectorAll("body > div.elementor-section.elementor-section-boxed > div > div > div > section > table > tbody > tr > td.woocommerce-table__product-name.product-name > a")
    var result = []
    hrefs.forEach(function(e){
        result.push(e.innerText)
    })
    return result
}




