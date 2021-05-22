const List = require('./DLinkedList.js');

class Queue {
    constructor() {
        this._queue = new List.DLinkedList();
    }
                                                      //Pseudo-code             //positions  
    enqueue(elem) {                                  //Algorithm enqueue(elem)        
        if (this._queue.isEmpty()) {                 //if queue.isEmpty then          1 
            return this._queue.insertFirst(elem);    //return queue.insertFirst(elem) 1 
        } else                                       //else                           1
            return this._queue.insertLast(elem);     //return queue.insertLast(elem)  1
    }                                                                                //O(1)
    dequeue() {                                      //Algorithm dequeue()           
        if (this._queue.isEmpty()) {                 //if queue.isEmpty() then        1        
            return "Queue is empty";                 //throw Empty queue              1
        } else                                       //else                           1
     return this._queue.remove(this._queue.first());  //return queue.remove(queue.first()) 1   
    }                                                                               //O(1)
    isEmpty() {                                       //Algorithm isEmpty()
        return this._queue.isEmpty();                 //return queue.isEmpty()       1 
    }                                                                               //O(1)
    size() {                                          //Algorithm size()
        return this._queue.size();                    //return queue.size()         1
    }                                                                               //O(1)
    elements() {                                      //Algorithm elements()
        return this._queue.elements();                //return queue.elements()      1
    }                                                                                //O(1)
    toString() {                                      //Algorithm toString()
        return this._queue.toString();                // return queue.toSting()      1 
    }                                                                                //O(1)
}

let Q = new Queue();
Q.enqueue("a");
Q.enqueue("b");
Q.enqueue("c");
Q.enqueue("d");
console.log(Q.toString());
console.log("Dequeue=" + Q.dequeue());
Q.enqueue("e");
Q.enqueue("f");
Q.enqueue("g");
console.log("Enqueue e, f, and g");
console.log("Dequeue=" + Q.dequeue());
console.log("Dequeue=" + Q.dequeue());
console.log("Dequeue=" + Q.dequeue());
console.log("Dequeue=" + Q.dequeue());
Q.enqueue("h");
Q.enqueue("i");
Q.enqueue("j");
console.log("Enqueue h, i, and j");
console.log("Dequeue=" + Q.dequeue());
console.log("Dequeue=" + Q.dequeue());
console.log("Dequeue=" + Q.dequeue());
console.log(Q.toString());
