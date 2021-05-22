const Tree = require('./MinHeap.js');
const Pair = require('../Dictionary/Item.js');

class PriorityQueue {
    constructor(compare=Pair.compareItems) {
        this._heap = new Tree.MinHeap(compare);
    }
    insertItem(key, elem) { // returns the Position containing new Item
        let newItem = new Pair.Item(key, elem);
        return this._heap.insertElem(newItem);
    }
    removeMin() {
        let item = this._heap.removeMin();
        return item.value();
    }
    minKey() {
        let item = this._heap.minElement();
        return item.key();
    }
    minElement() {
        let item = this._heap.minElement();
        return item.value();
    }
    size() {
        return this._heap.size();
    }
    isEmpty() {
        return this._heap.isEmpty();
    }
    keyComparisons() {
        return this._heap.keyComparisons();
    }
    numSwaps() {
        return this._heap.numSwaps();
    }
}

exports.PriorityQueue = PriorityQueue;