"use strict";
var Member = (function () {
    function Member() {
        this._name = "";
        this._email = "";
    }
    Object.defineProperty(Member.prototype, "name", {
        get: function () {
            return this._name;
        },
        set: function (value) {
            this._name = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Member.prototype, "email", {
        get: function () {
            return this._email;
        },
        set: function (value) {
            this._email = value;
        },
        enumerable: false,
        configurable: true
    });
    return Member;
}());
//# sourceMappingURL=member.js.map