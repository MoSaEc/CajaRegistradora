const addToCartButtons = document.querySelectorAll('.add-to-cart');
const cartItems = document.querySelector('.cart-items');
const totalElement = document.querySelector('.total');

let total = 0;

addToCartButtons.forEach((button, index) => {
    button.addEventListener('click', () => {
        const productItem = button.closest('.product-item');
        const productName = productItem.querySelector('h3').textContent;
        const productPriceText = productItem.querySelector('p:nth-of-type(2)').textContent.split(': ')[1];
        const productPrice = parseFloat(productPriceText.replace('$', ''));
        const quantity = parseInt(productItem.querySelector('.quantity').value);

        if (quantity > 0) {
            const cartItem = document.createElement('li');
            cartItem.textContent = `${productName} x ${quantity} - $${productPrice.toFixed(2)} cada uno, Total: $${(productPrice * quantity).toFixed(2)}`;
            cartItems.appendChild(cartItem);

            total += productPrice * quantity;
            totalElement.textContent = total.toFixed(2);
        }
    });
});

window.onload = function() {
    // Obtener el nombre de usuario de localStorage
    var username = localStorage.getItem('username');
    var message= "Bienvenido: "

    var h2 = document.createElement('h2');
    h2.textContent = message + username;

    document.getElementById('username').appendChild(h2);
}
