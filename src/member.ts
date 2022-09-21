export class Member {

    private _name: string;
    private _email: string;

    constructor(name: string, email: string) {
        this._name = name;
        this._email = email;
    }

    get name() {
        return this._name;
    }

    get email() {
        return this._email;
    }

    set name(value) {
        this._name = value;
    }

    set email(value) {
        this._email = value;
    }

}