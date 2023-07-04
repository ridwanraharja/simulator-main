import { useState } from "react";
import "../../custom.css";
import SmartWizard from "../SmartWizard";
export default function Hero() {
  const [active, setActive] = useState(false);

  const handleActive = () => {
    setActive(!active);
  };

  return (
    <section
      id="hero"
      className="d-flex justify-content-center align-items-center"
    >
      <div className="container position-relative">
        <div className="row justify-content-center">
          <div
            id="main-hero"
            className={!active ? "col-12 col-lg-10 text-start" : "d-none"}
          >
            <h1>Olá! Quer seu benefício LOAS de um salário mínimo?</h1>
            <h2 className="mt-4">
              Responda algumas perguntas e veja se tem direito a esse benefício
              antes de fazer seu requerimento.
            </h2>
            <a
              id="start-simulator"
              // href="javascript:void(0);"
              // href="#"
              onClick={handleActive}
              className="btn btn-primary btn-lg"
            >
              Vamos começar?
            </a>
          </div>
          <div
            id="main-simulator"
            className={
              active
                ? "col-12 col-lg-10 animate__animated animate__fadeInLeft"
                : "d-none"
            }
          >
            <SmartWizard />
          </div>
        </div>
      </div>
    </section>
  );
}
