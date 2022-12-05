let cart = localStorage.getItem("cartHeart")
  ? JSON.parse(localStorage.getItem("cartHeart"))
  : [];

function displayCartProduct() {
  const cartWrapper = document.querySelector(".cart-wrapper");
  let result = "";
  cart.forEach((item) => {
    result += `
   <tr class="cart-item">
    <td></td>
    <td class="cart-image">
        <img src=${item.img.singleImage} alt="">
    </td>
    <td>${item.name}</td>
    <td>$${item.price.newPrice.toFixed(2)}</td>
    <td class="product-quantity">${item.quantity}</td>
    <td class="product-subtotal">$${(
        item.price.newPrice * item.quantity
      ).toFixed(2)}</td>
    <td> 
      <button class="btn btn-primary btn-sm" data-id=${item.id}>Add to cart</button>
    </td>
   </tr>
   
   `;
  });
  cartWrapper.innerHTML = result;
}

displayCartProduct();

