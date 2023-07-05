import Navbar from "../components/Navbar";
import Hero from "../components/Home/Hero";
import Content from "../components/Home/Content";
import Footer from "../components/Footer";
import Modal from "../components/Modal";

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
