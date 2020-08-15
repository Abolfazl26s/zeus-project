import React from 'react';
import MainLayout from './components/LayOut/MainLayOut';
import Service from './components/Service/Service';
import Products from './components/Products/Products';
import Gallery from './components/gallery/Gallery';
import {BrowserRouter} from 'react-router-dom';

function App() {

  return (
    <BrowserRouter>

    <MainLayout>
      <Service/>
      <Products/>
      <Gallery/>
    </MainLayout>
    </BrowserRouter>
  );
}

export default App;
