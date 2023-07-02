export default function Modal() {
  return (
    <>
      <div
        className="modal fade"
        id="incomingModal"
        tabIndex="-1"
        aria-labelledby="incomingModalLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title fw-bold" id="incomingModalLabel">
                Renda
              </h5>
              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>
            </div>
            <div className="modal-body">
              <b>Deixe o valor em 0(zero)</b> se a renda do familiar for
              proveniente de:
              <ul className="mb-0">
                <li>
                  Renda de aposentadoria de idoso ou pessoa com deficiência
                  menor/igual a 1 sal. min.{" "}
                </li>
                <li>Renda de estágio ou menor aprendiz. </li>
                <li>Renda de outro benefício LOAS.</li>
              </ul>
            </div>
            <div className="modal-footer">
              <button
                type="button"
                className="btn btn-danger"
                data-bs-dismiss="modal"
              >
                Fechar
              </button>
            </div>
          </div>
        </div>
      </div>
      {/* <!-- Cookie Banner --> */}
      <div
        className="animate__animated animate__fadeIn animate__delay-1s cookie-banner text-center mb-0 py-2 py-md-3"
        role="alert"
      >
        &#x1F36A; Nosso site usa cookies para melhorar o desempenho e aprimorar
        a sua experiência de navegação.
        <a
          href="https://policies.google.com/privacy?hl=pt-BR"
          target="blank"
          className="fw-bold"
        >
          {" "}
          Leia mais
        </a>
        <button
          type="button"
          className="btn btn-cyan btn-sm ml-3 ms-2"
          onClick="window.n_hideCookieBanner()"
        >
          <b>Entendi e Fechar</b>
        </button>
      </div>
    </>
  );
}
