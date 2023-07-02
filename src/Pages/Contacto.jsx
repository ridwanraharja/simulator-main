import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

export default function Contacto() {
  return (
    <>
      <Navbar />
      <section id="results" className="d-flex justify-content-center">
        <div
          className="container position-relative"
          style={{ minHeight: "100vh" }}
        >
          <div
            className="row justify-content-center"
            style={{ minHeight: "50px" }}
          >
            <div className="col-md-12 col-lg-10 rounded-2 border shadow p-3 p-md-4 bg-white">
              <h2 className="page-title pb-2 text-center">Fale Conosco</h2>
              <br />
              <p className="lead text-center text-muted">
                <b>
                  Entre em contato conosco. Tire suas dúvidas e mande sua
                  mensagem por um dos meios abaixo:
                </b>
              </p>
              <br />
              <p>
                <b>Email: </b>
                <a
                  className="text-decoration-none"
                  href="mailto:contato@smoura.com.br"
                  target="blank"
                >
                  contato@smoura.com.br
                </a>
              </p>
              <p>
                <b>Facebook: </b>
                <a
                  className="text-decoration-none"
                  href="https://www.facebook.com/smouraadvocacia"
                  target="blank"
                >
                  /smouraadvocacia
                </a>
              </p>
              <p>
                <b>Instagram: </b>
                <a
                  className="text-decoration-none"
                  href="https://www.instagram.com/smouraadvocacia"
                  target="blank"
                >
                  @smoura.adv
                </a>
              </p>
              <p>
                <b>Youtube: </b>
                <a
                  className="text-decoration-none"
                  href="https://www.youtube.com/c/smouraadvocacia"
                  target="blank"
                >
                  smouraadvocacia
                </a>
              </p>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
}
