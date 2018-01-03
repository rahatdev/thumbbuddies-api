'use strict';

export class TBerror extends Error {
    constructor(msg, type){
        super(msg);
        this.type = type;
    }
}