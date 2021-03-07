import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import Layout from './components/Layout/Layout';

import ScrollTop from './components/Layout/ScrollTop';

 
function App() {
  return (
      <Router  >
        <ScrollTop />
        <Layout />
      </Router>
  );
}

export default App;
