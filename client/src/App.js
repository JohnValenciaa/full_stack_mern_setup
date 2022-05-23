import './App.css';
import React from 'react';
import {Link,Routes,Route, Navigate} from "react-router-dom";
import Main from './views/Main';
import Detail from './views/Detail';
import Update from './views/Update';
    
function App() {
  return (
      <div className="App">
        <h1>Welcome!</h1>
          <Link to="/products">Home</Link>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
      <hr />
        <Routes>
          <Route path="/products" element={<Main/>}/>
          <Route path="/product/:id" element={<Detail/>}/>
          <Route path="/products/create" element={<Add/>}/>
          <Route path="/products/update/:id" element={<Update/>}/>
        </Routes>
      </div>
  );
}
    
export default App;

