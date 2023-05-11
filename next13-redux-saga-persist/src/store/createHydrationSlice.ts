import { RootState } from '.';
import { HYDRATE } from 'next-redux-wrapper';
import { NoInfer } from 'react-redux';

import {
  ActionReducerMapBuilder,
  CreateSliceOptions,
  PayloadAction,
  Slice,
  SliceCaseReducers,
  createSlice,
} from '@reduxjs/toolkit';

export const createHydrationSlice = <
  State,
  CaseReducers extends SliceCaseReducers<State>,
  Name extends string = string,
>(
  options: CreateSliceOptions<State, CaseReducers, Name>,
): Slice<State, CaseReducers, Name> =>
  createSlice({
    ...options,
    extraReducers: (builder) => {
      builder.addCase(HYDRATE, (state, action) => {
        const { payload } = action as PayloadAction<RootState>;
        const reducerName = options.name as keyof RootState;

        return {
          ...state,
          ...payload[reducerName],
        };
      });

      if (!options.extraReducers) return;
      if (typeof options.extraReducers?.call !== 'function')
        throw new Error('extraReducers is not a function');

      (
        options.extraReducers as (
          builder: ActionReducerMapBuilder<NoInfer<State>>,
        ) => void
      )?.(builder);
    },
  });