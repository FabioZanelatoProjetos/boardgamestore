document.addEventListener('DOMContentLoaded', () => {
    const games = [
        { id: 1, name: 'Terraforming Mars', price: 300 },
        { id: 2, name: 'Catan', price: 250 },
        { id: 3, name: 'Ticket to Ride', price: 200 }
    ];

    const cart = [];
    
    function updateCart() {
        const cartList = document.querySelector('.cart-list');
        const cartTotal = document.querySelector('.cart-total');
        cartList.innerHTML = '';
        
        let total = 0;
        cart.forEach(item => {
            const game = games.find(g => g.id === item.id);
            total += game.price * item.quantity;

            const cartItem = document.createElement('div');
            cartItem.className = 'cart-item';
            cartItem.innerHTML = `
                <span>${game.name} (x${item.quantity})</span>
                <span>R$ ${game.price * item.quantity},00</span>
            `;
            cartList.appendChild(cartItem);
        });

        cartTotal.textContent = `Total: R$ ${total},00`;
    }

    document.querySelectorAll('.add-to-cart').forEach(button => {
        button.addEventListener('click', () => {
            const gameItem = button.closest('.game-item');
            const gameId = parseInt(gameItem.getAttribute('data-id'));
            const cartItem = cart.find(item => item.id === gameId);

            if (cartItem) {
                cartItem.quantity += 1;
            } else {
                cart.push({ id: gameId, quantity: 1 });
            }
            updateCart();
        });
    });

    document.querySelector('.checkout').addEventListener('click', () => {
        alert('Compra finalizada!');
        cart.length = 0;
        updateCart();
    });
});
