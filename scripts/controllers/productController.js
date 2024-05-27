import { BST } from '../models/BST.js';
import { addProductToList, clearProductList } from '../views/ui.js';

const bst = new BST();

function addProduct(productId, productName) {
    const product = { id: productId, name: productName };
    bst.insert(product);
}

function showProducts() {
    clearProductList();
    let products = [];
    bst.inOrder(bst.root, (data) => products.push(data));

    let i = 0;
    const interval = setInterval(() => {
        if (i < products.length) {
            addProductToList(products[i]);
            i++;
        } else {
            clearInterval(interval);
        }
    }, 1000);
}

export { addProduct, showProducts };
