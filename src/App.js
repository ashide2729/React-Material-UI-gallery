import React from 'react';
import './App.css';
import NavTab from './components/appbar/NavTab';
import Search from './components/search/Search';

import MuiThemeProvider from "material-ui/styles/MuiThemeProvider";

function App() {
  return (
    <MuiThemeProvider>
      <div>
        <NavTab />
        <Search />
      </div>
    </MuiThemeProvider>
  );
}

export default App;
