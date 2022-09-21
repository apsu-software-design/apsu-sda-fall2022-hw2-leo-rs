//your code goes here!

// These import statements are suggestions on how to get your three main libraries into this code.
// You'll need to create each of these libraries.
import {Members} from './members';
import {Gatherings} from './gatherings';
import { Organizations } from './organizations';
import { Member } from './member';
import { Gathering } from './gathering';
import { Organization } from './organization';

export class GatheringManager {

    private all_members: Members;
    private all_gatherings: Gatherings;
    private all_orgs: Organizations;

    constructor() {
        this.all_members = new Members();
        this.all_gatherings = new Gatherings();
        this.all_orgs = new Organizations();
    }

    addMember(name: string, email: string) {
        this.all_members.addNewMember(new Member(name, email));
    }

    addGathering(title: string, location: string, date: string) {
        this.all_gatherings.addNewGathering(new Gathering(title, location, date));
    }

    addOrganization(title: string) {
        this.all_orgs.addNewOrganization(new Organization(title));
    }

    addMemberToGathering(name: string, gatheringTitle: string) {
        var attending: Member;

        for (let i = 0; i < this.all_members.getMembers.length; i++) {
            if (this.all_members.getMember(i).name == name)
                attending = this.all_members.getMember(i);
        }

        for (let i = 0; i < this.all_gatherings.getGatherings.length; i++) {
            if (this.all_gatherings.getGathering(i).title == gatheringTitle)

                this.all_gatherings.getGathering(i).attendees.addNewMember(attending);
        }
    }

    addGatheringToOrganization(gatheringTitle: string, organizationTitle: string) {
        var aparty: Gathering;

        for (let i = 0; i < this.all_gatherings.getGatherings.length; i++) {
            if (this.all_gatherings.getGathering(i).title == gatheringTitle)
                aparty = this.all_gatherings.getGathering(i);
        }

        for (let i = 0; i < this.all_orgs.getOrganizations.length; i++) {
            if (this.all_orgs.getOrganization(i).name == organizationTitle)
                this.all_orgs.getOrganization(i).addEvent(aparty);
        }
    }

    modifyGathering(title: string, newTitle: string, newDate?: string) {
        for (let i = 0; i < this.all_gatherings.getGatherings.length; i++) {
            if (this.all_gatherings.getGathering[i].title == title) {
                this.all_gatherings.getGathering[i].title(newTitle);
                this.all_gatherings.getGathering[i].date(newDate);
            }
        }
    }

    getMembers(gatheringTitle: string): string[] {
        for (let i = 0; i < this.all_gatherings.getGatherings.length; i++) {
            if (this.all_gatherings.getGathering(i).title == gatheringTitle)
                return this.all_gatherings.getGathering(i).attendees.listMembers();
        }
    }

    findMemberNames(query: string): string[] {
        var members: string[] = [];

        for (let i = 0; i < this.all_members.getMembers().length; i++) {
            if (this.all_members.getMember(i).name.includes(query))
                members[i] = this.all_members.getMember(i).name;
        }

        return members;
    }

    findGatheringNames(query: string): string[] {
        var gatherings: string[] = [];


        for (let i = 0; i < this.all_gatherings.getGatherings().length; i++) {
            if (this.all_gatherings.getGathering(i).title.includes(query))
                gatherings[i] = this.all_gatherings.getGathering(i).title;
        }

        return gatherings;
    }

    findOrganizationNames(query: string): string[] {
        var orgs: string[] = [];


        for (let i = 0; i < this.all_orgs.getOrganizations().length; i++) {
            if (this.all_orgs.getOrganization(i).name.includes(query))
                orgs[i] = this.all_orgs.getOrganization(i).name;
        }

        return orgs;
    }
}
