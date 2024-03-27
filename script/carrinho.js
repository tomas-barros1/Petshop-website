let totalElement;

function displayCart() {
  const cart = JSON.parse(localStorage.getItem("cart"));
  const cartList = document.getElementById("cart");
  totalElement = document.createElement("h3");
  let total = 0;

  cartList.innerHTML = "";

  if (cart && cart.length > 0) {
    cart.forEach((item) => {
      const cartItem = document.createElement("li");

      const itemImage = document.createElement("img");
      itemImage.src = item.image;
      itemImage.alt = item.name;
      cartItem.appendChild(itemImage);

      const itemName = document.createElement("p");
      itemName.textContent = item.name;
      cartItem.appendChild(itemName);

      const itemPrice = document.createElement("p");
      itemPrice.textContent = item.price;
      cartItem.appendChild(itemPrice);

      cartList.appendChild(cartItem);

      total += parseFloat(item.price.replace("R$", "").replace(",", "."));
    });

    totalElement.textContent = `Total: R$ ${total.toLocaleString("pt-BR", {
      minimumFractionDigits: 2,
    })}`;
    cartList.parentNode.insertBefore(totalElement, cartList.nextSibling);
  } else {
    cartList.innerHTML = "<h1>Carrinho vazio</h1>";
  }
}

window.onload = displayCart;

function cleanCart() {
  if (confirm("Tem certeza de que quer remover os itens do seu carrinho?")) {
    localStorage.removeItem("cart");
    displayCart();
    const totalElement = document.querySelector("h3");
    if (totalElement) {
      totalElement.textContent = `Total: R$ 0,00`;
    }
  }
}
