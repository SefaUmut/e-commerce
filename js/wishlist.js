let cart = localStorage.getItem("cartHeart")
  ? JSON.parse(localStorage.getItem("cartHeart"))
  : [];

let cartSelect = localStorage.getItem("cart") ? JSON.parse(localStorage.getItem("cart")) : [];
const products = JSON.parse(localStorage.getItem("products"));


const checkedOut = () => {
  const btns = document.querySelectorAll(".addedChart");
  let cartItems = document.querySelector(".header-cart-count");
  btns.forEach((btn) => {
    btn.addEventListener("click", function (e) {
      e.preventDefault();
      const id = e.target.dataset.id;
      const product = products.find((product) => product.id === Number(id));
      const inCart = cartSelect.find((item) => item.id === Number(id));
      if (inCart) {
        cartSelect = cartSelect.map((item) => {
          return item.id === Number(id)

            ? { ...item, quantity: item.quantity + 1 }
            : item;
        });
      } else {
        cartSelect = [...cartSelect, { ...product, quantity: 1 }];
      }
      localStorage.setItem("cart", JSON.stringify(cartSelect));
      cartItems.innerHTML = cartSelect.length;
    });
  });
};

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
      <button class="btn btn-primary btn-sm addedChart" data-id=${item.id}>Add to cart</button>
    </td>
   </tr>
   
   `;
  });
  cartWrapper.innerHTML = result;
  checkedOut();
}

displayCartProduct();

