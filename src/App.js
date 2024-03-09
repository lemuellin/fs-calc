import React from 'react';
import Header from './components/Header';
import Content from './components/Content';
import Contact from './components/Contact'

function App() {

  return (
    <div id="page-container">
      <Header/>
      <div id = "content-wrap">
        <Content/>
      </div>
      <footer id="footer">
        <Contact/>
      </footer>
    </div>
  );
}

export default App;