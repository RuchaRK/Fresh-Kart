import './App.css';
import Mockman from 'mockman-js';
import {Route, Routes} from 'react-router-dom';
import {Home} from './pages/Home/Home';
import {routeName} from './App.routes';
import Products from './pages/Products';
import {PageWrapper} from './Components/PageWrapper';
import {Cart} from './pages/Cart';
import {WishList} from './pages/WishList';
import {Login} from './pages/Login';
import {RequiresAuth} from './Components/RequiresAuth';
import {SignIn} from './pages/SignIn';

function App() {
  return (
    <div className="App">
      <PageWrapper>
        <Routes>
          <Route path={routeName.HOME} element={<Home />} />
          <Route path="/mockman" element={<Mockman />} />
          <Route path={routeName.PRODUCTS} element={<Products />} />
          <Route path="/products/:category" element={<Products />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signin" element={<SignIn />} />

          <Route
            path="/cart"
            element={
              <RequiresAuth>
                <Cart />
              </RequiresAuth>
            }
          />
          <Route
            path="/wishlist"
            element={
              <RequiresAuth>
                <WishList />
              </RequiresAuth>
            }
          />
        </Routes>
      </PageWrapper>
    </div>
  );
}

export default App;
