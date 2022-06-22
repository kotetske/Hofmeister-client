import {makeAutoObservable} from "mobx";

export default class OperationStore {
    constructor() {
        this._operationTypes = []
        this._donorAccounts = []
        this._categories = []
        this._operations = []
        /*{id: 1, destination: '', sum: 100, date: '10.10.2010', place: 'magnit', comment: '' },
            {id: 2, destination: '', sum: 100, date: '10.10.2010', place: 'magnit', comment: '' },
            {id: 3, destination: '', sum: 100, date: '10.10.2010', place: 'magnit', comment: '' },
            {id: 4, destination: '', sum: 100, date: '10.10.2010', place: 'magnit', comment: '' },
            {id: 5, destination: '', sum: 100, date: '10.10.2010', place: 'magnit', comment: '' },*/
        this._selectedDonorAccount = {}
        this._selectedOperationType = {}
        makeAutoObservable(this)
    }

    setOperationType(operationType) {
        this._operationTypes = operationType;
    }

    setDonorAccount(donorAccount) {
        this._donorAccounts = donorAccount;
    }

    setCategories(categories) {
        this._categories = categories;
    }

    setOperations(operations) {
        this._operations = operations;
    }

    setSelectedDonorAccount(donorAccount) {
        this._selectedDonorAccount = donorAccount
    }

    setSelectedOperationType(operationType) {
        this._selectedOperationType = operationType
    }

    get operations() {
        return this._operations
    }

    get operationTypes() {
        return this._operationTypes
    }

    get donorAccounts() {
        return this._donorAccounts;
    }

    get categories() {
        return this._categories;
    }

    get selectedDonorAccount() {
        return this._selectedDonorAccount;
    }

    get selectedOperationType() {
        return this._selectedOperationType;
    }
}