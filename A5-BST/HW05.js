function height(T) {
    if (T.isEmpty()) {
        return "Empty tree";
    }
    else
        return heightHelper(T, T.root());
}

function heightHelper(T, p) {
    if (T.isExternal(p)) {
        return 1;
    }
    else {
        let lCount = 0
        let rCount = 0
        if (T.isRoot(p)) {
            lCount = lCount + heightHelper(T, T.leftChild(p));
            rCount = rCount + heightHelper(T, T.rightChild(p));
        } else {
            lCount = 1 + heightHelper(T, T.leftChild(p));
            rCount = 1 + heightHelper(T, T.rightChild(p));
        }
        if (lCount > rCount) {
            return lCount;
        } else
            return rCount;
    }
}

//(c)

class TreeHeight extends BinaryTreeIterator {
    _getPositions(T) {
        return this._visitInOrder(T, T.root());
    }
    _visitInOrder(T, p) {
        if (T.isExternal(p)) {
            return 1;
        } else {
            let lCount = 0
            let rCount = 0
            if (T.isRoot(p)) {
                lCount = this._visitInOrder(T, T.leftChild(p));
                rCount = this._visitInOrder(T, T.rightChild(p));
            } else {
                lCount = 1 + this._visitInOrder(T, T.leftChild(p));
                rCount = 1 + this._visitInOrder(T, T.rightChild(p));
            }
            if (lCount > rCount) {
                return lCount;
            } else
                return rCount;
        }
    }
    height(T) {
        let h = this._getPositions(T);  
        return h;
    }
}
