const Seq = require('./Sequence.js');

class MinHeap {
    constructor(comparator, heapSize=20) {
        this._heap = new Seq.Sequence(heapSize);
        this._heap.insertFirst(null);
        this._compare = comparator;
        this._compCount = 0;
        this._swapCount = 0;
    }
    isEmpty() {
        return this.size() == 0;
    }
    size() {
        return this._heap.size() - 1;
    }
    _less(pos1, pos2) { // bug 1 (type error on elements)
        this._compCount++;
        return this._compare(pos1.element(), pos2.element()) < 0;
    }
    _greater(pos1, pos2) {
        this._compCount++;
        return this._compare(pos1.element(), pos2.element()) > 0;
    }
    _upHeap(p) {
        while (!this.isRoot(p) && this._greater(this.parent(p), p)) {
            let parent = this.parent(p);
            this._heap.swapElements(parent, p);
            this._swapCount++;
            p = parent;
        }
    }
    _minPosition(p) {
        let smallest = p;
        let left = this.leftChild(p);
        let right = this.rightChild(p);
        if (this.isInternal(left)) {
            if (this._less(left, smallest)) {
                smallest = left;
            }
        }
        if (this.isInternal(right)) {
            if (this._less(right, smallest)) {
                smallest = right; // bug 2 (left)
            }
        }
        return smallest;
    }
    _downHeap(p) {
        let property = false;
        while (!property) {
            let min = this._minPosition(p);
            if (min != p) {
                this._heap.swapElements(min, p);
                this._swapCount++;
                p = min;
            } else {
                property = true;
            }
        }
    }
    minimum() {
        if (this.isEmpty()) {
            throw new Error("Invalid min() operation: Heap is empty");
        }
        return this.root().element();
    }
    insert(elem) {
        let newPos = this._heap.insertLast(elem);
        this._upHeap(newPos);
        return newPos;
    }
    removeMin() {
        if (this.isEmpty()) {
            throw new Error("Invalid removeMin() operation: Heap is empty");
        }
        let min = this.minimum();

        let last = this._heap.last();
        if (this.size() > 1) {
            this._heap.swapElements(this.root(), last);
            this._swapCount++;
            this._heap.remove(last);

            this._downHeap(this.root());
        } else {
            this._heap.remove(last);
        }
        return min;
    }
    replaceElem(pos, elem) {
        let oldElem = this._heap.replaceElement(pos,elem);
        this._upHeap(pos);
        this._downHeap(pos);
        return oldElem;
    }
    numComparisons() {
        return this._compCount;
    }
    numSwaps() {
        return this._swapCount;
    }
    elements() {
        return this._heap.elements();
    }
    toString() {
        let res = "[";
        let iter = this.elements();
        while (iter.hasNext()) {
            res = res + iter.nextObject();
            if (iter.hasNext()) {
                res = res.toString() + ", ";
            }
        }
        return res + "]";
    }
    root() {
        return this._heap.atRank(1);
    }
    isRoot(p) {
        return this.root() == p;
    }
    parent(p) {
        if (this.isRoot(p)) {
            throw new Error("Invalid parent operation: " + p);
        }
        let parent = Math.floor(this._heap.rankOf(p)/2);
        return this._heap.atRank(parent);
    }
    leftChild(p) {
        let left = this._heap.rankOf(p)*2;
        if (left > this.size()) {
            return null;
        }
        return this._heap.atRank(left);
    }
    rightChild(p) {
        let right = Math.floor(this._heap.rankOf(p)*2) + 1;
        if (right > this.size()) {
            return null;
        }
        return this._heap.atRank(right);
    }
    isExternal(p) {
        return p == null;
    }
    isInternal(p) {
        return p != null;
    }
}

exports.MinHeap = MinHeap;