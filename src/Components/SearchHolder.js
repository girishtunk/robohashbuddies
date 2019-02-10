import React from 'react';

const SearchHolder = ({searchField, searchInput}) => {
  return(
    <div >
      <input className='ma3 br2'
        type='search'
        placeholder='Search Robots'
        onChange={searchInput}
      />
    </div>
  );
}

export default SearchHolder;
