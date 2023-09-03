import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { URL_BASE_FIREBASE_REALTIME_DATABASE } from '../../constants/firebase';

export const fetchPublications = createAsyncThunk(
    'publications/fetchPublications',
    async () => {
      const response = await fetch(`${URL_BASE_FIREBASE_REALTIME_DATABASE}/publications.json`);
      const data = await response.json();
      
      const publicationsWithIds = Object.keys(data).map(id => ({ id, ...data[id] }));
      
      return publicationsWithIds;
    }
  );

  export const deletePublication = createAsyncThunk(
    'publications/deletePublication',
    async (publicationId) => {
      const response = await fetch(`${URL_BASE_FIREBASE_REALTIME_DATABASE}/publications/${publicationId}.json`, {
        method: 'DELETE'
      });
      const data = await response.json();
      return { id: publicationId, data };
    }
  );

const publicationsSlice = createSlice({
  name: 'publications',
  initialState: {
    data: [],
    loading: false,
    error: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchPublications.pending, (state) => {
        state.loading = true;
      })
      .addCase(fetchPublications.fulfilled, (state, action) => {
        state.data = action.payload;
        state.loading = false;
      })
      .addCase(fetchPublications.rejected, (state) => {
        state.loading = false;
      })
      .addCase(deletePublication.fulfilled, (state, action) => {
        const deletedPublicationId = action.payload.id;
        state.data = state.data.filter(item => item.id !== deletedPublicationId);
      })
      .addCase(deletePublication.rejected, (state) => {
        state.loading = false;
        state.error = action.error.message;
      });
  },
});

export default publicationsSlice.reducer;
