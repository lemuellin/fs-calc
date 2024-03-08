import React from 'react';
import Header from './components/Header';
import Content from './components/Content';
import Contact from './components/Contact'

const countapi = require('countapi-js');

function App() {
  countapi.visits().then((result) => {
    console.log(result.value);
  });
  
  return (
    <div id="page-container">
      <Header/>
      <div id = "content-wrap">
        <Content/>
      </div>
      <div id="visits">...</div>
      <footer id="footer">
        <Contact/>
      </footer>
    </div>
  );
}

export default App;