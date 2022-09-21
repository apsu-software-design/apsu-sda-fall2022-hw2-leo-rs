import { Members } from "./members";
import { Gatherings } from "./gatherings";
import { Gathering } from "./gathering";

export class Organization {
    private _name: string;
    private _members: Members;
    private _hostedEvents: Gatherings;

    constructor(name: string) {
        this._name = name;
        this._members = new Members();
        this._hostedEvents = new Gatherings();
    }

    get name() {
        return this._name;
    }

    set name(value) {
        this._name = value;
    }

    get hostedEvents() {
        return this._hostedEvents;
    }

    get members() {
        return this._members; 
    }

    public addEvent(newgathering: Gathering) {
        this._hostedEvents.addNewGathering(newgathering);
    }
}