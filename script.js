* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}

body {
    font-family: Arial, sans-serif;
    background-color: #f4f4f4;
    color: #333;
}

/* Шапка */
header {
    background-color: #333;
    color: white;
    padding: 20px 0;
}

header .container {
    width: 80%;
    margin: 0 auto;
    text-align: center;
}

header nav ul {
    list-style-type: none;
    display: flex;
    justify-content: center;
    margin-top: 10px;
}

header nav ul li {
    margin: 0 15px;
}

header nav ul li a {
    color: white;
    text-decoration: none;
}

.hero-section {
    background-image: url('https://via.placeholder.com/1200x400');
    background-size: cover;
    background-position: center;
    color: white;
    padding: 100px 0;
    text-align: center;
}

.hero-section h2 {
    font-size: 36px;
    margin-bottom: 20px;
}

.hero-section p {
    font-size: 18px;
}

.product-section {
    padding: 40px 0;
}

.product-section h2 {
    text-align: center;
    font-size: 28px;
    margin-bottom: 20px;
}

.products {
    display: flex;
    gap: 20px;
    justify-content: center;
}

.product {
    background-color: white;
    padding: 20px;
    border-radius: 5px;
    box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
    text-align: center;
    width: 200px;
}

.product img {
    width: 100%;
    height: 200px;
    object-fit: cover;
}

button {
    background-color: #28a745;
    color: white;
    border: none;
    padding: 10px 20px;
    cursor: pointer;
    border-radius: 5px;
    margin-top: 10px;
}

button:hover {
    background-color: #218838;
}

#cart {
    background-color: white;
    padding: 40px;
    box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
}

#cart-items {
    list-style-type: none;
    padding: 0;
}

#checkout {
    background-color: #007bff;
    color: white;
    border: none;
    padding: 10px 20px;
    cursor: pointer;
    border-radius: 5px;
    margin-top: 20px;
}

#checkout:hover {
    background-color: #0056b3;
}

.container {
    width: 80%;
    margin: 0 auto;
}
