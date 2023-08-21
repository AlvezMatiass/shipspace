import { configureStore } from "@reduxjs/toolkit";

import menuReducer from "./menu/menuslices";
import authReducer from './auth/auth.slice'
import { authApi } from "./auth/api";
import { usersApi } from "./users/api";

export const store = configureStore({
    reducer: {
        publication: menuReducer,
        auth: authReducer,
        [authApi.reducerPath]: authApi.reducer,
        [usersApi.reducerPath]: usersApi.reducer
    },
    middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(authApi.middleware, usersApi.middleware)
})