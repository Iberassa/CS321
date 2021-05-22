class ArraySorter {
    constructor() {
        this._compCount = 0;
        this._swapCount = 0;
        this._shiftCount = 0;
    }
    keyComparisons() {
        console.log(this._compCount)
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
        for (let i = 0; i <= last; i++) {
            res = res + arr[i];
            if (i < last) {
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
        return Math.floor((index - 1) / 2);
    }
    _downheap(arr, index, last) {
        let property = false;
        while (!property) {
            let maxIndex = this._indexOfMax(arr, index, last);
            if (maxIndex !== index) {
                this._swapElements(arr, maxIndex, index);
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
        let largest = index;
        let left = (2 * index) + 1;
        let right = left + 1;
        if ((left <= last) && (arr[left] > arr[largest])) {
            largest = left;
        }
        this._compCount++;
        if ((right <= last) && (arr[right] > arr[largest])) {
            largest = right;
        }
        this._compCount++;
        return largest;
    }
    heapSort(arr) {
        this._compCount = 0;
        this._swapCount = 0;
        this._heapify(arr);
        console.log("key comparisons to build the Heap " + this._compCount);
        this._downheap(arr);
        let end = arr.length - 1;
        while (end > 0) {
            this._swapElements(arr, 0, end);
            end = end - 1;
            this._downheap(arr, 0, end)
        }
    }

    insertionSort(arr) {
        this._compCount = 0;
        this._shiftCount = 0;
        this._insertionSort(arr);
    }
    _insertionSort(arr) {
        for (let i = 1; i <= arr.length - 1; i++) {
            let j = i;
            let temp = arr[i];
            this._compCount++;
            while (0 < j && temp < arr[j - 1]) {
                arr[j] = arr[j - 1];
                j = j - 1;
                this._shiftCount++;
                this._compCount++;
            }
            arr[j] = temp;
        }
        console.log(this._shiftCount);
    }

    ShellSort(arr) {
        this._compCount = 0;
        this._shiftCount = 0;
        let maxGap = Math.floor(arr.length / 3);
        let gap = 1;
        while (gap <= maxGap) {
            gap = gap * 3 + 1;
        }
        while (gap > 0) {
            this._segmentInsertionSort(arr, gap);
            gap = (gap - 1) / 3;
        }
    }
    _segmentInsertionSort(arr, gap) {
        for (let i = gap; i <= arr.length - 1; i++) {
            let j = i;
            let temp = arr[i];
            this._compCount++;
            while ((gap - 1) < j && temp < arr[j - gap]) {
                arr[j] = arr[j - gap];
                j = j - gap;
                this._shiftCount++;
                this._compCount++;
            }
            arr[j] = temp;
        }
    }

    _partition(A) {
        let A1 = new Array();
        let A2 = new Array();
        let half = Math.floor(A.length / 2);
        while (half > 0) {
            A1.push(A.shift());
            half = half - 1
        }
        while (A.length != 0) {
            A2.push(A.shift());
        }
        return (A1, A2);
    }
    mergeSort(A) {
        if (A.length > 0) {
            let(A1, A2) = this._partition(A);
            this.mergeSort(A1);
            this.mergeSort(A2);
            A = this._merge(A1, A2, A);
        }
        return A
    }
    _merge(C, B, A) {
        while (C.length > 0 && B.length > 0) {
            if (B[0] < A[0]) {
                A.push(B.shift());
            } else
                A.push(C.shift());
        }
        while (C.length = 0) {
            A.push(c.shift());
        }
        while (B.length = 0) {
            A.push(B.shift());
        }
        return A;
    }
    qickSort(arr) {
        this._compCount = 0;
        this._shiftCount = 0;
        this._swapCount = 0;
        this._quickSort(arr, 0, arr.length - 1);
    }

    _qickSort(arr, low, hi) {
        if (low < hi) {
            let pivots = this._inPlacePartition(arr, low, hi);
            this._qickSort(arr, low, pivots[0] - 1);
            this._quickSort(arr, pivots[0] - 1, hi);
        }
    }
    _inPlacePartition(arr, low, hi) {
        let size = hi - low + 1;
        let rand = Math.floor(Math.random() * 100) % size;
        let pivot = arr[lo + rand];
        let j = low;
        let k = hi;
        while (j <= k) {
            this._compCount++;
            while (j <= k && arr[j] < pivot) {
                this._compCount++;
                j++
            }
            while (k >= j && a[k] >= pivot) {
                this._compCount++;
                k--;
            }
            if (j < k) {
                this._swapElements(arr, j, k)
            }
        }
        firstEq = j;
        k = hi;
        while (j <= k) {
            this._compCount++;
            while (j <= k && arr[j] === pivot) {
                this._compCount++;
                j++
            }
            while (k >= j && a[k] > pivot) {
                this._compCount++;
                k--;
            }
            if (j < k) {
                this._swapElements(arr, j, k)
            }
        }
        return (firstEq,k);
    }
}

    exports.ArraySorter = ArraySorter;
