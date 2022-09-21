import { Gathering } from "./gathering";

export class Gatherings {
    private _gatherings: Gathering[];

    constructor() {
        this._gatherings = [];
    } 

    public addNewGathering(newgathering: Gathering) {
        this._gatherings.push(newgathering);
    }

    public getGatherings() : Gathering[] {
        return this._gatherings;
    }

    public getGathering(index: number) : Gathering {
        return this._gatherings[index];
    }

    public listGatherings() {
        for (let i = 0; i < this._gatherings.length; i++)
            console.log(this._gatherings[i].toString());
    }
}