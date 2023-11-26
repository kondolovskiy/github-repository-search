import { useSelector, useDispatch } from 'react-redux';
import { RootState } from '../../../store';
import { setSearchQuery, setIsTyping, setAfterCursor } from '../../../store/searchSclice';

export function useSearch() {
  const dispatch = useDispatch();
  const search = useSelector((state: RootState) => state.search);

  const handleSetSearchQuery = (value: string) => {
    dispatch(setSearchQuery(value));
  }

  const handleSetIsTyping = (value: boolean) => {
    dispatch(setIsTyping(value));
  }

  const handleSetAfterCursor = (value: any) => {
    dispatch(setAfterCursor(value));
  }

  return {
    search,
    handleSetSearchQuery,
    handleSetIsTyping,
    handleSetAfterCursor
  }
}