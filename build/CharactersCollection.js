"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var CharactersCollection = /** @class */ (function () {
    function CharactersCollection(data) {
        this.data = data;
    }
    Object.defineProperty(CharactersCollection.prototype, "length", {
        get: function () {
            return this.data.length;
        },
        enumerable: true,
        configurable: true
    });
    CharactersCollection.prototype.compare = function (lxIndex, rxIndex) {
        return (this.data[lxIndex].toLowerCase() > this.data[rxIndex].toLowerCase());
    };
    CharactersCollection.prototype.swap = function (lxIndex, rxIndex) {
        var chars = this.data.split('');
        var leftHand = chars[lxIndex];
        chars[lxIndex] = chars[rxIndex];
        chars[rxIndex] = leftHand;
        this.data = chars.join('');
    };
    return CharactersCollection;
}());
exports.CharactersCollection = CharactersCollection;
