class HPos {
    constructor(elem, index) {
        this._elem = elem;
        this._index = index;
    }
    element() {
        return this._elem;
    }
    toString() {
        return "(" + this._elem + "," + this._index + ")";
    }
}
class MinHeap {
    constructor(comparator) {
        this._size = 0;
        this._heap = [null];
        this._compare = comparator;
        this._compCount = 0;
        this._swapCount = 0;
    }
    isEmpty() {
        return this._size == 0;
    }
    size() {
        return this._size;
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
            this._swapElements(parent, p);
            p = parent;
        }
    }
    _swapElements(p, q) {
        let temp = p._elem;
        p._elem = q._elem;
        q._elem = temp;
        this._swapCount++;
    }
    _minKey(p) {
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
            let min = this._minKey(p);
            if (min != p) {
                this._swapElements(min, p);
                p = min;
            } else {
                property = true;
            }
        }
    }
    minElem() {
        if (this.isEmpty()) {
            throw new Error("Invalid min() operation: Heap is empty");
        }
        return this.root().element();
    }
    insertElem(elem) {
        this._size++;
        let newPos = null;
        if (this._heap.length < this._size) {
            newPos = this._heap[this._size]; // already allocated but not used
        } else {
            newPos = new HPos(elem, this._size);
            this._heap[this._size] = newPos;
        }
        this._upHeap(newPos);
        return newPos;
    }
    removeMin() {
        if (this.isEmpty()) {
            throw new Error("Invalid removeMin() operation: Heap is empty");
        }
        let minElem = this.minElem();

        this._swapElements(this.root(), this._heap[this._size]);
        this._size--;
        this._downHeap(this.root());
        return minElem;
    }
    replaceElem(pos, elem) {
        let oldElem = pos.element();
        pos._elem = elem;
        this._upHeap(pos);
        this._downHeap(pos);
        return oldElem;
    }
    keyComparisons() {
        return this._compCount;
    }
    numSwaps() {
        return this._swapCount;
    }
    elements() {
        return new ArrayIterator(this._heap, this._size);
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
        return this._heap[1];
    }
    isRoot(p) {
        return p._index == 1;
    }
    parent(p) {
        if (this.isRoot(p)) {
            throw new Error("Invalid parent operation: " + p);
        }
        let parent = Math.floor(p._index/2);
        return this._heap[parent];
    }
    leftChild(p) {
        let left = p._index*2;
        if (left > this._size) {
            return null;
        }
        return this._heap[left];
    }
    rightChild(p) {
        let right = Math.floor(p._index*2) + 1;
        if (right > this._size) {
            return null;
        }
        return this._heap[right];
    }
    isExternal(p) {
        return p == null;
    }
    isInternal(p) {
        return p != null;
    }
}
class ArrayIterator {
    constructor(arr, size) {
        this._arr = arr;
        this._index = 1;
        this._size = size;
    }
    hasNext() {
        return this._index <= this._size;
    }
    nextObject() {
        let ix = this._index;
        this._index++;
        return this._arr[ix];
    }
    reset() {
        this._index = 1;
    }
}

exports.MinHeap = MinHeap;