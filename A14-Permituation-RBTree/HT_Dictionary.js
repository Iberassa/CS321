const Tab = require('./LinearHashTable.js');

class HT_Dictionary {
    constructor() {
        this._HT = new Tab.LinearHashTable();
    }
    removeAllItems() {
        this._HT.removeAllItems();
    }
    findValue(key) {
        return this._HT.findValue(key);
    }
    insertItem(key, elem) {
        return this._HT.insertItem(key, elem);
    }
    removeItem(key) {
        return this._HT.removeItem(key);
    }
    size() {
        return this._HT.size();
    }
    isEmpty() {
        return this._HT.isEmpty();
    }
    items() {
        return this._HT.items();
    }
    keys() {
        return this._HT.keys();
    }
    values() {
        return this._HT.values();
    }
    toString() {
        return this._HT.toString();
    }
    print() {
        return this._HT.print();
    }
}

exports.HT_Dictionary = HT_Dictionary;
