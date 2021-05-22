const List = require('./DLinkedList.js')

var findMiddle = function (L) {
    if (L.isEmpty()) {
        return null;
    }
    let pf = L.first();
    let pl = L.last();
    while (!(pf == pl || L.after(pf) === pl)) {
        pf = L.after(pf);
        pl = L.before(pl);
    }
    return pl
}
var tst0 = new List.DLinkedList();
tst0.print();
let res = findMiddle(tst0);
console.log("middle = " + res + "\n\n");
var tst1 = new List.DLinkedList();
tst1.insertFirst(5);
tst1.print();
res = findMiddle(tst1);
console.log("middle = " + res.element() + "\n\n");
var tst2 = new List.DLinkedList();
tst2.print();
res = findMiddle(tst2);
console.log("middle = " + res + "\n\n");
tst2.insertFirst(1);
tst2.print();
res = findMiddle(tst2);
console.log("middle = " + res.element() + "\n\n");
tst2.insertLast(3);
tst2.print();
res = findMiddle(tst2);
console.log("middle = " + res.element() + "\n\n");
tst2.insertAfter(tst2.before(tst2.after(tst2.first())), 2);
tst2.print();
res = findMiddle(tst2);
console.log("middle = " + res.element() + "\n\n");
tst2.remove(tst2.after(tst2.first()));
tst2.print();
res = findMiddle(tst2);
console.log("middle = " + res.element() + "\n\n");
tst2.insertFirst(0);
tst2.insertLast(4);
tst2.insertAfter(tst2.after(tst2.first()), 2);
tst2.print();
res = findMiddle(tst2);
console.log("middle = " + res.element() + "\n\n");
console.log(tst2.after(tst2.after(tst2.after(tst2.first()))).element());
console.log("first = " + tst2.first().element());
console.log("last  = " + tst2.last().element());