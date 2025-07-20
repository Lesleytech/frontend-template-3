import { createSlice, PayloadAction } from '@reduxjs/toolkit';

import { ColorMode } from '~/lib/types/colorMode';
import { LocalStorageService } from '~/services/localStorage.service';

const initialState = {
  colorMode: 'dark' as ColorMode,
};

const slice = createSlice({
  name: 'ui',
  initialState,
  reducers: {
    setColorMode: (ui, action: PayloadAction<ColorMode>) => {
      ui.colorMode = action.payload;

      LocalStorageService.set('colorMode', ui.colorMode);
    },
  },
});

export const uiActions = slice.actions;
export const uiReducer = slice.reducer;
