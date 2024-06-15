import {Route, Routes} from "react-router-dom";
import * as React from "react";
import { HashRouter } from "react-router-dom";
import Main from "./paginas/Main";

function App() {
  return(
    <HashRouter>
      <Routes>
        <Route exact path="/" element={<Main/>}/>
      </Routes>
    </HashRouter>
  )
}

export default App;