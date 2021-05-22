const Seq = require('./Sequence.js');
const Heap = require('./MinHeap.js');

function compare(elem1, elem2) {
    return elem1 - elem2;
}
function lessOrEqual(elem1, elem2) {
    return compare(elem1, elem2) <= 0;
}

var h0 = new Heap.MinHeap(compare);

function findSmallerKeys(T, key) {
    let seq = new Seq.Sequence();
    findSmallerHelper(T, key, T.root(), seq);
    console.log("findSmallerKeys key=" + key + " " + seq.toString());
    return seq;
}

function findSmallerHelper(T, key, p, seq) {
    if (T.isExternal(p)) {
        return;
    } else {
        if (lessOrEqual(p.element(), key)) {
            seq.insertLast(p.element());
            findSmallerHelper(T, key, T.leftChild(p), seq);
            findSmallerHelper(T, key, T.rightChild(p), seq);
        }else{
            findSmallerHelper(T, key, T.leftChild(p), seq);
            findSmallerHelper(T, key, T.rightChild(p), seq);
        }
    }
    return;
}


// Test cases follow here

console.log("\nHeap = " + h0.toString());
findSmallerKeys(h0, 50);
h0.insertElem(50);
console.log("\nHeap = " + h0.toString());
findSmallerKeys(h0, 25);
findSmallerKeys(h0, 50);

h0.insertElem(150);
h0.insertElem(100);
h0.insertElem(200);
h0.insertElem(450);
h0.insertElem(350);
h0.insertElem(250);
h0.insertElem(650);
h0.insertElem(550);
console.log("\nHeap = " + h0.toString());
findSmallerKeys(h0, 225);

h0.insertElem(500);
h0.insertElem(500);
console.log("\nHeap = " + h0.toString());
findSmallerKeys(h0, 350);

h0.insertElem(25);
h0.insertElem(50);
h0.insertElem(200);

console.log("\nHeap = " + h0.toString());
findSmallerKeys(h0, 450);

