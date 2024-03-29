import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.scss';
import Home from './pages/home/Home';
import Login from './pages/login/Login';
import List from './pages/list/List';
import Single from './pages/single/Single';
import New from './pages/new/New';
import { productInputs, userInputs } from './FormSource';
import { useContext } from 'react';
import { DarkModeContext } from './context/darkModeReducer';
import PageNotFound from './components/pageNotFound/PageNotFound';
import Products from './pages/products/Products';
import Orders from './pages/orders/Orders';
import './style/dark.scss';



function App() {

  const { darkMode } = useContext(DarkModeContext)
  // const [dark, setDark] = useState(false)
  return (

    <div className={darkMode ? 'app dark' : 'app'}>
      <BrowserRouter>
        <Routes>
          <Route>

            <Route index element={<Home />} />
            <Route path='login' element={<Login />} />
            <Route path='users'>
              <Route index element={<List />} />
              <Route path=':userId' element={<Single />} />
              <Route path='new' element={<New inputs={userInputs} title="Add New User" />} />
            </Route>
            <Route path='products'>
              <Route index element={<Products />} />
              <Route path=':productId' element={<Single />} />
              <Route path='new' element={<New inputs={productInputs} title="Add New Products" />} />
            </Route>

            <Route path='orders' element={<Orders />} />

            <Route path='*' element={<PageNotFound />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
