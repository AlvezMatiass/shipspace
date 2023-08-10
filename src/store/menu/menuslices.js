import { createSlice } from "@reduxjs/toolkit";
import PUBLICATION from '../../constants/data/publicaciones.json'

const initialState = {
    data: PUBLICATION
}

const menuSlice = createSlice({
    name: 'publication',
    initialState,
    reducers: {},
})

export default menuSlice.reducer