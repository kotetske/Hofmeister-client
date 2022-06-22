import {makeAutoObservable} from "mobx";

export default class AccountStore {
    constructor() {
        this._accountTypes = [
            {id: 1, name: 'debit'},
            {id: 2, name: 'credit'},
            {id: 3, name: 'deposit'},
        ]
        this._banks = [
            {id: 1, name: 'tinkoff'},
            {id: 2, name: 'sberbank'},
        ]
        this._currencies = [
            {id: 1, name: 'RUB'},
            {id: 2, name: 'USD'},
        ]
        this._accounts = [
            {id: 1, num: 'num1', name: 'acc1', balance: '1111', creditLimit: '0', inArchive: false},
            {id: 2, num: 'num2', name: 'acc2', balance: '2222', creditLimit: '0', inArchive: false},
        ]
        makeAutoObservable(this)
    }

    setAccountType(accountType) {
        this._accountTypes = accountType;
    }

    setBank(bank) {
        this._banks = bank;
    }

    setCurrency(currency) {
        this._currencies = currency;
    }

    setAccount(account) {
        this._accounts = account;
    }

    get accountTypes() {
        return this._accountTypes;
    }

    get banks() {
        return this._banks;
    }

    get currencies() {
        return this._currencies;
    }

    get accounts() {
        return this._accounts
    }
}