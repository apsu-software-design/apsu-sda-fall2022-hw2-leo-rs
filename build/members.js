"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Members = void 0;
var Members = (function () {
    function Members() {
        this._members = [];
    }
    Members.prototype.addNewMember = function (newmember) {
        this._members.push(newmember);
    };
    Members.prototype.getMembers = function () {
        return this._members;
    };
    Members.prototype.getMember = function (index) {
        return this._members[index];
    };
    Members.prototype.listMembers = function () {
        var roster = [];
        for (var i = 0; i < this._members.length; i++)
            roster.push(this.getMember(i).name + " " + this.getMember(i).email);
        return roster;
    };
    return Members;
}());
exports.Members = Members;
//# sourceMappingURL=members.js.map