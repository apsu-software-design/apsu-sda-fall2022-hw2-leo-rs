import { Members } from "./members";
import { Organization } from "./organization";

export class Gathering {
	private _title: string;
	private _location: string;
	private _time: string;
	private _attendees: Members;

	constructor(title: string, location: string, time: string) {
		this._title = title;
		this._location = location;
		this._time = time;
		this._attendees = new Members();
	}

	get title() : string {
		return this._title;
	}

	set title(value) {
		this._title = value;
    }

	set location(value) {
		this._location = value;
	}

	set time(value) {
		this._time = value;
	}

	get attendees() : Members {
		return this._attendees;
	}

}