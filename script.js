* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}

body {
    font-family: 'Arial', sans-serif;
    background-color: #f4f4f4;
    color: #333;
}

/* Шапка */
header {
    background-color: #333;
    color: white;
    padding: 20px 0;
}

.header-container {
    display: flex;
    justify-content: space-between;
    align-items: center;
}

.logo img {
    width: 150px;
    height: auto;
}

/* Главный экран */
.hero-section {
    background-image: url('https://via.placeholder.com/1200x500'); /* Замените на свое изображение */
    background-size: cover;
    background-position: center;
    padding: 100px 0;
    color: white;
    text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.5);
    text-align: center;
}

.hero-content h2 {
    font-size: 48px;
    margin-bottom: 20px;
}

.hero-content p {
    font-size: 24px;
}

/* Секция категорий */
.categories-section {
    padding: 40px 0;
    background-color: #fff;
}

.categories-section h2 {
    font-size: 32px;
    margin-bottom: 30px;
}

.categories {
    display: flex;
    justify-content: space-around;
    gap: 20px;
}

.category {
    width: 250px;
    text-align: center;
    background-color: #fff;
    border-radius: 8px;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
    overflow: hidden;
    transition: transform 0.3s ease;
}

.category:hover {
    transform: scale(1.05);
}

.category img {
    width: 100%;
    height: 150px;
    object-fit: cover;
}

.category h3 {
    font-size: 22px;
    margin-top: 10px;
}

.category p {
    font-size: 16px;
    padding: 10px;
}

.category-link {
    display: inline-block;
    background-color: #007bff;
    color: white;
    padding: 10px 20px;
    text-decoration: none;
    border-radius: 5px;
    margin-top: 10px;
    font-size: 16px;
    transition: background-color 0.3s;
}

.category-link:hover {
    background-color: #0056b3;
}

/* Секции товаров */
.product-section {
    padding: 40px 0;
    background-color: #fff;
}

.product-section h2 {
    font-size: 32px;
    margin-bottom: 30px;
}

.products {
    display: flex;
    gap: 20px;
    justify-content: center;
}

.product {
    background-color: #fff;
    border-radius: 8px;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
    text-align: center;
    width: 250px;
    padding: 20px;
    transition: transform 0.3s ease;
}

.product:hover {
    transform: scale(1.05);
}

.product img {
    width: 100%;
    height: 200px;
    object-fit: cover;
    border-radius: 8px;
}

.product h3 {
    font-size: 20px;
    margin-top: 15px;
}

.product p {
    font-size: 18px;
    margin: 10px 0;
}

button {
    background-color: #28a745;
    color: white;
    border: none;
    padding: 10px 20px;
    cursor: pointer;
    border-radius: 5px;
    margin-top: 10px;
    font-size: 16px;
    transition: background-color 0.3s;
}

button:hover {
    background-color: #218838;
}
