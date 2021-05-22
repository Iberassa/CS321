const Seq = require('../Container/Sequence.js');
const Pair = require('./Item.js');

class OrderedDictionary { // Implemented as a Lookup Table (using a Sorted Sequence)
    constructor(compare=Pair.compareKeys) {
        this._LTab = new Seq.Sequence();
        this._compare = compare;
    }
    findElement(key) {
        let pos = this._binarySearch(key);
        if (pos == null || key != pos.element().key()) {
            return null;
        } else {
            let item = pos.element();
            return item.value();
        }
    }
    _lessThan(key1, key2) {
        return this._compare(key1,key2);
    }
    _binarySearch(key) {
        if (this._LTab.isEmpty()) {
            return null;
        }
        let lo = 0;
        let hi = this._LTab.size() - 1;
        while (lo < hi) {
            let mid = Math.floor((lo+hi)/2);
            let item = this._LTab.atRank(mid).element();
            if (this._lessThan(item.key(), key) < 0) {
                lo = mid + 1;  // eliminate mid and lower half of segment between lo and hi
            } else {
                hi = mid;  // eliminate upper half of segment between lo and hi
            }
        }
        return this._LTab.atRank(hi); // bug incorrectly returned pos
    }
    insertItem(key, value) {
        let newItem = new Pair.Item(key, value);
        // console.log("tab=" + this._LTab.toString());
        // console.log("new item=" + newItem);
        if (this._LTab.isEmpty()) {
            return this._LTab.insertFirst(newItem);
        }
        let pos = this._binarySearch(key);
        let item = pos.element();
        if (key < item.key()) {
            return this._LTab.insertBefore(pos, newItem);
        } else if (key > item.key()) {
            return this._LTab.insertAfter(pos, newItem);
        } else {
            this._LTab.replaceElement(pos, newItem);
            return pos;
        }
    }
    removeElement(key) {
        let pos = this._binarySearch(key);
        if (pos == null || key != pos.element().key()) {
            return null;
        } else {
            return this._LTab.remove(pos);
        }
    }
    size() {
        return this._LTab.size();
    }
    isEmpty() {
        return this._LTab.isEmpty();
    }
    positions() {
        let iter = this._LTab.positions();
        return new LookupTabIterator(iter, 0);
    }
    keys() {
        let iter = this._LTab.positions();
        return new LookupTabIterator(iter, 1);
    }
    elements() {
        let iter = this._LTab.positions();
        return new LookupTabIterator(iter, 2);
    }
    items() { // default
        let iter = this._LTab.positions();
        return new LookupTabIterator(iter, 3);
    }
    toString() {
        return this._LTab.toString();
    }
    print() {
        console.log(this.toString());
    }
}

class LookupTabIterator {
    constructor(iter, type) {
        this._type = type;
        this._iter = iter;
    }
    reset() {
        return this._iter.reset();
    }
    hasNext() {
        return this._iter.hasNext();
    }
    nextObject() {
        let pos = this._iter.nextObject();
        if (this._type == 0) {
            return pos;
        } else {
            let item = pos.element();
            if (this._type == 1) {
                return item.key();
            } else if (this._type == 2) {
                return item.value();
            } else {  // default is an item iterator
                return item;
            }
        }
    }
}

exports.OrderedDictionary = OrderedDictionary;
