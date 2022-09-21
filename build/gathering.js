"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Gathering = void 0;
var members_1 = require("./members");
var Gathering = (function () {
    function Gathering(title, location, time) {
        this._title = title;
        this._location = location;
        this._time = time;
        this._attendees = new members_1.Members();
    }
    Object.defineProperty(Gathering.prototype, "title", {
        get: function () {
            return this._title;
        },
        set: function (value) {
            this._title = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Gathering.prototype, "location", {
        set: function (value) {
            this._location = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Gathering.prototype, "time", {
        set: function (value) {
            this._time = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Gathering.prototype, "attendees", {
        get: function () {
            return this._attendees;
        },
        enumerable: false,
        configurable: true
    });
    return Gathering;
}());
exports.Gathering = Gathering;
//# sourceMappingURL=gathering.js.map