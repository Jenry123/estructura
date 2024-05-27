const productList = document.getElementById('product-list');

function addProductToList(product) {
    const li = document.createElement('li');
    li.textContent = `ID: ${product.id}, Nombre: ${product.name} `;
    productList.appendChild(li);
}

function clearProductList() {
    productList.innerHTML = '';
}

export { addProductToList, clearProductList };
