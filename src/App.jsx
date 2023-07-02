// Component
import Home from "./Pages/Home";

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Contacto from "./Pages/Contacto";

function App() {
  return (
    <Router>
      <div id="page-top">
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route exact path="/contacto" element={<Contacto />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
