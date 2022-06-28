import React from "react";
//import TableComponent from "./components/TableComponent";
import { Routes, Route } from "react-router-dom"
import Home from "./pages/home"
import Eliseo from "./pages/eliseo"
import Hayden from "./pages/hayden"
import Nikita from "./pages/nikita"
import Lew from "./pages/lew"
import Jayne from "./pages/jayne"
function App() {
  return (
    <div className="App">
      <div className="container">
      <Routes>
        <Route path="/" element={ <Home/> } />
        <Route path="lew" element={ <Lew/> } />
        <Route path="eliseo" element={ <Eliseo/> } />
        <Route path="nikita" element={ <Nikita/> } />
        <Route path="jayne" element={ <Jayne/> } />
        <Route path="hayden" element={ <Hayden/> } />
      </Routes>
      </div>
    </div>
  );
}

export default App;
