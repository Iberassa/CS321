const ADT = require('../Queue/PriorityQueue.js');
const Seq = require('../Container/Sequence.js')

class SequenceSorter {
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
    print(seq) {
        console.log(seq.toString());
    }

    PQsort(seq) {
        let PQ = new ADT.PriorityQueue();
        let size = seq.size();
        for (let i=0; i < size; i++) {
            let e = seq.removeAtRank(0);
            PQ.insertItem(e, e);
        }
        let i = 0;
        while (! PQ.isEmpty()) {
            let e = PQ.removeMin();
            seq.insertAtRank(i, e);
            i++;
        }
        this._compCount = PQ.keyComparisons()
        this._swapCount = PQ.numSwaps();
        // console.log(arr);
        return seq;
    }

    insertionSort(seq) {
        this._compCount = 0;
        this._shiftCount = 0;
        this._insertionSort(seq, 0, seq.size()-1);
    }
    _insertionSort(seq, lo, hi) {
        let size = hi - lo + 1;
        // console.log("insertionSort on size " + size);
        for (let i=1; i < size; i++) {
            let k = lo + i;
            let temp = seq.elemAtRank(k);
            this._compCount++;
            while (0<k && temp < seq.elemAtRank(k-1)) {
                seq.replaceAtRank(k, seq.elemAtRank(k-1));  // shift right
                k--;
                this._compCount++;
                this._shiftCount++;
            }
            seq.replaceAtRank(k, temp);  // place in sorted position    
        }
    }

    quickSort(seq) {
        this._compCount = 0;
        this._swapCount = 0;
        this._shiftCount = 0;
        this._quickSort(seq, 0, seq.size()-1);
    }
    _quickSort(seq, lo, hi, basecase=8) {
        if (lo + basecase < hi) {
            let pivots = this._inPlacePartition(seq, lo, hi);
            // console.log(pivots);
            this._quickSort(seq, lo, pivots[0]-1, basecase);
            this._quickSort(seq, pivots[1]+1, hi, basecase);
        } else { // base case when the segment size is 8 or less
            this._insertionSort(seq, lo, hi);
        }
    }
    _inPlacePartition(seq, lo, hi) {
        let size = hi - lo + 1;
        let rand = Math.floor(Math.random()*100)%size;
        let pivot = seq.elemAtRank(lo + rand);
        let pivots = [];
        let j = lo;
        let k = hi;
        while (j <= k) {
            this._compCount++;
            while (j <= k && seq.elemAtRank(j) < pivot) {
                this._compCount++;
                j++;
            }
            this._compCount++;
            while (j <= k && pivot <= seq.elemAtRank(k)) {
                this._compCount++;
                k--;
            }
            if (j <= k) {
                seq.swapElements(seq.atRank(j), seq.atRank(k));
                this._swapCount++;
                j++;
                k--;
             }
        }
        pivots.push(j);
        
        k = hi;
        while (j <= k) {
            this._compCount++;
            while (j <= k && seq.elemAtRank(j) == pivot) {
                this._compCount++;
                j++;
            }
            this._compCount++;
            while (j <= k && pivot < seq.elemAtRank(k)) {
                this._compCount++;
                k--;
            }
            if (j <= k) {
                seq.swapElements(seq.atRank(j), seq.atRank(k));
                this._swapCount++;
                j++;
                k--;
             }
        }
        
        pivots.push(k);
        return pivots;
    }
}

exports.SequenceSorter = SequenceSorter;
