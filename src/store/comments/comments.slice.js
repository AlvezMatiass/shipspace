import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { URL_BASE_FIREBASE_REALTIME_DATABASE } from '../../constants/firebase';

export const fetchComments = createAsyncThunk(
  'comments/fetchComments',
  async (publicationId) => {
    const response = await fetch(`${URL_BASE_FIREBASE_REALTIME_DATABASE}/publications/${publicationId}/comments.json`);
    const data = await response.json();
    
    const commentsWithIds = Object.keys(data).map(id => ({ id, ...data[id] }));
    
    return commentsWithIds;
  }
);

export const deleteComment = createAsyncThunk(
    'comments/deleteComment',
    async ({ publicationId, commentId }) => {
      try {
        const response = await fetch(`${URL_BASE_FIREBASE_REALTIME_DATABASE}/publications/${publicationId}/comments/${commentId}.json`, {
          method: 'DELETE'
        });
        if (!response.ok) {
          throw new Error('Failed to delete comment');
        }
        const data = await response.json();
        return { id: commentId, data };
      } catch (error) {
        throw error;
      }
    }
  );
  

const commentsSlice = createSlice({
  name: 'comments',
  initialState: {
    data: [],
    loading: false,
    error: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchComments.pending, (state) => {
        state.loading = true;
      })
      .addCase(fetchComments.fulfilled, (state, action) => {
        state.data = action.payload;
        state.loading = false;
      })
      .addCase(fetchComments.rejected, (state) => {
        state.loading = false;
      })
      .addCase(deleteComment.fulfilled, (state, action) => {
        const deletedCommentId = action.payload.id;
        state.data = state.data.filter(item => item.id !== deletedCommentId);
      })
      .addCase(deleteComment.rejected, (state) => {
        state.loading = false;
        state.error = action.error.message;
      });
  },
});

export default commentsSlice.reducer;
