import {makeAutoObservable} from "mobx";

export default class CategoryStore {
    constructor() {
        this._operationTypes = [
            {id: 1, name: 'income'},
            {id: 2, name: 'expense'},
            {id: 3, name: 'transfer'},
            {id: 4, name: 'debt'},
        ]
        this._categories = [
            {id: 1, name: 'Продукты', level: '', income: false, expense: true},
            {id: 2, name: 'Проезд', level: '', income: false, expense: true},
            {id: 3, name: 'Подписки', level: '', income: false, expense: true},
            {id: 4, name: 'Хозтовары', level: '', income: false, expense: true},
        ]
        makeAutoObservable(this)
    }
    
    setOperationType(operationType) {
        this._operationTypes = operationType;
    }

    setCategory(category) {
        this._categories = category;
    }

    get operationTypes() {
        return this._operationTypes
    }

    get categories() {
        return this._categories
    }

}