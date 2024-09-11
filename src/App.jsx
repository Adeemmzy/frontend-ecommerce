import { BrowserRouter as Router , Routes , Route, Link } from 'react-router-dom';
import Header from './components/Header';
import Banner from './components/Banner';
import Product from './components/Product';
import Footer from './components/Footer';
import FeaturedProduct from './components/FeaturedProduct';
import TopSelling from './components/TopSelling';
import Details from './components/pages/Details';
import Cart from './components/pages/Cart';
import CheckOut from './components/pages/CheckOut';
import Login from './components/pages/Login';
import Signup from './components/pages/Signup';
import About from './components/pages/About';
import { EcomProvider } from './context/EcomContext';
import Alert from './components/Alert';
import { useEffect, useState } from 'react';
import Loaders from './components/Loaders';
import useLocalStorage from './hooks/useLocalStorage';
import { AuthProvider } from './context/AuthContext';

function App() {
  const { getItem } = useLocalStorage("auth-token");
  const token = getItem();
  const authInitialToken = { accessToken: token ?? null };
  const [ loader, setLoader ] = useState(true);

  useEffect(() => {
    const timer = setTimeout(()=> {
      setLoader(false)
    }, 3000)

    return () => timer;
  }, [])
  
  return (
    <> 
    {loader ? <Loaders/> : (
      <AuthProvider defaultState={authInitialToken}>
        <EcomProvider>
          <Router>
            <Header/>
            <Alert />
              <Routes>
                <Route path="/" element={<>
                  <Banner/>
                  <FeaturedProduct />
                  <TopSelling />
                </>}/>
                <Route path="/product" element={<>
                  <Banner/>
                  <Product/>
                </>} />

                
                <Route path="/details/:name" element={<Details/>}/>
                <Route path="/cart" element={<Cart/>}/>
                <Route path="/checkout" element={<CheckOut/>}/>
                <Route path="/about" element={<About/>}/>
                <Route path="/login" element={<Login/>}/>
                <Route path="/signup" element={<Signup/>}/>
              </Routes>
            <Footer/>
            </Router>
          </EcomProvider>
        </AuthProvider>
       )}
      
    </>
  )
}

export default App;









