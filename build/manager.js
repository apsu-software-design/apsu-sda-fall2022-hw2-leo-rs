"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.GatheringManager = void 0;
var members_1 = require("./members");
var gatherings_1 = require("./gatherings");
var organizations_1 = require("./organizations");
var member_1 = require("./member");
var gathering_1 = require("./gathering");
var organization_1 = require("./organization");
var GatheringManager = (function () {
    function GatheringManager() {
        this.all_members = new members_1.Members();
        this.all_gatherings = new gatherings_1.Gatherings();
        this.all_orgs = new organizations_1.Organizations();
    }
    GatheringManager.prototype.addMember = function (name, email) {
        this.all_members.addNewMember(new member_1.Member(name, email));
    };
    GatheringManager.prototype.addGathering = function (title, location, date) {
        this.all_gatherings.addNewGathering(new gathering_1.Gathering(title, location, date));
    };
    GatheringManager.prototype.addOrganization = function (title) {
        this.all_orgs.addNewOrganization(new organization_1.Organization(title));
    };
    GatheringManager.prototype.addMemberToGathering = function (name, gatheringTitle) {
        var attending;
        for (var i = 0; i < this.all_members.getMembers.length; i++) {
            if (this.all_members.getMember(i).name == name)
                attending = this.all_members.getMember(i);
        }
        for (var i = 0; i < this.all_gatherings.getGatherings.length; i++) {
            if (this.all_gatherings.getGathering(i).title == gatheringTitle)
                this.all_gatherings.getGathering(i).attendees.addNewMember(attending);
        }
    };
    GatheringManager.prototype.addGatheringToOrganization = function (gatheringTitle, organizationTitle) {
        var aparty;
        for (var i = 0; i < this.all_gatherings.getGatherings.length; i++) {
            if (this.all_gatherings.getGathering(i).title == gatheringTitle)
                aparty = this.all_gatherings.getGathering(i);
        }
        for (var i = 0; i < this.all_orgs.getOrganizations.length; i++) {
            if (this.all_orgs.getOrganization(i).name == organizationTitle)
                this.all_orgs.getOrganization(i).addEvent(aparty);
        }
    };
    GatheringManager.prototype.modifyGathering = function (title, newTitle, newDate) {
        for (var i = 0; i < this.all_gatherings.getGatherings.length; i++) {
            if (this.all_gatherings.getGathering[i].title == title) {
                this.all_gatherings.getGathering[i].title(newTitle);
                this.all_gatherings.getGathering[i].date(newDate);
            }
        }
    };
    GatheringManager.prototype.getMembers = function (gatheringTitle) {
        for (var i = 0; i < this.all_gatherings.getGatherings.length; i++) {
            if (this.all_gatherings.getGathering(i).title == gatheringTitle)
                return this.all_gatherings.getGathering(i).attendees.listMembers();
        }
    };
    GatheringManager.prototype.findMemberNames = function (query) {
        var members = [];
        for (var i = 0; i < this.all_members.getMembers().length; i++) {
            if (this.all_members.getMember(i).name.includes(query))
                members[i] = this.all_members.getMember(i).name;
        }
        return members;
    };
    GatheringManager.prototype.findGatheringNames = function (query) {
        var gatherings = [];
        for (var i = 0; i < this.all_gatherings.getGatherings().length; i++) {
            if (this.all_gatherings.getGathering(i).title.includes(query))
                gatherings[i] = this.all_gatherings.getGathering(i).title;
        }
        return gatherings;
    };
    GatheringManager.prototype.findOrganizationNames = function (query) {
        var orgs = [];
        for (var i = 0; i < this.all_orgs.getOrganizations().length; i++) {
            if (this.all_orgs.getOrganization(i).name.includes(query))
                orgs[i] = this.all_orgs.getOrganization(i).name;
        }
        return orgs;
    };
    return GatheringManager;
}());
exports.GatheringManager = GatheringManager;
//# sourceMappingURL=manager.js.map