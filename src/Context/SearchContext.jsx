import * as React from 'react';
import {createContext} from 'react';
import PropTypes from 'prop-types';

export const SearchContext = createContext();

export function SearchContextProvider({children}) {
  const [search, setSearch] = React.useState('');

  // eslint-disable-next-line react/jsx-no-constructed-context-values
  return <SearchContext.Provider value={{search, setSearch}}>{children}</SearchContext.Provider>;
}

SearchContextProvider.propTypes = {
  children: PropTypes.element.isRequired,
};
