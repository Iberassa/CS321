const List = require('../Container/DLinkedList.js');

class Stack {
    constructor() {
        this._stack = new List.DLinkedList();
    }
    push(elem) {
        this._stack.insertFirst(elem);
    }
    pop() {
        if (this.isEmpty()) {
            throw new Error("Invalid pop() on an Empty Stack");
        }
        return this._stack.remove(this._stack.first());
    }
    isEmpty() {
        return this._stack.isEmpty();
    }
    size() {
        return this._stack.size();
    }
    elements() {
        return new StackIterator(this._stack);
    }
}
class StackIterator {
    constructor(stack) {
        this._stack = stack;
        this._curr = null;
        this.reset();
    }
    reset() {
        if (this._stack.isEmpty()) {
            this._curr = null;
        } else {
            this._curr = this._stack.last();
        }
    }
    hasNext() {
        return this._curr != null;
    }
    nextObject() {
        let next = this._curr.element();
        if (this._stack.isFirst(this._curr)) {
            this._curr = null;
        } else {
            this._curr = this._stack.before(this._curr);
        }
        return next;
    }
}

exports.Stack = Stack;
