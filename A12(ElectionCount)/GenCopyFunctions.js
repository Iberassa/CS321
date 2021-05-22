const Seq = require('./Sequence.js');

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
    copyArray2Seq(dat) {
        let outSeq = new Seq.Sequence(dat.length);
        for (let i=0; i<dat.length; i++) {
            outSeq.insertLast(dat[i]);
        }
        return outSeq;
    }
    isSortedArray(dat) {
        for (let i=1; i<dat.length; i++) {
            if (dat[i-1] > dat[i]) {
                console.log("\nData is not sorted: " + dat[i] + " should be before " + dat[i-1]);
                console.log(dat);
                return;
            }
        }
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

    genSeqData(n, k) {
        let dat = new Seq.Sequence();
        for (let i=0; i<n; i++) {
            let rand = Math.floor(Math.random()*100)%k + 1;
            dat.insertLast(rand);
        }
        return dat;
    }
    
}

exports.GenCopyFunctions = GenCopyFunctions;
