import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import { URL_BASE_FIREBASE_REALTIME_DATABASE } from '../../../constants/firebase/index'

export const publicationApi = createApi({
    reducerPath: 'publicationApi',
    baseQuery: fetchBaseQuery({baseUrl: URL_BASE_FIREBASE_REALTIME_DATABASE}),
    tagTypes: ['Publications'],
    endpoints: (builder) => ({
        uploadPublication: builder.mutation ({
            query: ({localId, publicationText, userInfoData, profileImage}) => ({
                url: `/publications.json`,
                method: 'POST',
                body: {
                    localId,
                    publicationText,
                    userInfoData,
                    profileImage
                }
            }),
            invalidatesTags: ['Publications']
        }),
        uploadComentary: builder.mutation ({
            query: ({localId, commentsText, publicationId, userCommerInfo}) => ({
                url: `/publications/${publicationId}/comments.json`,
                method: 'POST',
                body: {
                    localId,
                    commentsText,
                    userCommerInfo
                }
            }),
            invalidatesTags: ['Publications']
        }),
        getPublicationData: builder.query ({
            query: () => `/publications.json`,
            transformResponse: (response) => {
                if (!response) return [];
                return Object?.keys(response)?.map((key) => ({
                id: key,
                ...response[key],
                }));
            },
            providesTags: ['Publications'],
        }),
        deletePublication: builder.mutation ({
            query: (publicationId) => ({
              url: `/publications/${publicationId}.json`,
              method: 'DELETE',
            }),
            invalidatesTags: ['Publications'],
        }),
    })
})

export const { useUploadPublicationMutation, useGetPublicationDataQuery, useDeletePublicationMutation, useUploadComentaryMutation } = publicationApi;