import './App.css'
import React from "react";
import {useEffect} from 'react';
import Header from './components/layouts/Headers';
import Footer from './components/layouts/Footer';
import Home from './components/Home';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import {HelmetProvider} from 'react-helmet-async';
import {ToastContainer} from 'react-toastify';
import ProductDetail from './components/product/ProductDetail';
import ProductSearch from './components/product/ProductSearch';
import Login from './components/user/Login'
import Register from './components/user/Register';
import { loadUser } from './actions/userAction';
import store from './store';
import Profile from './components/user/Profile'
import ProtectedRouter from './components/route/ProtectedRouter';

function App() {

  useEffect(()=>{

    store.dispatch(loadUser)

  })


  return (

    <Router>
      <div className="App">
        <HelmetProvider>
        <Header />
        <ToastContainer theme='dark'/>
        <Routes>
          <Route  path='/' element={<Home/>}/>
          
          <Route path='/product/:id' element={<ProductDetail/>}/>

          <Route path='/search/:keyword' element={<ProductSearch/>}/>

          <Route path='/login' element={< Login/>}/>

          <Route path='/register' element={<Register/>}/>

          <Route  path='/profile' element={ <ProtectedRouter><Profile/></ProtectedRouter>}/>

        </Routes>
        <Footer />

      </HelmetProvider>

      </div>
    </Router>
  );
}

export default App;