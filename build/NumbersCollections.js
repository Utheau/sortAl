"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var NumbersCollection = /** @class */ (function () {
    function NumbersCollection(data) {
        this.data = data;
    }
    Object.defineProperty(NumbersCollection.prototype, "length", {
        get: function () {
            return this.data.length;
        },
        enumerable: true,
        configurable: true
    });
    NumbersCollection.prototype.compare = function (lxIndex, rxIndex) {
        return this.data[lxIndex] > this.data[rxIndex];
    };
    NumbersCollection.prototype.swap = function (lxIndex, rxIndex) {
        var leftHand = this.data[lxIndex];
        this.data[lxIndex] = this.data[rxIndex];
        this.data[rxIndex] = leftHand;
    };
    return NumbersCollection;
}());
exports.NumbersCollection = NumbersCollection;
