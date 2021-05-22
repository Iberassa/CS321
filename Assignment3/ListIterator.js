class ListIterator {
    constructor(seq, type) {
        this._seq = seq;  // can be either a List or a Sequence, traversal uses Positions
        this._type = type;  // type 1 is an element iterator otherwise its a position iterator
        this._currPos = null;
        this.reset();
    }
    hasNext() {
        return this._currPos != null;
    }
    nextObject() {
        let prevPos = this._currPos;
        if (this._seq.isLast(this._currPos)) { // is there another position in list
            this._currPos = null;
        } else {
            this._currPos = this._seq.after(this._currPos);
            if (this._currPos == null) {
                throw new Error("The current Position has been deleted from the List");
            }
        }
        if (this._type == 1) {
            return prevPos.element(); // element iterator
        } else {
            return prevPos;  // position iterator
        }
    }
    reset() {
        if (this._seq.size() > 0) {
            this._currPos = this._seq.first();
        } else {
            this._currPos = null;
        }
    }
}

exports.ListIterator = ListIterator;
