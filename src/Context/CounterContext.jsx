import * as React from 'react';

export const CounterContext = React.createContext();

export function CounterContextProvider({children}) {
  const [cartCounter, setCartCounter] = React.useState(0);
  const [wishlistCounter, setWishListCounter] = React.useState(0);

  const setCartCounterValue = (countValue) => {
    setCartCounter(countValue);
  };
  const setWishListCounterValue = (countValue) => {
    setWishListCounter(countValue);
  };

  const increaseCartCounter = () => {
    setCartCounter(cartCounter + 1);
  };

  const decreaseCartCounter = () => {
    setCartCounter(cartCounter - 1);
  };

  const increaseWishListCounter = () => {
    setWishListCounter(cartCounter + 1);
  };

  const decreaseWishListCounter = () => {
    setWishListCounter(cartCounter - 1);
  };

  return (
    <div>
      <CounterContext.Provider
        // eslint-disable-next-line react/jsx-no-constructed-context-values
        value={{
          cartCounter,
          wishlistCounter,
          increaseCartCounter,
          decreaseCartCounter,
          increaseWishListCounter,
          decreaseWishListCounter,
          setCartCounterValue,
          setWishListCounterValue,
        }}
      >
        {children}
      </CounterContext.Provider>
    </div>
  );
}
