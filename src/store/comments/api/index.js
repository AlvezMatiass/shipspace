import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import { URL_BASE_FIREBASE_REALTIME_DATABASE } from '../../../constants/firebase/index'

export const commentsApi = createApi({
    reducerPath: 'commentsApi',
    baseQuery: fetchBaseQuery({baseUrl: URL_BASE_FIREBASE_REALTIME_DATABASE}),
    tagTypes: ['Comments'],
    endpoints: (builder) => ({
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
            invalidatesTags: ['Comments']
        })
    })
})

export const { useUploadComentaryMutation } = commentsApi;