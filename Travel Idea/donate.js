let btnSubmit=document.getElementById("submit");
btnSubmit.addEventListener("click",submit);

function submit(){
    event.preventDefault();//prevents page from reloading
    console.log("Cardholder Name:",document.getElementById("name").value);
    console.log("Card Number:",document.getElementById("no").value);
    console.log("Email:",document.getElementById("email").value);
    console.log("Expiry Date",document.getElementById("exp").value);
    console.log("CVV / CVC:",document.getElementById("cvc").value);
    let amount=document.querySelector("input[name='amount']:checked").value;
console.log("Amount :"+amount);

}

//attach event handler to all room options

let amount = document.querySelectorAll("input[name='amount']");

for (let i = 0; i < amount.length; i++) {
    amount[i].addEventListener("change", checkAmount);
}

//check which value is linked to radio button

function checkAmount() {
    if (this.value == "100") {
        console.log("Donation 100 LKR");
    }
    else if (this.value == "250") {
        console.log("Donation 250 LKR");
    }
    else if (this.value == "500") {
        console.log("Donation 500 LKR");
    }
    else if (this.value == "1000") {
        console.log("Donation 1000 LKR");
    }
    else if (this.value == "2500") {
        console.log("Donation 2500 LKR");
    }
    else if (this.value == "5000") {
        console.log("Donation 5000 LKR");
    }
    else {
        console.log("Donation 10000 LKR");
    }
}

function myFunction2() {

    let cardnumber = document.getElementById("no").value
    if (cardnumber == "")
    {
        alert("Incomplete Attempt.");
    }
    else{
        alert("Success!! Thank You For Your Donation.")
    }
  }

  if (document.readyState == 'loading') {
    document.addEventListener('DOMContentLoaded', ready)
} else {
    ready()
}

function ready() {
    var removeCartItemButtons = document.getElementsByClassName('btn-danger')
    for (var i = 0; i < removeCartItemButtons.length; i++) {
        var button = removeCartItemButtons[i]
        button.addEventListener('click', removeCartItem)
    }

    var quantityInputs = document.getElementsByClassName('cart-quantity-input')
    for (var i = 0; i < quantityInputs.length; i++) {
        var input = quantityInputs[i]
        input.addEventListener('change', quantityChanged)
    }

    var addToCartButtons = document.getElementsByClassName('shop-item-button')
    for (var i = 0; i < addToCartButtons.length; i++) {
        var button = addToCartButtons[i]
        button.addEventListener('click', addToCartClicked)
    }

    document.getElementsByClassName('btn-purchase')[0].addEventListener('click', purchaseClicked)
}

function purchaseClicked() {
    alert('Thank you for your purchase')
    var cartItems = document.getElementsByClassName('cart-items')[0]
    while (cartItems.hasChildNodes()) {
        cartItems.removeChild(cartItems.firstChild)
    }
    updateCartTotal()
}

function removeCartItem(event) {
    var buttonClicked = event.target
    buttonClicked.parentElement.parentElement.remove()
    updateCartTotal()
}

function quantityChanged(event) {
    var input = event.target
    if (isNaN(input.value) || input.value <= 0) {
        input.value = 1
    }
    updateCartTotal()
}

function addToCartClicked(event) {
    var button = event.target
    var shopItem = button.parentElement.parentElement
    var title = shopItem.getElementsByClassName('shop-item-title')[0].innerText
    var price = shopItem.getElementsByClassName('shop-item-price')[0].innerText
    var imageSrc = shopItem.getElementsByClassName('shop-item-image')[0].src
    addItemToCart(title, price, imageSrc)
    updateCartTotal()
}

function addItemToCart(title, price, imageSrc) {
    var cartRow = document.createElement('div')
    cartRow.classList.add('cart-row')
    var cartItems = document.getElementsByClassName('cart-items')[0]
    var cartItemNames = cartItems.getElementsByClassName('cart-item-title')
    for (var i = 0; i < cartItemNames.length; i++) {
        if (cartItemNames[i].innerText == title) {
            alert('This item is already added to the cart')
            return
        }
    }
    var cartRowContents = `
        <div class="cart-item cart-column">
            <img class="cart-item-image" src="${imageSrc}" width="100" height="100">
            <span class="cart-item-title">${title}</span>
        </div>
        <span class="cart-price cart-column">${price}</span>
        <div class="cart-quantity cart-column">
            <input class="cart-quantity-input" type="number" value="1">
            <button class="btn btn-danger" type="button">REMOVE</button>
        </div>`
    cartRow.innerHTML = cartRowContents
    cartItems.append(cartRow)
    cartRow.getElementsByClassName('btn-danger')[0].addEventListener('click', removeCartItem)
    cartRow.getElementsByClassName('cart-quantity-input')[0].addEventListener('change', quantityChanged)
}

function updateCartTotal() {
    var cartItemContainer = document.getElementsByClassName('cart-items')[0]
    var cartRows = cartItemContainer.getElementsByClassName('cart-row')
    var total = 0
    for (var i = 0; i < cartRows.length; i++) {
        var cartRow = cartRows[i]
        var priceElement = cartRow.getElementsByClassName('cart-price')[0]
        var quantityElement = cartRow.getElementsByClassName('cart-quantity-input')[0]
        var price = parseFloat(priceElement.innerText.replace('$', ''))
        var quantity = quantityElement.value
        total = total + (price * quantity)
    }
    total = Math.round(total * 100) / 100
    document.getElementsByClassName('cart-total-price')[0].innerText = '$' + total
}
let addOrder = document.getElementById("btnOrder");
addOrder.addEventListener("click", addToOrder);
function addToOrder(){
    alert("The order is added to the current order");
}

let loyalty = document.getElementById("btnLoyalty");
loyalty.addEventListener("click", checkLoyalty);
function checkLoyalty(){
    let length = cart.length;
    if (length > 3){
        points = length * 20;
        localStorage.setItem('Loyalty points: ', points)
        console.log(localStorage);
        document.getElementById("points").innerText = `You have earned ${points} loyalty points`
    }
    else{
        document.getElementById("points").innerText = 'No loyalty points earned'
    }
}
