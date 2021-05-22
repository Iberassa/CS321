const Pair = require('./Item.js');
const PQueue = require('./PriorityQueue.js');

class VotingHelpers {

    _countElementsOfSeq(seq, D) {
        // count the elements in seq and store the count for each candidate in Dictionary D
        let iter = seq.elements();
        while (iter.hasNext()) {
            let elem = iter.nextObject();
            let count = D.findValue(elem);
            if (count === null) {
                let val = [1];
                D.insertItem(elem, val);
            } else {
                count[0] += 1
            }
        }
    }
    _countElementsOfArray(arr, D) {
        // count the elements in seq and store the count for each candidate in Dictionary D
        let index = 0
        while (index < arr.length) {
            let elem = arr[index];
            let count = D.findValue(elem);
            if (count === null) {
                let val = [1];
                D.insertItem(elem, val);
            } else {
                count[0] += 1
            }
            index++;
        }
    }

    _findWinnersFromDictionary(D) {
        // The count for each candidate should be in Dictionary D
        // Iterate through the Items (ID, count) and find the winners and put in the array 
        let iterD = D.items();
        let max = 0;
        let winners = [];
        while (iterD.hasNext()) {
            let item = iterD.nextObject();
            let ID = item.key();
            let count = item.value();
            if (count > max){
                winners = [];
                winners.push(item);
                max = count;
            }else if(count === max ){
                winners.push(item);
            }
        }
        return winners;
    }

    findWinnersSeqUsingDict(seq, D) {
        this._countElementsOfSeq(seq, D);
        D.print();
        let winners = this._findWinnersFromDictionary(D);
        return winners;
    }
    findWinnersArrayUsingDict(arr, D) {
        this._countElementsOfArray(arr, D);
        D.print();
        let winners = this._findWinnersFromDictionary(D);
        return winners;
    }

    _insertSeqIntoPQ(seq, PQ) {
        // insert the elements (candidate ID's) from Sequence seq into the Priority Queue PQ
        let iter = seq.elements();
        while (iter.hasNext()){
            let item = iter.nextObject();
            PQ.insertItem(item,item);
        }
    }
    _insertArrayIntoPQ(arr, PQ) {
        // insert the elements (candidate ID's) from Sequence seq into the Priority Queue PQ
        for (let i = 0;i < arr.length; i++){
            PQ.insertItem(arr[0],arr[0])
        }
    }

    _findWinnersFromPQ(PQ) {
        // Traverse the Priority Queue and determine the winners
        let max = 0;
        let count = 1;
        let curr = PQ.removeMin()
        let winners = [];
        while (!PQ.isEmpty()) {
            let next = PQ.removeMin()
            if (curr === next) {
                count += 1
            } else if (count > max) {
                winners = [];
                winners.push((curr, count));
            } else if (count === max) {
                winner.push((curr, count))
            }
            count = 1;
            curr = next;
        }
        if (curr === max) {
            count += 1
        } else if (count > max) {
            let winners = [];
            winners.push((curr, count));
        } else if (count === max) {
            winners.push((curr, count))
        }
        return winners;
    }
    findWinnersFromSeqUsingPQ(seq) {
        let PQ = new PQueue.PriorityQueue();
        this._insertSeqIntoPQ(seq, PQ);
        return this._findWinnersFromPQ(PQ);
    }
    findWinnersFromArrayUsingPQ(arr) {
        let PQ = new PQueue.PriorityQueue();
        this._insertArrayIntoPQ(arr, PQ);
        return this._findWinnersFromPQ(PQ);
    }
}

exports.VotingHelpers = VotingHelpers;
