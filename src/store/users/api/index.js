import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import { URL_BASE_FIREBASE_REALTIME_DATABASE } from '../../../constants/firebase/index'
import { useSelector } from 'react-redux';

export const usersApi = createApi({
    reducerPath: 'usersApi',
    baseQuery: fetchBaseQuery({baseUrl: URL_BASE_FIREBASE_REALTIME_DATABASE}),
    tagTypes: ['Users'],
    endpoints: (builder) => ({
        singUpUserData: builder.mutation ({
            query: ({localId, username, shipid, profileImage}) => ({
                url: `/users/${localId}.json`,
                method: 'PATCH',
                body: {
                    username,
                    shipid,
                    profileImage,
                    localId
                }
            })
        }),
        getProfile: builder.query({
            query: ({ localId }) => ({
              url: `/users/${localId}.json`,
              method: 'GET',
            }),
        }),
        getAllUsers: builder.query({
            query: () => ({
                url: '/users.json',
                method: 'GET',
            }),
        }),
        updateImageProfile: builder.mutation({
            query: ({ localId, image }) => ({
              url: `/users/${localId}.json`,
              method: 'PATCH',
              body: { profileImage: image },
            }),
        }),
    })
})

export const { useSingUpUserDataMutation, useGetProfileQuery, useUpdateImageProfileMutation, useGetAllUsersQuery } = usersApi;