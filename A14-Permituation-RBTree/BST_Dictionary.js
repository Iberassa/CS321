const Tree = require('./RBTree.js');

class OrderedDictionary {  // Implemented using a Red-Black Tree
    constructor() {
        this._BST = new Tree.RedBlackTree();
    }
    findValue(key) {
        return this._BST.findValue(key);
    }
    insertItem(key, elem) {
        return this._BST.insertItem(key, elem);
    }
    removeItem(key) {
        return this._BST.removeItem(key);
    }
    size() {
        return this._BST.size();
    }
    isEmpty() {
        return this._BST.isEmpty();
    }
    items() {
        return this._BST.items();
    }
    keys() {
        return this._BST.keys();
    }
    elements() {
        return this._BST.elements();
    }
    toString() {
        let iter = this._BST.items();
        let res = "[";
        while (iter.hasNext()) {
            let item = iter.nextObject();
            if (iter.hasNext()) {
                res = res + item.toString() + ", ";
            } else {
                res = res + item.toString();
            }
        }
        return res + "]";
    }
    print() {
        console.log(this.toString());
    }
}
exports.OrderedDictionary = OrderedDictionary;