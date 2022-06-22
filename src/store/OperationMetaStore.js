import {makeAutoObservable} from "mobx";

export default class OperationMetaStore {
    constructor() {
        this._operationTypes = [
            {id: 1, name: 'income'},
            {id: 2, name: 'expense'},
            {id: 3, name: 'transfer'},
            {id: 4, name: 'debt'},
        ]
        makeAutoObservable(this)
    }

    get operationTypes() {
        return this._operationTypes
    }

}