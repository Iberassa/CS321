const List = require('./DLinkedList.js');

class Stack {
    constructor() {
        this._stack = new List.DLinkedList();
    }                                             
                                                 //Pseudo-code                     //positions 
    push(elem) {                                 //Algorithm push(elem)               
        if (this._stack.isEmpty()) {              //if stack.isEmpty then              1
            return this._stack.insertFirst(elem); //return stack.insertFirst(elem)     1
        } else                                     //else                              1
            return this._stack.insertLast(elem);   //return stack.insertLast(elem)     1
    }                                                                                //O(1)
    pop() {                                        //Algorithm pop()
        if (this._stack.isEmpty()) {               //if stack.isEmpty then             1
            return "Empty stack"                   //throw Empty stack                 1
        } else                                     //else                              1  
     return this._stack.remove(this._stack.last())  //return stack.remove(stack.last()) 1
    }                                                                                  //O(1)
    isEmpty() {                                     //Algorithm isEmpty()
        return this._stack.isEmpty()               //return stack.isEmpty()
    }
    size() {                                      //Algorithm size()   
        return this._stack.size()                 //return stack.size()
    }
    elements() {
        return this._stack.elements();
    }
    toString() {
        return this._stack.toString();
    }
}

let St = new Stack();
St.push("a");
St.push("b");
St.push("c");
St.push("d");
console.log(St.toString());
console.log("pop=" + St.pop());
St.push("e");
St.push("f");
St.push("g");
console.log("push e, f, and g");
console.log("pop=" + St.pop());
console.log("pop=" + St.pop());
console.log("pop=" + St.pop());
console.log("pop=" + St.pop());
St.push("h");
St.push("i");
St.push("j");
console.log("push h, i, and j");
console.log("pop=" + St.pop());
console.log("pop=" + St.pop());
console.log("pop=" + St.pop());
console.log(St.toString());
