import { configureStore } from "@reduxjs/toolkit";

import menuReducer from "./menu/menuslices";
import authReducer from './auth/auth.slice'
import { authApi } from "./auth/api";

export const store = configureStore({
    reducer: {
        publication: menuReducer,
        auth: authReducer,
        [authApi.reducerPath]: authApi.reducer
    },
    middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(authApi.middleware)
})