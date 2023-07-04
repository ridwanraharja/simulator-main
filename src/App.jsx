// Component
import Home from "./Pages/Home";

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Contacto from "./Pages/Contacto";
import Resultado from "./Pages/Resultado";

function App() {
  return (
    <Router>
      <div id="page-top">
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route path="/contacto" element={<Contacto />} />
          <Route path="/resultado" element={<Resultado />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
