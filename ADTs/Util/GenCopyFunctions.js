const List = require('../Container/DLinkedList.js');
const Seq = require('../Container/Sequence.js');

class GenCopyFunctions {
    genArrayData(n, k) {
        let dat = new Array(n);
        for (let i=0; i<n; i++) {
            let rand = Math.floor(Math.random()*100)%k + 1;
            dat[i] = rand;
        }
        return dat;
    }
    copyArray(dat) {
        let outArr = new Array(dat.length);
        for (let i=0; i<dat.length; i++) {
            outArr[i] = dat[i];
        }
        return outArr;
    }
    isSortedArray(dat) {
        for (let i=1; i<dat.length; i++) {
            if (dat[i-1] > dat[i]) {
                console.log("\nList is not sorted " + dat[i] + "should be before " + dat[i-1]);
                console.log(dat);
            }
        }
    }

    genListData(n, k) {
        let dat = new List.DLinkedList();
        for (let i=0; i<n; i++) {
            let rand = Math.floor(Math.random()*100)%k + 1;
            dat.insertLast(rand);
        }
        return dat;
    }
    copyList(dat) {
        let outLst = new List.DLinkedList();
        if (dat.size() > 0) {
            let p = dat.first();
            outLst.insertLast(p.element());
            while (! dat.isLast(p)) {
                p = dat.after(p);
                outLst.insertLast(p.element());
            }
        }
        return outLst;
    }
    isSortedList(dat) {
        if (dat.size() < 2) {
            return;
        }
        let curr = dat.first();
        while (! dat.isLast(curr)) {
            let prev = curr;
            curr = dat.after(curr);
            if (prev.element() > curr.element()) {
                console.log("\nList is not sorted " + curr.element() + "should be before " + prev.element());
                console.log(dat);
            }
        }
    }

    genSeqData(n, k) {
        let dat = new Seq.Sequence();
        for (let i=0; i<n; i++) {
            let rand = Math.floor(Math.random()*100)%k + 1;
            dat.insertLast(rand);
        }
        return dat;
    }
    copySeq(dat) {
        let outSeq = new Seq.Sequence();
        if (dat.size() > 0) {
            let p = dat.first();
            outSeq.insertLast(p.element());
            while (! dat.isLast(p)) {
                p = dat.after(p);
                outSeq.insertLast(p.element());
            }
        }
        return outSeq;
    }
    isSortedSeq(dat) {
       for (let i=1; i<dat.size(); i++) {
            if (dat.elemAtRank(i-1) > dat.elemAtRank(i)) {
                console.log("\nList is not sorted  " + dat.elemAtRank(i) 
                                + "  should be before  " + dat.elemAtRank(i-1));
                console.log(dat.toString());
                return false;
            }
        }
        return true;
    }

    copyArray2List(dat) {
        let outLst = new List.DLinkedList(dat.length);
        for (let i=0; i<dat.length; i++) {
            outLst.insertLast(dat[i]);
        }
        return outLst;
    }
    copyArray2Seq(dat) {
        let outSeq = new List.Sequence(dat.length);
        for (let i=0; i<dat.length; i++) {
            outSeq.insertLast(dat[i]);
        }
        return outSeq;
    }
    arrayToString(dat) {
        if (dat.length == 0) {
            return "[]";
        }
        let res = "[" + dat[0];
        for (let i=1; i<dat.length; i++) {
            res = res + ", " + dat[i];
        }
        return (res + "]");
    }
    
}

exports.GenCopyFunctions = GenCopyFunctions;
