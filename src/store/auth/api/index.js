import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import { FIREBASE_AUTH_BASE_URL, FIREBASE_AUTH_SING_IN_API, FIREBASE_AUTH_SING_UP_API } from '../../../constants/firebase/index'
import { createSelector } from '@reduxjs/toolkit'

export const authApi = createApi({
    reducerPath: 'authApi',
    baseQuery: fetchBaseQuery({baseUrl: FIREBASE_AUTH_BASE_URL}),
    tagTypes: ['Auth'],
    endpoints: (builder) => ({
        signIn: builder.mutation({
            query: (credential) => ({
                url: FIREBASE_AUTH_SING_IN_API,
                method: 'POST',
                body: credential
            })
        }),
        signUp: builder.mutation ({
            query: (credential) => ({
                url: FIREBASE_AUTH_SING_UP_API,
                method: 'POST',
                body: credential
            })
        })
    })
})

export const selectAuthData = authApi.endpoints.signIn.select()

export const authData = createSelector(
    selectAuthData, (authResult) => authResult.data
)

export const { useSignInMutation, useSignUpMutation } = authApi;