"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Organizations = void 0;
var Organizations = (function () {
    function Organizations() {
        this._organizations = [];
    }
    Organizations.prototype.addNewOrganization = function (neworg) {
        this._organizations.push(neworg);
    };
    Organizations.prototype.getOrganizations = function () {
        return this._organizations;
    };
    Organizations.prototype.getOrganization = function (index) {
        return this._organizations[index];
    };
    Organizations.prototype.listOrganizations = function () {
        for (var i = 0; i < this._organizations.length; i++)
            console.log(this._organizations[i].toString());
    };
    return Organizations;
}());
exports.Organizations = Organizations;
//# sourceMappingURL=organizations.js.map