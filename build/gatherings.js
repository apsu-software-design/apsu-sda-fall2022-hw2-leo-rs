"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Gatherings = void 0;
var Gatherings = (function () {
    function Gatherings() {
        this._gatherings = [];
    }
    Gatherings.prototype.addNewGathering = function (newgathering) {
        this._gatherings.push(newgathering);
    };
    Gatherings.prototype.getGatherings = function () {
        return this._gatherings;
    };
    Gatherings.prototype.getGathering = function (index) {
        return this._gatherings[index];
    };
    Gatherings.prototype.listGatherings = function () {
        for (var i = 0; i < this._gatherings.length; i++)
            console.log(this._gatherings[i].toString());
    };
    return Gatherings;
}());
exports.Gatherings = Gatherings;
//# sourceMappingURL=gatherings.js.map