
import Home from './components/home';
import Navbar from './components/navbar';

import {Route} from 'react-router-dom';
import React from 'react';

function App() {
  return (
    <React.Fragment className="App">
        <Navbar/>
        <Route path={'/'} component={Home} />
    </React.Fragment>
  );
}

export default App;
