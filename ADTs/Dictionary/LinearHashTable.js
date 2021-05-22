const List = require('../Container/DLinkedList.js');
const Pair = require('./Item.js');
const Iter = require('./HTIterator.js');

class LinearHashTable { // implemented as a linear hash table
    constructor () {
        this._table = [];
        this._size = 0;
        this._numChains = 3;
        for (let i=0; i< this._numChains; i++) {
            this._table[i] = new List.DLinkedList();
        }
        this._numSplitChains = 0;
    }
    hashCode(k) {
        return k; // override or replace if needed (works if k is a positive integer)
    }
    _hashFunction(k) {
        let hc = this.hashCode(k);
        let ch = Math.floor(hc % this._numChains);
        if (ch < this._numSplitChains) {
            ch = Math.floor(hc % (2*this._numChains));
        }
        return ch;
    }
    _findPosition(key, chain) { // returns internal object so must be private
        let chainList = this._table[chain];
        if (chainList.isEmpty()) {
            return null;
        }
        let p = chainList.first();
        while (!chainList.isLast(p) && p.element().key() != key) {
            p = chainList.after(p);
        }
        return p;
    }
    findElement(key) {
        let chain = this._hashFunction(key);
        let p = this._findPosition(key, chain);
        if (p == null || p.element().key() != key) {  // p.element() is an item (key,value)
            return null;
        } else {
            return p.element().value(); // return the value from the item p.element()
        }
    }
    _splitNextChain() {
        let chainToSplit = this._numSplitChains;
        let splitChain = this._table[chainToSplit];
        this._numSplitChains++;
        let newChain = new List.DLinkedList();
        this._table.push(newChain);
        if (this._numSplitChains == this._numChains) {
            this._numChains += this._numSplitChains;
            this._numSplitChains = 0;
        }
        let size = splitChain.size();
        for (let i=0; i < size; i++) {
            let item = splitChain.remove(splitChain.first());
            let chain = this._hashFunction(item.key());
            if (chain != chainToSplit) { // remove from (old) splitChain and insert into newChain
                newChain.insertLast(item);
            } else { // keep in the same chain
                splitChain.insertLast(item);
            }
         }
    }
    insertItem(key, value) {
        let chain = this._hashFunction(key);
        let p = this._findPosition(key, chain);
        if (p == null || p.element().key() != key) {  // p.element()=(key,value) if key is not in table 
            this._size++;
            let totalChains = this._numChains + this._numSplitChains;
            if ((this._size/totalChains) >= 0.75) { // load factor
                this._splitNextChain();
                chain = this._hashFunction(key); // bug 2: if chain is split, then need to re-hash key
            }
            let newItem = new Pair.Item(key, value);
            return this._table[chain].insertLast(newItem);
        } else {
            let item = p.element();
            item._value = value;  // replace the value of the item in position p
            return p;
        }
    }
    removeElement(k) {
        let chain = this._hashFunction(k);
        let p = this._findPosition(k, chain);
        if (p == null || p.element().key() != k) {  // p.element() is an item (key,value)
            return null;
        } else {
            this._size--;
            return this._table[chain].remove(p).element();
        }
    }
    items() {
        return new Iter.HTIterator(this, 0);
    }
    keys() {
        return new Iter.HTIterator(this, 1);
    }
    elements() {
        return new Iter.HTIterator(this, 2);
    }
    toString() {
        let totalChains = this._numChains + this._numSplitChains;
        let str = "chains=" + this._numChains + 
                        " splits=" + this._numSplitChains;
        str += "\n{";
        for (let i=0; i<totalChains; i++) {
            str += this._table[i].toString();
        }
        str += "}";
    }
    print() {
        console.log(this.toString());
    }
    size() {
        return this._size;
    }
    isEmpty() {
        return this._size == 0;
    }
}

exports.LinearHashTable = LinearHashTable;
