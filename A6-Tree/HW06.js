function findSmallerKeys(T, key) {
    let seq = new Seq.Sequence();
    findSmallerHelper(T, key, T.root(), seq);
    console.log("findSmallerKeys key=" + key + " " + seq.toString());
    return seq;
}

function findSmallerHelper(T, key, p, seq) {
    if (T.isExternal(p)) {
        return;
    } else {
        if (lessOrEqual(p.element(), key)) {
            seq.insertLast(p.element());
            findSmallerHelper(T, key, T.leftChild(p), seq);
            findSmallerHelper(T, key, T.rightChild(p), seq);
        }else{
            findSmallerHelper(T, key, T.leftChild(p), seq);
            findSmallerHelper(T, key, T.rightChild(p), seq);
        }
    }
    return;
}
