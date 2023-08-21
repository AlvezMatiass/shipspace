import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import { URL_BASE_FIREBASE_REALTIME_DATABASE } from '../../../constants/firebase/index'
import { useSelector } from 'react-redux';

export const usersApi = createApi({
    reducerPath: 'usersApi',
    baseQuery: fetchBaseQuery({baseUrl: URL_BASE_FIREBASE_REALTIME_DATABASE}),
    tagTypes: ['Users'],
    endpoints: (builder) => ({
        singUpUserData: builder.mutation ({
            query: (userData) => ({
                url: `/users.json`,
                method: 'POST',
                body: userData
            })
        })
    })
})

export const { useSingUpUserDataMutation } = usersApi;