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
import {Login} from './pages/Login/Login';
import {RequiresAuth} from './Components/RequiresAuth';
import {SignIn} from './pages/SignIn/SignIn';
import {ProductDetail} from './pages/ProductDetails/ProductDetail';
import 'react-toastify/dist/ReactToastify.css';
import {Address} from './pages/Address/Address';
import {NotFound} from './pages/NotFound/NotFound';

function App() {
  return (
    <div className="App">
      <PageWrapper>
        <Routes>
          <Route path={routeName.HOME} element={<Home />} />
          <Route path={routeName.Mockman} element={<Mockman />} />
          <Route path={routeName.PRODUCTS} element={<Products />} />
          <Route path={routeName.PRODUCT_DETAIL.template} element={<ProductDetail />} />
          <Route path={routeName.LOGIN} element={<Login />} />
          <Route path={routeName.SIGNUP} element={<SignIn />} />

          <Route
            path={routeName.CART}
            element={
              <RequiresAuth>
                <Cart />
              </RequiresAuth>
            }
          />
          <Route
            path={routeName.WISHLIST}
            element={
              <RequiresAuth>
                <WishList />
              </RequiresAuth>
            }
          />

          <Route
            path={routeName.ADDRESS}
            element={
              <RequiresAuth>
                <Address />
              </RequiresAuth>
            }
          />
          <Route path="*" Component={NotFound} />
        </Routes>
      </PageWrapper>
      <ToastContainer
        position="bottom-right"
        autoClose={2000}
        hideProgressBar
        newestOnTop
        closeOnClick
        rtl
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
      />
    </div>
  );
}

export default App;
