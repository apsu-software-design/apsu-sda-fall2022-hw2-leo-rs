import { Member } from './member';

export class Members {
    private _members: Member[];

    constructor() {
        this._members = [];
    }

    public addNewMember(newmember: Member) {
        this._members.push(newmember);
    }

    public getMembers() {
        return this._members;
    }

    public getMember(index: number) {
        return this._members[index];
    }

    public listMembers() : string[] {
        var roster: string[] = [];

        for (let i = 0; i < this._members.length; i++)
            roster.push(this.getMember(i).name + " " + this.getMember(i).email);

        return roster;
    }

}