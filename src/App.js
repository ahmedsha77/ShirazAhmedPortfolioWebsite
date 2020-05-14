import React from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import './App.css';
import Header from './site/Header'
import Footer from './site/Footer'
import Navybar from './site/Navbar';
import Formed from './site/Form';


const App = () => {
  return (
    <div>
      <Header />
      <Formed />
      {/* <Footer /> */}
    </div>
  );
}
export default App;
