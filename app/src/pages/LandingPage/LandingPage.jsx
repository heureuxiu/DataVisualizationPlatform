import React from 'react';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import Section1 from './Section1';
import Section2 from './Section2';
import Section3 from './Section3';
import Section4 from './Section4';

const LandingPage = () => {
  return (
    <div>
      <Header />
      <main>
        <Section1 />
        <Section2 />
        <Section3 />
        <Section4 />
      </main>
      <Footer />
    </div>
  );
};

export default LandingPage;
