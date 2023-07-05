import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

// Pages
import Home from "./Pages/Home";
import Resultado from "./Pages/Resultado";
import Contacto from "./Pages/Contacto";

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
