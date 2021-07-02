import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  term: null
}

const searchSlice = createSlice({
  name: 'search',
  initialState,
  reducers: {
    searchTerm: (state, action)=>{
      state.term = action.payload.term
    }
  }
});

export const {
  searchTerm
} = searchSlice.actions
export const selectTerm = state => state.search.term
export default searchSlice.reducer