let priceForWash = document.getElementById("price-wash")
let priceForMow = document.getElementById("price-mow")
let priceForPull = document.getElementById("price-pull")
let totalAmount = document.getElementById("price-total")
let mowBtn = document.getElementById("mow-btn")
let washBtn = document.getElementById("wash-btn")
let pullBtn = document.getElementById("pull_weeds-btn")
let removeWashBtn = document.getElementById("remove_wash-btn")
let removeMowBtn = document.getElementById("remove_mow-btn")
let removePullBtn = document.getElementById("remove_pull-btn")
const washPrice = 10
const mowPrice = 20
const pullPrice = 30

washBtn.addEventListener("click", function() {
     if (priceForWash.textContent === "$0"){
        priceForWash.textContent = "$" + washPrice
        total_amount()
     }

})
mowBtn.addEventListener("click", function(){
    if (priceForMow.textContent === "$0"){
        priceForMow.textContent = "$" + mowPrice
        total_amount()
        }
        
})
pullBtn.addEventListener("click", function(){
    if (priceForPull.textContent === "$0") {
        priceForPull.textContent = "$" + pullPrice
        total_amount()
    }

})
removeWashBtn.addEventListener("click", function() {
    priceForWash.textContent = "$0"
    total_amount()
})
removeMowBtn.addEventListener("click", function() {
    priceForMow.textContent= "$0"
    total_amount()
})
removePullBtn.addEventListener("click", function() {
    priceForPull.textContent= "$0"
    total_amount()
})
function total_amount(){
    let price1 = parseInt(priceForWash.textContent.replace( /^\D+/g, ''))
    if (price1 === null) {
        price1 = 0
    }
    let price2 = parseInt(priceForMow.textContent.replace( /^\D+/g, ''))
    if (price2 === null) 
        price2 = 0
    let price3 = parseInt(priceForPull.textContent.replace( /^\D+/g, ''))
    if (price3 === null) 
        price3 = 0
   
    let total = price1+price2+price3
    totalAmount.textContent =  "$" + total
}

