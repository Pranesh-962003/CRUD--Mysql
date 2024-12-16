import React from "react";
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import Home from "./Home";
import 'bootstrap/dist/css/bootstrap.min.css'
import Create from "./Create";
import Read from "./Read";
import Edit from "./Edit";
function App() {
  return (
    <div className="App">
      <BrowserRouter>
          <Routes>
              <Route path="/" element={<Home />}/>
              <Route path="/create" element={<Create/>}/>
              <Route path="/read/:id" element={<Read />}/>
              <Route path="/edit/:id" element={<Edit/>}/>
          </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;