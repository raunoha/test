import React from "react";
import { Route, Routes } from "react-router-dom";
import Table from "./pages/Table";
import Detail from "./pages/Detail"


function App() {


  return (
    <div className="box" >
     <Routes>
      <Route path="/" element={ <Table />} />
      <Route path="/Detail/:orderNo" element={<Detail />} />
      </Routes>
    </div>
  );
}

export default App;


