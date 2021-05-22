const PQ = require('./PriorityQueue.js');
const Tab = require('./BST_Dictionary.js');
const Map = require('./HT_Dictionary.js');
const Util = require('./GenCopyFunctions.js');

let HelperFunctions = new Util.GenCopyFunctions();

function isPermutationPQ(A, B) {
    let PQA = new PQ.PriorityQueue();
    let PQB = new PQ.PriorityQueue();
    let i = 0;
    let j = 0;
    while (i !== A.length) {
        PQA.insertItem(A[i], A[i]);
        i++
    }
    while (j !== B.length) {
        PQB.insertItem(B[j], B[j]);
        j++;
    }
    if (PQA.size() !== PQB.size()) {
        return false;
    }
    while (!(PQA.isEmpty() || PQB.isEmpty())) {
        if (PQA.removeMin() !== PQB.removeMin()) {
            return false;
        }
    }
    return true;
}
function isPermutationBST(A, B) {
    let DA = new Tab.OrderedDictionary();
    let DB = new Tab.OrderedDictionary();
    let i = 0;
    let j = 0;
    while (i !== A.length) {
        if (DA.findValue(A[i])) {
            let count = DA.findValue(A[i])
            count[0] += 1;
            //DA.insertItem(A[i], count);
        } else {
            let countA = [];
            countA.push(1);
            DA.insertItem(A[i], countA);
        }
        i++;
    }
    while (j !== B.length) {
        if (DB.findValue(B[j])) {
            let count = DB.findValue(B[j]);
            count[0] += 1;
            DB.insertItem(B[j], count);
        } else {
            countB = [];
            countB.push(1)
            DB.insertItem(B[j], countB);
        }
        j++;
    }
    if (DA.size() !== DB.size()) {
        return false;
    }
    let iter = DA.items();
    while (iter.hasNext()) {
        let item = iter.nextObject();
        let id = item.key();
        if (DA.findValue(id)[0] !== DB.findValue(id)[0]) {
            return false;
        }
    }
    return true;
}
function isPermutationHT(A, B) {
    let DA = new Map.HT_Dictionary();
    let DB = new Map.HT_Dictionary();
        let i = 0;
    let j = 0;
    while (i !== A.length) {
        if (DA.findValue(A[i])) {
            let count = DA.findValue(A[i])
            count[0] += 1;
            //DA.insertItem(A[i], count);
        } else {
            let countA = [];
            countA.push(1);
            DA.insertItem(A[i], countA);
        }
        i++;
    }
    while (j !== B.length) {
        if (DB.findValue(B[j])) {
            let count = DB.findValue(B[j]);
            count[0] +=1;
            DB.insertItem(B[j], count);
        }else{
            countB = [];
            countB.push(1)
            DB.insertItem(B[j], countB);
        }
        j++;
    }
    if (DA.size() !== DB.size()) {
        return false;
    }
    let iter = DA.items();
    while (iter.hasNext()){
        let item = iter.nextObject();
        let id = item.key();
        if (DA.findValue(id)[0]!==DB.findValue(id)[0]){
            return false;
        }
    }
    // j = 0;
    // while (j !== B.length) {
    //     if (DA.findValue(B[j])) {
    //         if (DA.findValue(B[j])[0] > 1) {
    //             DA.findValue(B[j]).push(DA.findValue(B[j])[0] - 1);
    //         } else if (DA.findValue(B[j])[0] === 1)
    //             DA.removeItem(B[j]);
    //     } else{
    //         return false;
    //     }
    //     j++;
    // }
    return true;
}

function isPermutationTest(A, B) {
    console.log("A=" + HelperFunctions.arrayToString(A));
    console.log("B=" + HelperFunctions.arrayToString(B));
    console.log("isPermutationPQ=" + isPermutationPQ(A, B));
    console.log("isPermutationHT=" + isPermutationHT(A, B));
    console.log("isPermutationBST=" + isPermutationBST(A, B));
}

let A1 = [17, 15, 55, 19, 34, 19, 28, 5, 2, 10, 99, 75, 25, 67, 94, 122, 21];
let B1 = [17, 15, 55, 34, 19, 28, 5, 2, 10, 99, 75, 25, 67, 94, 122, 21, 19];
let A2 = [17, 15, 55, 20, 34, 19, 28, 5, 2, 10, 99, 75, 25, 67, 94, 122, 21];
let B2 = [17, 15, 55, 34, 19, 28, 5, 2, 10, 99, 75, 25, 67, 94, 122, 21, 99];

isPermutationTest(A1, B1); // True
isPermutationTest(A2, B2); // False
isPermutationTest(A1, B2); // False
isPermutationTest(A1, A2); // False
isPermutationTest(B1, B2); // False
