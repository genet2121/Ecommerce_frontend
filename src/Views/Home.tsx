// src/view/Home.tsx
import React from 'react';
import Header from '../Components/Header';
import Hero from '../Components/Hero';
import Categories from '../Components/Categories';
import Products from '../Components/Products';
import Footer from '../Components/NavBars/Footer';
import PromoBar from '../Components/NavBars/PromoBar';
const Home: React.FC = () => {
  return (
    <div>
        <PromoBar />
      {/* <Header /> */}
      {/* <Hero /> */}
      {/* <Categories />
      <Products />
      <Footer /> */}
    </div>
  );
};

export default Home;
;
