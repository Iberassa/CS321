const ADT = require('../Queue/PriorityQueue.js');

class ArraySorter {
    constructor() {
        this._compCount = 0;
        this._swapCount = 0;
        this._shiftCount = 0;
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
    print(arr) {
        let last = arr.length - 1;
        let res = "[";
        for (let i=0; i<=last; i++) {
            res = res + arr[i];
            if (i<last) {
                res = res + ", ";
            }
        }
        console.log(res + "]");
    }

    _heapify(arr) {
        let last = arr.length - 1;
        let next = last;
        while (next > 0) {
            this._downheap(arr, this._parent(next), last);
            next = next - 2;
        }
    }
    _parent(index) {
        return Math.floor((index-1)/2);
    }
    _downheap(arr, index, last) {
        let property = false;
        while (!property) {
            let maxIndex = this._indexOfMax(arr, index, last);
            if (maxIndex != index) {
                this._swapElements(arr, index, maxIndex);
                index = maxIndex;
            } else {
                property = true;
            }
        }
    }
    _swapElements(arr, j, k) {
        let temp = arr[j];
        arr[j] = arr[k];
        arr[k] = temp;
        this._swapCount++;
    }
    _indexOfMax(arr, index, last) {
        let maxIndex = index;
        let left = 2*index + 1;
        let right = left + 1;
        if (left <= last && arr[maxIndex] < arr[left]) {
            maxIndex = left;
        }
        if (right <= last && arr[maxIndex] < arr[right]) {
            maxIndex = right;
        }
        this._compCount += 2;
        return maxIndex;
    }
    heapSort(arr) {
        this._compCount = 0;
        this._swapCount = 0;
        this._heapify(arr);
        let end = arr.length - 1;
        while (end > 0) {
            this._swapElements(arr, 0, end); // swap max to end of heap
            end--;  // reduce the size of the heap
            this._downheap(arr, 0, end);  // restore heap-order
        }
    }

    PQsort(arr) {
        let PQ = new ADT.PriorityQueue();
        for (let i=0; i < arr.length; i++) {
            let e = arr[i];
            PQ.insertItem(e, e);
        }
        let i = 0;
        while (! PQ.isEmpty()) {
            let e = PQ.removeMin();
            arr[i] = e;
            i++;
        }
        this._compCount = PQ.keyComparisons()
        this._swapCount = PQ.numSwaps();
        // console.log(arr);
        return arr;
    }

    insertionSort(arr) {
        this._compCount = 0;
        this._shiftCount = 0;
        this._insertionSort(arr, 0, arr.length-1);
    }
    _insertionSort(arr, lo, hi) {
        let size = hi - lo + 1;
        for (let i=1; i < size; i++) {
            let k = lo + i;
            let temp = arr[k];
            this._compCount++;
            while (0<k && temp < arr[k-1]) {
                    arr[k] = arr[k-1];  // shift right
                    k--;
                    this._compCount++;
                    this._shiftCount++;
            }
            arr[k] = temp;  // place in sorted position    
        }
    }

    quickSort(arr) {
        this._compCount = 0;
        this._swapCount = 0;
        this._shiftCount = 0;
        this._quickSort(arr, 0, arr.length-1);
    }
    _quickSort(arr, lo, hi, basecase=8) {
        if (lo + basecase < hi) {
            let pivots = this._inPlacePartition(arr, lo, hi);
            //  console.log(pivots);
            this._quickSort(arr, lo, pivots[0]-1, basecase);
            this._quickSort(arr, pivots[1]+1, hi, basecase);
        } else { // base case when the segment size is 8 or less
            this._insertionSort(arr, lo, hi);
        }
    }
    _inPlacePartition(arr, lo, hi) {
        let size = hi - lo + 1;
        let rand = Math.floor(Math.random()*100)%size;
        let pivot = arr[lo + rand];  // bug needed to add lo to rand so pivot is between lo and hi
        let pivots = [];
        let j = lo;
        let k = hi;
        while (j <= k) {
            this._compCount++;
            while (j <= k && arr[j] < pivot) {
                this._compCount++;
                j++;
            }
            this._compCount++;
            while (j <= k && pivot <= arr[k]) {
                this._compCount++;
                k--;
            }
            if (j <= k) {
                this._swapElements(arr, j, k);
                j++;
                k--;
             }
        }
        pivots.push(j);
        
        k = hi;
        while (j <= k) {
            this._compCount++;
            while (j <= k && arr[j] == pivot) {
                this._compCount++;
                j++;
            }
            this._compCount++;
            while (j <= k && pivot < arr[k]) {
                this._compCount++;
                k--;
            }
            if (j <= k) {
                this._swapElements(arr, j, k);
                j++;
                k--;
             }
        }
        
        pivots.push(k);
        return pivots;
    }
}

exports.ArraySorter = ArraySorter;
