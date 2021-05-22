function sumList(L) {
    if (L.isEmpty()) {
        return "Empty List"
    } else
        return sumListHelper(L, L.first())
}

function sumListHelper(L, p) {
    if (L.isLast(p)) {
        return p.element()
    } else
        return p.element() + sumListHelper(L, L.after(p))
}
