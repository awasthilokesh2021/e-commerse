
import React, { useState } from "react";
import Header from './components/layout/Header'
import Footer from './components/layout/Footer'
import { BrowserRouter as Router ,Routes, Route  } from "react-router-dom";
import Home from './components/Home/Home';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Provider } from 'react-redux'
import store from './components/store/store';
import Carddetails from './components/pages/Carddetails';
import Cart from './components/pages/Cart';



const App = () => {
  const [searchResults, setSearchResults] = useState([]);
  return (
    <>
     <Provider store={store}>
    <Router>
      <Header setSearchResults={setSearchResults} />
       <Routes>
        <Route>
           <Route path="/" element={<Home/>}/>
           <Route path='/Cart' element={<Cart/>}></Route> 
           <Route path='/Carddetails/:id' element={<Carddetails/>}></Route> 
        </Route>
       </Routes>
       <Footer />
    </Router>
    </Provider>
    </>
  )
}

export default App