/* eslint-disable react/jsx-no-constructed-context-values */
import React, {createContext, useState} from 'react';

export const ProductContext = createContext();

export function ProductContextProvider({children}) {
  const [productsData, setProductsData] = useState([]);

  return (
    <div>
      <ProductContext.Provider value={{productsData, setProductsData}}>
        {children}
      </ProductContext.Provider>
    </div>
  );
}
