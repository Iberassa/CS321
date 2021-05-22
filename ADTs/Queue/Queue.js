const List = require('../Container/DLinkedList.js');

class Queue {
    constructor() {
        this._queue = new List.DLinkedList();
    }
    push(elem) {
        this._queue.insertLast(elem);
    }
    dequeue() {
        if (this.isEmpty()) {
            throw new Error("Invalid dequeue() on an Empty Queue");
        }
        return this._queue.remove(this._queue.first());
    }
    isEmpty() {
        return this._queue.isEmpty();
    }
    size() {
        return this._queue.size();
    }
    elements() {
        return this._queue.elements();
    }
}

exports.Queue = Queue;
