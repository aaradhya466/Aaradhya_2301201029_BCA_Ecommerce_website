
// Sample products data (up to 10 products)
const products = [
    { id: 1, name: 'Product 1', price: 19.99, image: 'https://blue-skincare.com/cdn/shop/files/Huilelavante.png?v=1714481783' },
    { id: 2, name: 'Product 2', price: 29.99, image: 'https://www.refinery29.com/images/10963913.png' },
    { id: 3, name: 'Product 3', price: 39.99, image: 'https://pyxis.nymag.com/v1/imgs/8f1/23c/51f77b272ac55e1305858ee3696066085b.rsquare.w600.jpg' },
    { id: 4, name: 'Product 4', price: 49.99, image: 'https://blue-skincare.com/cdn/shop/files/soinskerato-reducteur.png?crop=center&height=2244&v=1714482665&width=2244' },
    { id: 5, name: 'Product 5', price: 59.99, image: 'https://media6.ppl-media.com/tr:h-235,w-235,c-at_max,dpr-2/static/img/product/370136/pond-s-super-light-gel-hydrated-glow-100ml-98g_1_display_1709977053_8b9ba990.jpg' },
    { id: 6, name: 'Product 6', price: 69.99, image: 'https://cdn.shopify.com/s/files/1/1626/8575/products/violets-are-blue-skincare-beloved-line-571622.jpg?v=1633849730' },
    { id: 7, name: 'Product 7', price: 79.99, image: 'https://aavrani.com/cdn/shop/files/Powered_By_Science._Inspired_By_Tradition_Section_M_1024x1024.jpg?v=1710184148' },
    { id: 8, name: 'Product 8', price: 89.99, image: 'https://aavrani.com/cdn/shop/files/INFOGRAPHIC_BENEFITS_5698bb6d-f123-4cc7-afe8-851d6f1c7374.jpg?v=1715802958' },
    { id: 9, name: 'Product 9', price: 99.99, image: 'https://assets.myntassets.com/dpr_1.5,q_60,w_400,c_limit,fl_progressive/assets/images/29237734/2024/5/14/56faff41-4cae-4fe7-bd14-0bfbd8d197011715669225664AntipigmentationCombo1.jpg' },
    { id: 10, name: 'Product 10', price: 109.99, image: 'https://stylecaster.com/wp-content/uploads/2021/11/MRVL-Skin-Products.jpeg?w=670' }
];

let cart = [];

// Function to render products
function renderProducts() {
    const productList = document.getElementById('product-list');
    productList.innerHTML = '';
    products.forEach(product => {
        const productElement = document.createElement('div');
        productElement.className = 'product';
        productElement.innerHTML = `
            <img src="${product.image}" alt="${product.name}">
            <h3>${product.name}</h3>
            <p>$${product.price.toFixed(2)}</p>
            <button onclick="addToCart(${product.id})">Add to Cart</button>
        `;
        productList.appendChild(productElement);
    });
}

// Function to add a product to the cart
function addToCart(productId) {
    const product = products.find(p => p.id === productId);
    cart.push(product);
    updateCart();
}

// Function to update the cart display
function updateCart() {
    const cartItems = document.getElementById('cart-items');
    const cartCount = document.getElementById('cart-count');
    cartItems.innerHTML = '';
    cart.forEach((item, index) => {
        const cartItem = document.createElement('div');
        cartItem.className = 'cart-item';
        cartItem.innerHTML = `
            <p>${item.name} - $${item.price.toFixed(2)}</p>
            <button onclick="removeFromCart(${index})">Remove</button>
        `;
        cartItems.appendChild(cartItem);
    });
    cartCount.innerText = cart.length;
}

// Function to remove a product from the cart
function removeFromCart(index) {
    cart.splice(index, 1);
    updateCart();
}

// Function to handle checkout (simplified for demo)
function checkout() {
    if (cart.length === 0) {
        alert('Your cart is empty!');
        return;
    }
    alert('Checkout functionality is not implemented yet.');
}

// Initialize the products display
renderProducts();
