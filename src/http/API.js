import {$authHost, $host} from "./index";

export const fetchTypes = async () => {
    const {data} = await $authHost.get('api/operationMeta')
    return data
}

export const fetchAccounts = async () => {
    const {data} = await $authHost.get('api/account')
    return data
}

export const fetchCategories = async () => {
    const {data} = await $authHost.get('api/category')
    return data
}

export const fetchOperations = async (donorAccountId, operationTypeId, page = 1, limit = 100) => {
    const {data} = await $authHost.get('api/operation', {params: {
            donorAccountId, operationTypeId, page, limit
        }})
    //console.log('API.js: fetchOperations: accountId: ' + donorAccountId)
    //console.log('API.js: fetchOperations: operationTypeId: ' + operationTypeId)
    return data
}

export const createOperation = async (operation) => {
    const {data} = await $authHost.post('api/operation', operation)
    return data
}

