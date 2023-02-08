import React from 'react';
import './App.css';
import Header from './Header';
import RecommendedVideo from './RecommendedVideo';
import Sidebar from './Sidebar';
import Searchpage from './Searchpage';
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Header/>
        <Routes>
          <Route path="/"  element={
          <div className="app__page">
         <Sidebar/>
         <RecommendedVideo/>
         </div>}/>
           
          <Route path="/search/:searchTerm" element={
            <div className="app__page">
            <Sidebar/>
            <Searchpage/>
            </div>
          }/>

        </Routes>
      </BrowserRouter>


       {/* <h1>Hello youtube! Let's build  a Youtube Clone</h1> */}
      {/* <Header/> */}
      
      {/* Header */}
      {/* Sidebar */}
      {/* RecommendedVideo */}
    </div>
  );
}

export default App;
