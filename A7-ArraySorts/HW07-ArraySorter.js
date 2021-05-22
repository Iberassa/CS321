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
        while (next > 0){
            this._downheap(arr, this._parent(next), last);
            next = next - 2;
        }
    }
    _parent(index) {
        return Math.floor((index - 1) / 2);
    }
    _downheap(arr, index, last) {
        let property = false;
        while(!property){
            let maxIndex = this._indexOfMax(arr,index,last);
            if (maxIndex !== index){
                this._swapElements(arr, maxIndex, index);
                index = maxIndex;
            }else{
                property =true;
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
        let left = (2*index) + 1;
        let right = left + 1;
        if ((left <= last) && (arr[left] > arr[largest])){
            largest = left;
        }
        this._compCount++;
        if ((right <= last) && (arr[right] > arr[largest])){
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
        while (end > 0){
            this._swapElements(arr ,0 ,end);
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
        for (let i = 1; i <= arr.length - 1; i++){
            let j= i;
            let temp = arr[i];
            this._compCount++;
            while(0<j && temp < arr[j-1]){
                arr[j] = arr[j-1];
                j=j-1;
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
        for (let i = gap; i<= arr.length - 1; i++){
            let j = i;
            let temp = arr[i];
            this._compCount++;
            while ((gap-1)<j && temp < arr[j-gap]){
                arr[j] = arr[j-gap];
                j = j - gap;
                this._shiftCount++;
                this._compCount++;
            }
            arr[j] = temp;
        }
    }

}

exports.ArraySorter = ArraySorter;
