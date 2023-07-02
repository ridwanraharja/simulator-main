import Footer from "../components/Footer";
import Content from "../components/Home/Content";
import Hero from "../components/Home/Hero";
import Modal from "../components/Modal";
import Navbar from "../components/Navbar";

export default function Home() {
  return (
    <>
      <Navbar />
      <Hero />
      <Content />
      <Footer />
      {/* Modal Incoming info */}
      <Modal />
    </>
  );
}
