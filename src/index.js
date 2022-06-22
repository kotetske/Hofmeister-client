import React, {createContext} from 'react';
import ReactDOM from 'react-dom';
import App from './App'
import UserStore from "./store/UserStore";
import OperationStore from "./store/OperationStore";
import AccountStore from "./store/AccountStore";
import CategoryStore from "./store/CategoryStore";
import OperationMetaStore from "./store/OperationMetaStore";
import AccountMetaStore from "./store/AccountMetaStore";
import operation from "./pages/Operation";


export const Context = createContext(null)
console.log(process.env.REACT_APP_API_URL)

ReactDOM.render(
    <Context.Provider value={
        {
            user: new UserStore(),
            operation: new OperationStore(),
            account: new AccountStore(),
            category: new CategoryStore(),
            operationMeta: new OperationMetaStore(),
            accountMeta: new AccountMetaStore(),
        }
    }>
        <App />,
    </Context.Provider>,

    document.getElementById('root'),

);
