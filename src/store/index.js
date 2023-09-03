import { configureStore } from "@reduxjs/toolkit";

import menuReducer from "./menu/menuslices";
import authReducer from './auth/auth.slice';
import userReducer from "./users/user.slice";
import publicationsReducer from './publications/publication.slice'
import commentsReducer from './comments/comments.slice'
import { authApi } from "./auth/api";
import { usersApi } from "./users/api";
import { publicationApi } from "./publications/api";
import { commentsApi } from "./comments/api";

export const store = configureStore({
    reducer: {
        publication: menuReducer,
        auth: authReducer,
        user: userReducer,
        publications: publicationsReducer,
        comments: commentsReducer,
        [authApi.reducerPath]: authApi.reducer,
        [usersApi.reducerPath]: usersApi.reducer,
        [publicationApi.reducerPath]: publicationApi.reducer,
        [commentsApi.reducerPath]: commentsApi.reducer
    },
    middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(authApi.middleware, usersApi.middleware, publicationApi.middleware, commentsApi.middleware)
});