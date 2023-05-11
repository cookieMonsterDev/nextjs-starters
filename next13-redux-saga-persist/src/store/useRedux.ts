import { useSelector, TypedUseSelectorHook } from 'react-redux';
import { RootState } from '.';

export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;
