import './App.css';
import Mockman from 'mockman-js';
import {Route, Routes} from 'react-router-dom';
import {ToastContainer} from 'react-toastify';
import {Home} from './pages/Home/Home';
import {routeName} from './App.routes';
import {Products} from './pages/Product/Products';
import {PageWrapper} from './Components/PageWrapper';
import {Cart} from './pages/Cart/Cart';
import {WishList} from './pages/WishList/WishList';
import {Login} from './pages/Login';
import {RequiresAuth} from './Components/RequiresAuth';
import {SignIn} from './pages/SignIn';
import {ProductDetail} from './pages/Product/ProductDetail';

import 'react-toastify/dist/ReactToastify.css';

function App() {
  return (
    <div className="App">
      <PageWrapper>
        <Routes>
          <Route path={routeName.HOME} element={<Home />} />
          <Route path="/mockman" element={<Mockman />} />
          <Route path={routeName.PRODUCTS} element={<Products />} />
          <Route path="/products/:id" element={<ProductDetail />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signin" element={<SignIn />} />

          <Route
            path={routeName.CART}
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
      <ToastContainer />
    </div>
  );
}

export default App;
