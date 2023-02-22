import React from 'react';
import {Routes, Route} from 'react-router-dom';
import './index.css';
import Header from "./components/Header";
// import Favourites from "./pages/Favourites";
import Contact from "./pages/Contact";
import Home from "./pages/Home";

function App() {
  

  return (
    <div className="container-fluid movie-app">
      <div className="row">
        <Header />
        {/* <ListHeaders headers="movies" /> */}
      </div>
      <div className="row">
      <Routes>
        <Route path="/" element={<Home />}></Route>

        {/* <Route path="/favourites" element={<Favourites />}></Route> */}

        <Route path="/contact" element={<Contact />}></Route>
      </Routes>


      </div>
    </div>
  );
}

export default App;
