"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Organization = void 0;
var members_1 = require("./members");
var gatherings_1 = require("./gatherings");
var Organization = (function () {
    function Organization(name) {
        this._name = name;
        this._members = new members_1.Members();
        this._hostedEvents = new gatherings_1.Gatherings();
    }
    Object.defineProperty(Organization.prototype, "name", {
        get: function () {
            return this._name;
        },
        set: function (value) {
            this._name = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Organization.prototype, "hostedEvents", {
        get: function () {
            return this._hostedEvents;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Organization.prototype, "members", {
        get: function () {
            return this._members;
        },
        enumerable: false,
        configurable: true
    });
    Organization.prototype.addEvent = function (newgathering) {
        this._hostedEvents.addNewGathering(newgathering);
    };
    return Organization;
}());
exports.Organization = Organization;
//# sourceMappingURL=organization.js.map