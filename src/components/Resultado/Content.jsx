// Image
import successImage from "../../assets/success.svg";
import dangerImage from "../../assets/danger.svg";

// Utils
import { buildUriWhatsapp } from "../../utils/resultado";

export default function Content({ data }) {
  let wa = buildUriWhatsapp(data.title, "5521995549567");

  return (
    <section id="results" className="d-flex justify-content-center">
      <div className="container position-relative">
        <div className="row justify-content-center">
          <div className="col-md-12 col-lg-10 rounded-2 border shadow p-3 p-md-4 bg-white">
            <h2 className="page-title-results pb-2">Benefício BPC/LOAS</h2>
            <h3 className="mt-4">Resultado</h3>
            {data.result == "positive" && (
              <>
                <div className="card p-3 w-85 mx-auto">
                  <div className="info-card_icon">
                    <img
                      className="info-card_img-icon"
                      src={successImage}
                      alt="success"
                    />
                  </div>
                  <h4 className="text-success">{data.title}</h4>
                </div>
                <h5 className="pb-2">
                  <b>DICAS: </b>
                  {data.description}
                </h5>
              </>
            )}
            {data.result == "negative" && (
              <>
                <div className="card p-3 w-85 mx-auto">
                  <div id="card-danger" className="info-card_icon">
                    <img
                      className="info-card_img-icon"
                      src={dangerImage}
                      alt="danger"
                    />
                  </div>
                  <h4 className="text-danger">{data.title}</h4>
                </div>
                <h5 className="pb-2">
                  <b>MOTIVOS: </b>
                  {data.description}
                </h5>
              </>
            )}

            <div className="dados-enviados mt-4">
              <h3> Dados analisados</h3>
              <ul className="list-unstyled my-4 mx-auto ">
                <li>
                  Possui 65 anos ou mais na data de hoje:{" "}
                  <b>{data.isOlder == 1 ? "SIM" : "NÃO"}</b>
                </li>
                <li>
                  É uma pessoa com deficiência:{" "}
                  <b>{data.isDisabled == 1 ? "SIM" : "NÃO"}</b>{" "}
                </li>
                <li>
                  Possui algum benefício do Governo, exceto o bolsa familia:{" "}
                  <b>{data.isBeneficiary == 1 ? "SIM" : "NÃO"}</b>
                </li>
                <li>
                  Possui cadastro no CADUNICO ou CRAS:{" "}
                  <b>{data.isCadiunicoOrCras == 1 ? "SIM" : "NÃO"}</b>
                </li>
                <li>
                  Nº de familiares que vivem sob mesmo teto:
                  <b> {data.qtdMembers} pessoa(s)</b>
                </li>
                <li>
                  Renda bruta do grupo familiar:{" "}
                  <b>
                    {" "}
                    R$
                    {data.sumIncomes.toLocaleString("pt-BR", {
                      minimumFractionDigits: 2,
                      maximumFractionDigits: 2,
                    })}
                  </b>
                </li>
                {data.isDisabled ? (
                  <li>
                    Valor gasto com medicamentos ou outros itens necessários por
                    conta da deficiência:{" "}
                    <b>
                      R$
                      {data.spentMedicine.toLocaleString("pt-BR", {
                        minimumFractionDigits: 2,
                        maximumFractionDigits: 2,
                      })}
                    </b>
                  </li>
                ) : (
                  ""
                )}
                <li>
                  Renda familiar per capita:{" "}
                  <b>
                    {" "}
                    R$
                    {Number.isNaN(data.perCapitaIncome)
                      ? "0,00"
                      : data.perCapitaIncome.toLocaleString("pt-BR", {
                          minimumFractionDigits: 2,
                          maximumFractionDigits: 2,
                        })}
                  </b>
                </li>
              </ul>
            </div>
            <br />
            <div
              className="card text-center d-print-none w-90 mx-auto"
              style={{ border: "0.125rem solid rgba(0, 0, 0, 0.125)" }}
            >
              <div className="card-header">
                <h3 className="mb-0">Fale com um especialista</h3>
              </div>
              <div className="card-body">
                <h5 className="card-title">Tire suas dúvidas rapidamente</h5>
                <p className="card-text" style={{ fontSize: "1rem" }}>
                  Ao clicar no botão, você será redirecionado para o seu
                  aplicativo do whatsApp (ou para o whatsApp Web se estiver no
                  computador) para falar com um especialista.
                </p>
                <a
                  href={wa}
                  target="_blank"
                  rel="noreferrer"
                  className="btn text-decoration-none"
                >
                  <div id="whatsappChatButton">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 32 32"
                      className="wa-messenger-svg-whatsapp wh-svg-icon"
                    >
                      <path
                        d=" M19.11 17.205c-.372 0-1.088 1.39-1.518 1.39a.63.63 0 0 1-.315-.1c-.802-.402-1.504-.817-2.163-1.447-.545-.516-1.146-1.29-1.46-1.963a.426.426 0 0 1-.073-.215c0-.33.99-.945.99-1.49 0-.143-.73-2.09-.832-2.335-.143-.372-.214-.487-.6-.487-.187 0-.36-.043-.53-.043-.302 0-.53.115-.746.315-.688.645-1.032 1.318-1.06 2.264v.114c-.015.99.472 1.977 1.017 2.78 1.23 1.82 2.506 3.41 4.554 4.34.616.287 2.035.888 2.722.888.817 0 2.15-.515 2.478-1.318.13-.33.244-.73.244-1.088 0-.058 0-.144-.03-.215-.1-.172-2.434-1.39-2.678-1.39zm-2.908 7.593c-1.747 0-3.48-.53-4.942-1.49L7.793 24.41l1.132-3.337a8.955 8.955 0 0 1-1.72-5.272c0-4.955 4.04-8.995 8.997-8.995S25.2 10.845 25.2 15.8c0 4.958-4.04 8.998-8.998 8.998zm0-19.798c-5.96 0-10.8 4.842-10.8 10.8 0 1.964.53 3.898 1.546 5.574L5 27.176l5.974-1.92a10.807 10.807 0 0 0 16.03-9.455c0-5.958-4.842-10.8-10.802-10.8z"
                        fillRule="evenodd"
                      ></path>
                    </svg>
                    <div
                      id="whatsappChatCTATextPreview"
                      style={{ color: "white", fontWeight: "600" }}
                    >
                      <b>Envie uma mensagem</b>
                    </div>
                  </div>
                </a>
              </div>
              <div className="card-footer text-muted comments">
                <i>
                  Esse simulador não garante ou afirma o direito ao benefício,
                  já que pode haver alguma outra variável que influencie no
                  resultado, sendo apenas um guia para nortear o cidadão sobre a
                  possibilidade de obter o benefício da LOAS.
                </i>
              </div>
            </div>
            <p className="text-muted comments d-none d-print-block">
              <i>
                Esse simulador não garante ou afirma o direito ao benefício, já
                que pode haver alguma outra variável que influencie no
                resultado, sendo apenas um guia para nortear o cidadão sobre a
                possibilidade de obter o benefício da LOAS.
              </i>
            </p>
            <hr />
            <div
              id="shares"
              className="d-grid gap-3 col-12 col-md-4 mx-auto d-print-none"
            >
              <a
                href="https://www.facebook.com/sharer/sharer.php?u=https://meubeneficioloas.com.br"
                target="_blank"
                rel="noreferrer"
                className="btn btn-primary btn-labeled"
                style={{ backgroundColor: "#0d6efd", borderColor: "#0d6efd" }}
                type="button"
              >
                <span className="btn-label">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="25"
                    height="25"
                    fill="currentColor"
                    className="bi bi-facebook"
                    viewBox="0 0 16 16"
                  >
                    <path d="M16 8.049c0-4.446-3.582-8.05-8-8.05C3.58 0-.002 3.603-.002 8.05c0 4.017 2.926 7.347 6.75 7.951v-5.625h-2.03V8.05H6.75V6.275c0-2.017 1.195-3.131 3.022-3.131.876 0 1.791.157 1.791.157v1.98h-1.009c-.993 0-1.303.621-1.303 1.258v1.51h2.218l-.354 2.326H9.25V16c3.824-.604 6.75-3.934 6.75-7.951z"></path>
                  </svg>
                </span>
                <b>Compartilhar</b>
              </a>
              <button
                onClick={() => window.print()}
                className="btn btn-secondary btn-labeled"
                type="button"
              >
                <span className="btn-label">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="25"
                    height="25"
                    fill="currentColor"
                    className="bi bi-printer-fill"
                    viewBox="0 0 16 16"
                  >
                    <path d="M5 1a2 2 0 0 0-2 2v1h10V3a2 2 0 0 0-2-2H5zm6 8H5a1 1 0 0 0-1 1v3a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1v-3a1 1 0 0 0-1-1z" />
                    <path d="M0 7a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v3a2 2 0 0 1-2 2h-1v-2a2 2 0 0 0-2-2H5a2 2 0 0 0-2 2v2H2a2 2 0 0 1-2-2V7zm2.5 1a.5.5 0 1 0 0-1 .5.5 0 0 0 0 1z" />
                  </svg>
                </span>
                <b>Imprimir</b>
              </button>
              <a
                className="btn btn-danger btn-labeled"
                type="button"
                onClick={() => {
                  window.location.reload(true);
                  window.location.href = "/";
                }}
              >
                <span className="btn-label">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="25"
                    height="25"
                    fill="currentColor"
                    className="bi bi-reply-fill"
                    viewBox="0 0 16 16"
                  >
                    <path d="M5.921 11.9 1.353 8.62a.719.719 0 0 1 0-1.238L5.921 4.1A.716.716 0 0 1 7 4.719V6c1.5 0 6 0 7 8-2.5-4.5-7-4-7-4v1.281c0 .56-.606.898-1.079.62z" />
                  </svg>
                </span>
                <b>Voltar</b>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
