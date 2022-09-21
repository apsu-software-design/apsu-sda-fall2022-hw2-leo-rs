import { Organization } from "./organization";

export class Organizations {

    _organizations: Organization[];

    constructor() {
        this._organizations = [];
    }

    addNewOrganization(neworg: Organization) {
        this._organizations.push(neworg);
    }

    getOrganizations() {
        return this._organizations;
    }

    getOrganization(index: number) {
        return this._organizations[index];
    }

    listOrganizations() {
        for (let i = 0; i < this._organizations.length; i++)
            console.log(this._organizations[i].toString());
    }
}