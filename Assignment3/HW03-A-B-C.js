const List = require('./Sequence')
function nonDuplicate(L) {
    if (L.isEmpty()) {
        return "There are no elements."
    }
    let pf = L.first();
    let pl = L.last();
    let rf = L.rankOf(pf);
    let rl = L.rankOf(pl);
    for (let i = rf; i <= rl; i++) {
        for (let j = rf; j <= rl; j++) {
            if (L.elemAtRank(i) === L.elemAtRank(j)) {
                if (i !== j) {
                    L.removeAtRank(i);
                }
            }
        }
    }
    return L;
}

function isPermutation(A, B) {
    if (A.size() !== B.size()) {
        return "Uneuqal size"
    }
    let pfA = A.first();
    let rfA = A.rankOf(pfA);
    let pfB = B.first();
    let rfB = B.rankOf(pfB);
    let plA = A.last();
    let rlA = A.rankOf(plA);
    let plB = B.last();
    let rlB = B.rankOf(plB);
    let count = 0;
    for (let i = rfA; i <= rlA; i++) {
        for (let j = rfB; j <= rlB; j++) {
            if (A.elemAtRank(i) !== B.elemAtRank(j)) {
                continue;
            } else {
                count++;
                break;
            }
        }
    }
    if (count === B.size()) {
        return A + " A is permutate of B " + B
    } else
        return A + " A is not permutate of B " + B
}
