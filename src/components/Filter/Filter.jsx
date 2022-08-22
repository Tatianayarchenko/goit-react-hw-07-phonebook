import { Input } from '../ui/Input.styled';
import { useDispatch, useSelector } from 'react-redux';
import { filterContacts, getFilterValue } from 'store/slice';
// import { useGetContactsQuery } from 'store/contactsSlice';

export const Filter = () => {
  const filter = useSelector(getFilterValue);
  const dispatch = useDispatch();

  const changeFilter = e => {
    const inputValue = e.target.value;
    dispatch(filterContacts(inputValue));
  };

  return (
    <label>
      Find contacts by name
      <Input type="text" value={filter} onChange={changeFilter} />
    </label>
  );
};
