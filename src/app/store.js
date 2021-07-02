import { configureStore } from '@reduxjs/toolkit'
import searchTerms from '../features/searchSlice'
export const store = configureStore({
  reducer: {
    search: searchTerms
  },
});
