import { configureStore } from '@reduxjs/toolkit';
import dataReducer from './slices/dataSlice';
import uiReducer from './slices/uiSlice';
import regionSlice from './slices/regionSlice';

export const store = configureStore({
  reducer: {
    data: dataReducer,
    ui: uiReducer,
    region: regionSlice,
  },
});