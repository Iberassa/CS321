function electionWinner(E) {
    if (E.size() = 0) {
        return "No elelction result"
    }
    let pos = E.first();
    let max = 0;
    let winnerID = 0;
    this.shellSort(E);
    while (E.last() !== pos) {
        let vote = 1
        while (pos.element() === E.after(pos).element()) {
            vote++
            if (E.after(pos) === E.last()) {
                break
            }
            else
                pos = E.after(pos)
        }
        if (vote > max) {
            max = vote
            winnerID = pos.element()
        }
        if (vote === max){
            winnerID = `${winnerID} and ${pos.element()}`
        }
        if (E.after(pos) === E.last()) {
            if (1 > max) {
                max = 1
                winnerID = E.last().element()
            }
        }
        pos = E.after(pos)
    }
    return winnerID
}
