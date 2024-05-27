
class TreeNode {
    constructor(data) {
        this.data = data; 
        this.left = null; 
        this.right = null; 
    }
}


class BST {
    constructor() {
        this.root = null; 
    }


    insert(data) {
        const newNode = new TreeNode(data);
        if (this.root === null) {
            this.root = newNode;
        } else {
            this.insertNode(this.root, newNode);
        }
    }

    insertNode(node, newNode) {
        if (newNode.data.id < node.data.id) {
            if (node.left === null) {
                node.left = newNode;
            } else {
                this.insertNode(node.left, newNode);
            }
        } else {
            if (node.right === null) {
                node.right = newNode;
            } else {
                this.insertNode(node.right, newNode);
            }
        }
    }

    inOrder(node, callback) {
        if (node !== null) {
            this.inOrder(node.left, callback);
            callback(node.data);
            this.inOrder(node.right, callback);
        }
    }
}

export { BST, TreeNode };
