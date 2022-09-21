"use strict";
var Gathering = (function () {
    function Gathering(location, time, host) {
        this._location = location;
        this._time = time;
        this._host = host;
    }
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
    Object.defineProperty(Gathering.prototype, "host", {
        set: function (value) {
            this._host = value;
        },
        enumerable: false,
        configurable: true
    });
    Gathering.prototype.listAttendees = function () {
        return this._attendees;
    };
    return Gathering;
}());
//# sourceMappingURL=gathering.js.map