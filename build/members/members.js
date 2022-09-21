"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Members = (function () {
    function Members() {
    }
    Members.prototype.listMembers = function () {
        for (var i = 0; i < this._members.length; i++)
            console.log(this._members[i].toString());
    };
    return Members;
}());
//# sourceMappingURL=members.js.map