import { useId } from 'react';
import css from './SearchBox.module.css';

const SearchBox = ({ filter, setFilter }) => {
  const filterInputId = useId();

  return (
    <div className={css.searchBar}>
      <label htmlFor={filterInputId}>Find contacts by name</label>
      <input
        type="text"
        id={filterInputId}
        name="filter"
        value={filter}
        onChange={e => setFilter(e.target.value)}
      />
    </div>
  );
};

export default SearchBox;
