import React from 'react';
import HomeContainer from './pages/home/home-container';
import LayoutContainer from './shared/layout/layout-container';

function App() {
  return (
    <LayoutContainer title='Learning Web - DIKPAR UPI'>
      <HomeContainer />
    </LayoutContainer>
  );
}

export default App;
