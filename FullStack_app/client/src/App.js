import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Footer } from './elementit/Footer';
import { Nav } from './elementit/Nav';
import { Koti } from './Sivut/Koti';
import { CV } from './Sivut/CV';
import { Yhteystiedot } from './Sivut/Yhteystiedot';
import { NotFound} from './Sivut/NotFound'
import {Register} from './Sivut/Register'
import {LogIn} from './Sivut/LogIn'
import {Projects} from './Sivut/Projects'
import './index.css';
import { disableReactDevTools } from '@fvilers/disable-react-devtools';

if(process.env.NODE_ENV === 'production') disableReactDevTools()

function App() {

  
  return (
    <Router basename='/'> 
        <Nav/>
        <Routes>
          <Route path='/' element={<Koti />} />
          <Route path='/Yhteystiedot' element={<Yhteystiedot />} />
          <Route path='/CV' element={<CV />} />
          <Route path='/Register' element={<Register/>} />
          <Route path='/LogIn' element={<LogIn/>} />
          <Route path='/Projects' element={<Projects/>} />
          <Route path='/*' element={<NotFound />} />
        </Routes>
        <Footer />
    </Router>
  );
}

export default App;
