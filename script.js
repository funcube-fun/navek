// Массив товаров
const products = [
    { id: 1, name: 'Пенопласт 1', price: 500, category: 'penoplast' },
    { id: 2, name: 'Пенопласт 2', price: 600, category: 'penoplast' },
    { id: 3, name: 'Декор 1', price: 800, category: 'decor' },
    { id: 4, name: 'Декор 2', price: 900, category: 'decor' },
    { id: 5, name: 'Арт изделие 1', price: 1200, category: 'art' },
    { id: 6, name: 'Арт изделие 2', price: 1500, category: 'art' },
    { id: 7, name: 'Другие товары 1', price: 700, category: 'other' },
    { id: 8, name: 'Другие товары 2', price: 750, category: 'other' }
];

// Корзина
let cart = [];

// Функция добавления товара в корзину
function addToCart(productId) {
    const product = products.find(p => p.id === productId);
    if (product) {
        cart.push(product);
        updateCart();
    }
}

// Функция обновления корзины
function updateCart() {
    const cartItems = document.getElementById('cart-items');
    const total = document.getElementById('total');
    
    // Очищаем список товаров в корзине
    cartItems.innerHTML = '';
    
    let totalPrice = 0;
    
    // Добавляем товары в корзину
    cart.forEach(item => {
        const li = document.createElement('li');
        li.textContent = `${item.name} - ${item.price} руб.`;
        cartItems.appendChild(li);
        totalPrice += item.price;
    });

    // Обновляем общую сумму
    total.textContent = `Общая сумма: ${totalPrice} руб.`;
}

// Добавляем обработчики событий для кнопок "Добавить в корзину"
document.querySelectorAll('.add-to-cart').forEach(button => {
    button.addEventListener('click', () => {
        const productId = parseInt(button.closest('.product').getAttribute('data-id'));
        addToCart(productId);
    });
});

// Обработчик для кнопки "Оформить заказ"
document.getElementById('checkout').addEventListener('click', () => {
    if (cart.length > 0) {
        alert('Заказ оформлен! Спасибо за покупку!');
        cart = [];
        updateCart();
    } else {
        alert('Корзина пуста!');
    }
});
