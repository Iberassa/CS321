const List = require('../Container/DLinkedList.js');
const Pair = require('./Item.js');

class HTIterator {
    constructor(HT, type) {
        this._tab = HT._table;
        this._numChains = HT._numChains + HT._numSplitChains;
        this._type = type;
        this.reset();
    }
    hasNext() {
        return this._nextPos != null;
    }
    nextObject() {  // returns the next item in the Dictionary
        let currPos = this._nextPos;
        if (this._chain.isLast(this._nextPos)) {
            this._nextChain();
            if (this._currChain < this._numChains) {
                this._nextPos = this._chain.first();
            } else {
                this._nextPos = null;
            }
        } else {
            this._nextPos = this._chain.after(this._nextPos);
        }
        let item = currPos.element();
        if (this._type == 0) {
            return item;
        } else if (this._type == 1) {
            return item.key();
        } else {
            return item.value();
        }
    }
    _nextChain() {
        let ch = this._currChain + 1;
        while (ch < this._numChains && this._tab[ch].isEmpty()) {
            ch++;
        }
        this._chain = this._tab[ch];
        this._currChain = ch;
    }
    reset() {
        this._chain = this._tab[0];
        this._currChain = 0;
        if (this._tab[0].isEmpty()) {
            this._nextChain();
        }
        // console.log("chain=" + this._currChain);
        if (this._currChain < this._numChains) {
            this._nextPos = this._chain.first();
        } else {
            this._nextPos = null;
        }
    }
}
exports.HTIterator = HTIterator;
