const List = require('../Container/DLinkedList.js');
const Queue = require('../Queue/PriorityQueue.js');

function compareElems(e1, e2) {
    return e1 - e2;
}
class SequentialSorter {
    constructor(compare=compareElems) {
        this._compCount = 0;
        this._swapCount = 0;
        this._shiftCount = 0;

        this._compare = compare;
    }
    keyComparisons() {
        return this._compCount;
    }
    numSwaps() {
        return this._swapCount;
    }
    numShifts() {
        return this._shiftCount;
    }
    print(lst) {
        let iter = lst.elements();
        let res = "[";
        while (iter.hasNext()) {
            let elem = iter.nextObject();
            res = res + elem;
            if (iter.hasNext()) {
                res = res + ", ";
            }
        }
        console.log(res + "]");
    }
    mergeSort(L) {
        this._compCount = 0;
        this._shiftCount = 0;
        this.mergeSortRec(L);
    }
    mergeSortRec(L) {
        if (L.size() > 1) {
            let pair = this._partition(L);
            let list1 = this.mergeSortRec(pair[0]);
            let list2 = this.mergeSortRec(pair[1]);
            return this._merge(list1, list2, L);
        } else {
            return L;
        }
    }
    _partition(L) {
        let half = L.size()/2;
        let list1 = new List.DLinkedList();
        for (let i=0; i<half; i++) {
            let elem = L.remove(L.first());
            list1.insertLast(elem);
            this._shiftCount++;
        }
        let list2 = new List.DLinkedList();
        while (! L.isEmpty()) {
            let elem = L.remove(L.first());
            list2.insertLast(elem);
            this._shiftCount++;
        }
        return [list1, list2];
    }
    _merge(list1, list2, L) {
        while (!list1.isEmpty() && !list2.isEmpty()) {
            let resultOfCompare = this._compare(list1.first().element(), list2.first().element());
            this._compCount++;
            if (resultOfCompare <= 0) {
                L.insertLast(list1.remove(list1.first()));
            } else {
                L.insertLast(list2.remove(list2.first()));
            }
        }
        while (!list1.isEmpty()) {
            L.insertLast(list1.remove(list1.first()));
        }
        while (!list2.isEmpty()) {
            L.insertLast(list2.remove(list2.first()));
        }
        return L;
    }
    insertionSort(lst) {
        this._compCount = 0;
        this._shiftCount = 0;
        if (lst.size() > 1) {
            this._insertionSort(lst, lst.first(), lst.last());
        }
    }
    _insertionSort(lst, frst, last) {
        let next = frst;
        while (next != last) {
            next = lst.after(next);
            let curr = next;
            let temp = curr.element();
            this._compCount++;
            while (curr != frst && this._compare(temp, lst.before(curr).element()) < 0) {
                lst.replaceElement(curr, lst.before(curr).element());  // shift right
                curr = lst.before(curr);
                this._compCount++;
                this._shiftCount++;
            }
            lst.replaceElement(curr, temp);  // place in sorted position
        }
    }
    PQsort(lst) {
        if (lst.size() < 2) {
            return lst;
        }
        let PQ = new Queue.PriorityQueue();
        // your code goes here
        while (!lst.isEmpty()) {
            let elem = lst.remove(lst.first());
            PQ.insertItem(elem, elem);
        }
        while (! PQ.isEmpty()) {
            let elem = PQ.removeMin();
            lst.insertLast(elem);
        }
        this._compCount = PQ.keyComparisons();
        this._swapCount = PQ.numSwaps();
    }
}

exports.SequentialSorter = SequentialSorter;