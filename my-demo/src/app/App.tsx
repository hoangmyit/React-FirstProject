import * as React from 'react';
import './App.scss';
import Footer from './components/footer/footer';
import NavBar from './components/nav-bar/nav-bar';
import PageWrapper from './components/page-wrapper/page-wrapper';
import HomePage from './pages/home-page/home-page';

function App() {
  return (
    <div>
      <NavBar />
      <PageWrapper>
        <HomePage />
      </PageWrapper>
      <Footer />
    </div>
  );
}

export default App;
