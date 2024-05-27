import { addProduct, showProducts } from './controllers/productController.js';

const productForm = document.getElementById('product-form');
const showProductsButton = document.getElementById('show-products');

productForm.addEventListener('submit', (e) => {
    e.preventDefault();
    const productId = parseInt(document.getElementById('product-id').value);
    const productName = document.getElementById('product-name').value;
    
    addProduct(productId, productName);
    productForm.reset();
});

showProductsButton.addEventListener('click', () => {
    showProducts();
});
    