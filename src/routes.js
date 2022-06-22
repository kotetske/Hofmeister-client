import {
    LOGIN_ROUTE,
    REGISTRATION_ROUTE,
    MAIN_ROUTE,
    OPERATION_ROUTE,
    ACCOUNT_ROUTE,
} from "./utils/consts";
import Main from "./pages/Main";
import Operation from "./pages/Operation";
import Auth from "./pages/Auth";
import Account from "./pages/Account";

export const authRoutes = [
    {
        path:  MAIN_ROUTE,
        Component: <Main/>
    },
    {
        path:  OPERATION_ROUTE + '/:id',
        Component: <Operation/>
    },
    {
        path:  ACCOUNT_ROUTE + '/:id',
        Component: <Account/>
    },
]

export const publicRoutes = [
    {
        path:  LOGIN_ROUTE,
        Component: <Auth/>
    },
    {
        path:  REGISTRATION_ROUTE,
        Component: <Auth/>
    },
]