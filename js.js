document.addEventListener('DOMContentLoaded', () => {
    const productsSection = document.getElementById('products');

    const products = [
        { id: 1, name: 'Product 1', price: '10.00', imageUrl: 'https://via.placeholder.com/150' },
        { id: 2, name: 'Product 2', price: '20.00', imageUrl: 'https://via.placeholder.com/150' },
        // Add more products as needed
    ];

    products.forEach(product => {
        const productDiv = document.createElement('div');
        productDiv.classList.add('product');
        productDiv.innerHTML = `
            <img src="${product.imageUrl}" alt="${product.name}">
            <h2>${product.name}</h2>
            <p>$${product.price}</p>
            <button>Add to Cart</button>
        `;
        productsSection.appendChild(productDiv);
    });
});
