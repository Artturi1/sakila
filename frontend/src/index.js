import React from 'react'; 
import ReactDOM from 'react-dom';


import { BrowserRouter, Routes, Route } from "react-router-dom";
import Films from "./pages/films";
import Layout from "./pages/layout";
import Actor from "./pages/actors";
import Add from "./pages/search_films";


function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route path="/films" element={<Films />} />
          <Route path="/actors" element={<Actor />} />¨
          <Route path="/search_films" element={<Add />} />
        </Route>
      </Routes>
    </BrowserRouter>
    
  );
 
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);




