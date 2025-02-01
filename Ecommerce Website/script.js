const cartIcon = document.getElementById("cart-icon");
const cart = document.querySelector(".cart");
const closeCart = document.getElementById("close-cart");

cartIcon.onclick = () => {
  console.log(cart.classList.add("active"));
};
closeCart.onclick = () => {
  cart.classList.remove("active");
};
if (document.readyState == "loading") {
  document.addEventListener("DOMContentLoaded", ready);
} else {
  ready();
}

function ready() {
  let removeCartButtons = document.getElementsByClassName("cart-remove");
  console.log(removeCartButtons);
  for (let i = 0; i < removeCartButtons.length; i++) {
    const button = removeCartButtons[i];
    button.addEventListener("click", removeCartItem);
  }
  let quantityInputs = document.getElementsByClassName("cart-quantity");
  for (let i = 0; i < quantityInputs.length; i++) {
    const input = quantityInputs[i];
    input.addEventListener("change", quantityChanged);
  }
  const addCart = document.getElementsByClassName("add-cart");
  for (let i = 0; i < addCart.length; i++) {
    const button = addCart[i];
    button.addEventListener("clcik", addCartClicked);
  }
  document
    .getElementsByClassName("btn-buy")[0]
    .addEventListener("clcik", buyButtonClicked);
}
function buyButtonClicked() {
  alert("Your Order is placed!");
  const cartContent = document.getElementsByClassName("cart-content")[0];
  while (cartContent.hasChildNodes()) {
    cartContent.removeChild(cartContent.firstChild);
  }
  updateTotal();
}
function removeCartItem(e) {
  const buttonClicked = e.target;
  buttonClicked.parentElement.remove();
  updateTotal();
}
function quantityChanged(e) {
  const input = e.target;
  if (isNaN(input.value) || input.value <= 0) {
    input.value = 1;
  }
  updateTotal();
}
function addCartClicked(e) {
  const button = e.target;
  const shopProducts = button.parentElement;
  const title =
    shopProducts.getElementsByClassName("product-title")[0].innerHTML;
  const price = shopProducts.getElementsByClassName("price")[0].innerHTML;
  const productImg = shopProducts.getElementsByClassName("product-img")[0].src;
  addProductTo();
  updateTotal();
}

function addProductTo(title, price, productImg) {
  const cartShopBox = document.createElement("div");
  const cartItems = document.getElementsByClassName("cart-content")[0];
  const cartItemsNames = cartItems.getElementsByClassName("cart-product-title");
  for (let i = 0; i < cartItemsNames.length; i++) {
    alert("You have already add this item to cart");
    return;
  }
  const cartBoxContent = `
  <img src=${productImg} alt="" class="cart-img" />
  <div class="detail-box">
  <div class="cart-product-title">${title}</div>
  <div class="cart-price">${price}</div>
  <input type="number" value="1" class="cart-quantity" />
  </div>
  <i class="fa-solid fa-trash cart-remove"></i>
  
  `;
  }
cartShopBox.innerHTML = cartBoxContent;
cartItems.append(cartShopBox);
cartShopBox
  .getElementsByClassName("cart-remove")[0]
  .addEventListener("click", removeCartItem);
cartShopBox
  .getElementsByClassName("cart-quantity")[0]
  .addEventListener("change", quantityChanged);

function updateTotal() {
  const cartContent = document.getElementsByClassName("cart-content")[0];
  const cartBoxes = cartContent.getElementsByClassName("cart-box");
  let total = 0; // Changed 'const' to 'let' to allow reassignment
  for (let i = 0; i < cartBoxes.length; i++) {
    const cartBox = cartBoxes[i];
    const priceElement = cartBox.getElementsByClassName("cart-price")[0];
    const quantityElement = cartBox.getElementsByClassName("cart-quantity")[0];
    const price = parseFloat(priceElement.innerHTML.replace("$", ""));
    const quantity = quantityElement.value;
    total = total + price * quantity;
  }
  total = Math.round(total * 100) / 100;

  document.getElementsByClassName("total-price")[0].innerHTML = "$" + total; // Fixed the incorrect syntax
}
// cartIcon.addEventListener("click", () => {
//   console.log(cart.classList.add("active"));
// });
// closeCart.addEventListener("click", () => {
//   cart.classList.remove("active"));
// });