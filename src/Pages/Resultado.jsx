import Footer from "../components/Footer";
import Content from "../components/Resultado/Content";
import Navbar from "../components/Navbar";
import { useLocation } from "react-router-dom";

export default function Resultado() {
  const location = useLocation();
  const { data } = location.state;
  return (
    <div>
      <Navbar />
      <Content data={data} />
      <Footer />
    </div>
  );
}
