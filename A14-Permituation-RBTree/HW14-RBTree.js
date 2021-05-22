const Tree = require('./RBTree.js');

class EulerTour {  // the Euler Tour Template class
    visitExternal(T, p, result) { }
    visitPreOrder(T, p, result) { }
    visitInOrder(T, p, result) { }
    visitPostOrder(T, p, result) { }
    eulerTour(T, p) {
        let result = new Array(3);
        if (T.isExternal(p)) {
            this.visitExternal(T, p, result);
        } else {
            this.visitPreOrder(T, p, result);
            result[0] = this.eulerTour(T, T.leftChild(p));
            this.visitInOrder(T, p, result);
            result[2] = this.eulerTour(T, T.rightChild(p));
            this.visitPostOrder(T, p, result);
        }
        return result[1];
    }
}
class PrintInOrder {  // print the items in a Tree T using an iterator
    constructor(T) {
        this._iter = T.items();
    }
    print() {
        this._iter.reset();
        let res = "[";
        while (this._iter.hasNext()) {
            let next = this._iter.nextObject();
            res = res + next.toString();
            if (this._iter.hasNext()) {
                res = res + " ";
            }
        }
        console.log(res + "]");
    }
}
class Print extends EulerTour {  // Print the items in a Red-Black Tree using the Euler Tour Template
    visitExternal(T, v, result) {
        result[1] = "";
    }
    visitPostOrder(T, v, result) {
        result[1] = "(" + result[0] + v.element().key() + "," + this.color(T, v) + result[2] + ")";
    }
    color(T, v) {
        return T.isRed(v) ? "R" : "B";
    }
    print(T) {
        if (T.size() > 0) {
            console.log("Root=" + T.root().element().key());
        }
        let res = this.eulerTour(T, T.root());
        console.log("[" + res + "]\n");
    }
}
function height(T) {
    // your code goes here Hint: you need a helper
    if (T.isEmpty()) {
        return 0
    } else
        return heightHelper(T, T.root());
}
function heightHelper(T, p) {
    if (T.isExternal(p)) {
        return 1
    }
    let countL = 0;
    let countR = 0;
    if (T.isRoot(p)) {
        countL += heightHelper(T, T.leftChild(p));
        countR += heightHelper(T, T.rightChild(p));
    } else {
        countL = 1 + heightHelper(T, T.leftChild(p));
        countR = 1 + heightHelper(T, T.rightChild(p));
    }
    if (countL >= countR) {
        return countL;
    } else
        return countR;
}
function blackHeight(T) {
    // your code goes here Hint: you need a helper
    if (T.isEmpty()) {
        return 0;
    }
    return blackHeightHelper(T, T.root());
}
function blackHeightHelper(T, p) {
    if (T.isExternal(p)) {
        if (T.isBlack(p)) {
            return 1;
        } else
            return 0;
    }
    let countB = 0
    if (T.isRoot(p)) {
        countB += blackHeightHelper(T, T.leftChild(p));
    } else{
        if (T.isBlack(p)){
            countB = 1 + blackHeightHelper(T, T.leftChild(p));
        }else{
            countB += blackHeightHelper(T, T.leftChild(p));
        } 
    }
    return countB;
}
class Height extends EulerTour {
    // add your code here, i.e., override methods from EulerTour class
    visitExternal(T, p, result) {
        result[1] = 0;
    }
    visitPostOrder(T, p, result) {
        if (result[0] > result[2]) {
            result[1] = result[0] + 1
        } else
            result[1] = result[2] + 1
    }
    height(T) {
        return this.eulerTour(T, T.root());
    }
}

class BlackHeight extends EulerTour {
    // add your code here, i.e., override methods from EulerTour class
    visitExternal(T, p, result){
        result[1] = 0;
    }
    visitPostOrder(T, p, result){
        if (T.isBlack(p)){
            result[1] = result[0] + 1;
        }else{
            result[1]=result[0];
        }
    }
    height(T) {
        return this.eulerTour(T, T.root());
    }
}
// Test cases follow here
var t0 = new Tree.RedBlackTree();

var printer = new Print();

printer.print(t0);
var h = new Height();

var t0 = new Tree.RedBlackTree();

printer.print(t0);
var h = new Height();

var bh = new BlackHeight();

console.log("height should be 0");
console.log("height=" + height(t0));
console.log("height=" + h.height(t0) + "\n"); // should be 0
console.log("black height should be 0");
console.log("black-height=" + blackHeight(t0));
console.log("black-height=" + bh.height(t0) + "\n"); // should be 0
t0.insertItem(50, 100);
printer.print(t0);
console.log("height should be 1");
console.log("height=" + height(t0));
console.log("height=" + h.height(t0) + "\n"); // should be 1
console.log("black height should be 1");
console.log("black-height=" + blackHeight(t0));
console.log("black-height=" + bh.height(t0) + "\n"); // should be 1

t0.insertItem(150, 100);
t0.insertItem(100, 100);
console.log("height should be 2");
console.log("height=" + height(t0));
console.log("height=" + h.height(t0) + "\n");
console.log("black height should be 1");
console.log("black-height=" + blackHeight(t0));
console.log("black-height=" + bh.height(t0) + "\n");
t0.insertItem(200, 100);
t0.insertItem(450, 100);
t0.insertItem(350, 100);
t0.insertItem(250, 100);
t0.insertItem(650, 100);
t0.insertItem(550, 100);
printer.print(t0);
console.log("height should be 4");
console.log("height=" + height(t0));
console.log("height=" + h.height(t0) + "\n");
console.log("black height should be 2");
console.log("black-height=" + blackHeight(t0));
console.log("black-height=" + bh.height(t0) + "\n");

t0.insertItem(500, 120);
console.log("find key= 200, value=" + t0.findValue(200));
console.log("find key= 450, value=" + t0.findValue(450));
console.log("find key= 500, value=" + t0.findValue(500));
t0.insertItem(500, 130);
console.log("find key= 500, value=" + t0.findValue(500));
t0.insertItem(500, 100);
console.log("height should be 5");
console.log("height=" + height(t0));
console.log("height=" + h.height(t0) + "\n");
console.log("black height should be 3");
console.log("black-height=" + blackHeight(t0));
console.log("black-height=" + bh.height(t0) + "\n");
let inOrderPrinter = new PrintInOrder(t0);
inOrderPrinter.print();
printer.print(t0);

console.log("remove=50 elem=" + t0.removeItem(50) + "\n");
console.log("height should be 4");
console.log("height=" + height(t0));
console.log("height=" + h.height(t0) + "\n");
console.log("black height should be 3");
console.log("black-height=" + blackHeight(t0));
console.log("black-height=" + bh.height(t0) + "\n");
console.log("remove=50 elem=" + t0.removeItem(50) + "\n");
console.log("height should be 4");
console.log("height=" + height(t0));
console.log("height=" + h.height(t0) + "\n");
console.log("black height should be 3");
console.log("black-height=" + blackHeight(t0));
console.log("black-height=" + bh.height(t0) + "\n");
console.log("remove=350 elem=" + t0.removeItem(350) + "\n");

console.log("height should be 4");
console.log("height=" + height(t0));
console.log("height=" + h.height(t0) + "\n");
console.log("black-height=" + blackHeight(t0));
console.log("black-height=" + bh.height(t0) + "\n");
console.log("black height should be 3");
console.log("remove=200 elem=" + t0.removeItem(200) + "\n");

console.log("height should be 4");
console.log("height=" + height(t0));
console.log("height=" + h.height(t0) + "\n");
console.log("black height should be 2");
console.log("black-height=" + blackHeight(t0));
console.log("black-height=" + bh.height(t0) + "\n");
console.log("remove=150 elem=" + t0.removeItem(150) + "\n");

console.log("height should be 4");
console.log("height=" + height(t0));
console.log("height=" + h.height(t0) + "\n");
console.log("black height should be 2");
console.log("black-height=" + blackHeight(t0));
console.log("black-height=" + bh.height(t0) + "\n");
console.log("test of adjustment next");
console.log("remove=250 elem=" + t0.removeItem(250) + "\n");

console.log("height should be 3");
console.log("height=" + height(t0));
console.log("height=" + h.height(t0) + "\n");
console.log("black height should be 2");
console.log("black-height=" + blackHeight(t0));
console.log("black-height=" + bh.height(t0) + "\n");
t0.insertItem(25, 100);
t0.insertItem(50, 100); // double rotation
t0.insertItem(200, 100); // rotate right
console.log("height should be 4");
console.log("height=" + height(t0));
console.log("height=" + h.height(t0) + "\n");
console.log("black height should be 2");
console.log("black-height=" + blackHeight(t0));
console.log("black-height=" + bh.height(t0) + "\n");
inOrderPrinter.print();
printer.print(t0);
