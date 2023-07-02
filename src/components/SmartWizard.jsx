import { useState } from "react";
import { Wizard, useWizard } from "react-use-wizard";

export default function SmartWizard() {
  const [step, setStep] = useState(1);
  const [formValues, setFormValues] = useState({
    isOlder: null,
    isDisabled: null,
    isBeneficiary: null,
    isCadiunicoOrCras: null,
    spentMedicine: null,
    qtdMembers: null,
    incomes: null,
    sumIncomes: null,
    perCapitaIncome: null,
    // add other form fields as needed
  });
  const handleChangeStep = (newStep) => {
    setStep(newStep);
  };
  return (
    <div id="smartwizard" className="sw sw-theme-dots sw-justified">
      <div className="title">
        <h2> SIMULADOR BPC-LOAS</h2>
      </div>
      <ul className="d-none d-lg-flex nav">
        <li className="nav-item">
          <a
            className={
              step === 1
                ? "nav-link inactive active"
                : step > 1
                ? "nav-link inactive done"
                : step < 1
                ? "nav-link inactive"
                : ""
            }
          ></a>
        </li>
        <li className="nav-item">
          <a
            className={
              step === 2
                ? "nav-link inactive active"
                : step > 2
                ? "nav-link inactive done"
                : step < 2
                ? "nav-link inactive"
                : ""
            }
          ></a>
        </li>
        <li className="nav-item">
          <a
            className={
              step === 3
                ? "nav-link inactive active"
                : step > 3
                ? "nav-link inactive done"
                : step < 3
                ? "nav-link inactive"
                : ""
            }
            href="#step-3"
          ></a>
        </li>
        <li className="nav-item">
          <a
            className={
              step === 4
                ? "nav-link inactive active"
                : step > 4
                ? "nav-link inactive done"
                : step < 4
                ? "nav-link inactive"
                : ""
            }
          ></a>
        </li>
        <li className="nav-item">
          <a
            className={
              step === 5
                ? "nav-link inactive active"
                : step > 5
                ? "nav-link inactive done"
                : step < 5
                ? "nav-link inactive"
                : ""
            }
          ></a>
        </li>
      </ul>
      <div className="d-lg-none progress">
        <div
          className="progress-bar"
          role="progressbar"
          style={
            step == 1
              ? { width: "20%" }
              : step == 2
              ? { width: "40%" }
              : step == 3
              ? { width: "60%" }
              : step == 4
              ? { width: "80%" }
              : step == 5
              ? { width: "100%" }
              : {}
          }
          aria-valuenow="1"
          aria-valuemin="0"
          aria-valuemax="5"
        >
          <div className="progress-bar-text">
            <span id="progress-percent">
              {step == 1
                ? "20%"
                : step == 2
                ? "40%"
                : step == 3
                ? "60%"
                : step == 4
                ? "80%"
                : step == 5
                ? "100%"
                : ""}
            </span>{" "}
            Completo
          </div>
        </div>
      </div>
      <Wizard>
        <Step1 handleChangeStep={handleChangeStep} />
        <Step2 handleChangeStep={handleChangeStep} />
        <Step3 handleChangeStep={handleChangeStep} />
        <Step4 handleChangeStep={handleChangeStep} />
        <Step5 handleChangeStep={handleChangeStep} />
      </Wizard>
    </div>
  );
}

const Step1 = ({ handleChangeStep }) => {
  const { nextStep } = useWizard();
  const handleClick = (data) => {
    handleChangeStep(data);
  };

  return (
    <>
      <div className="tab-pane" role="tabpanel" aria-labelledby="step-1">
        <h4>1. Possui 65 anos de idade ou mais na data de hoje?</h4>
        <div className="button-wrap">
          <input
            className="hidden yes-button"
            id="yes-older"
            type="radio"
            name="isOlder"
            value="1"
          />
          <label
            className="button-label"
            htmlFor="yes-older"
            onClick={() => {
              nextStep();
              handleClick(2);
            }}
          >
            <p>Sim</p>
          </label>
          <input
            className="hidden no-button"
            id="no-older"
            type="radio"
            name="isOlder"
            value="0"
          />
          <label
            className="button-label"
            htmlFor="no-older"
            onClick={() => {
              nextStep();
              handleClick(2);
            }}
          >
            <p>Não</p>
          </label>
        </div>
      </div>
    </>
  );
};

const Step2 = ({ handleChangeStep }) => {
  const [active, setActive] = useState(false);
  const { nextStep } = useWizard();
  const handleClick = (data) => {
    setActive(!active);
    handleChangeStep(data);
  };

  return (
    <>
      <div className="tab-pane" role="tabpanel" aria-labelledby="step-2">
        <h4>2. Você é uma pessoa com deficiência (independente da idade)?</h4>
        <div className="button-wrap">
          <input
            className="hidden yes-button"
            id="yes-disabled"
            type="radio"
            name="isDisabled"
            value="1"
          />
          <label
            className="button-label"
            htmlFor="yes-disabled"
            onClick={() => {
              handleClick(2);
            }}
          >
            <p>Sim</p>
          </label>
          <input
            className="hidden no-button"
            id="no-disabled"
            type="radio"
            name="isDisabled"
            value="0"
          />
          <label
            className="button-label"
            htmlFor="no-disabled"
            onClick={() => {
              nextStep();
              handleClick(3);
            }}
          >
            <p>Não</p>
          </label>
        </div>
        <div
          className={
            !active
              ? "d-none"
              : "row text-center animate__animated animate__fadeInUp"
          }
          id="qmedicine"
        >
          <h5 className="fw-bold">
            E quanto você gasta por mês com medicamentos e outros itens
            necessários por conta da deficiência?
          </h5>
          <div className="input-group mb-3 mt-3">
            <span className="input-group-text" id="spentMedicine">
              R$
            </span>
            <input
              type="text"
              className="form-control money"
              placeholder="0,00"
              name="spentMedicine"
            />
          </div>
        </div>
        <div
          id="btn-next-q2"
          className={
            !active
              ? "d-none"
              : "toolbar toolbar-bottom animate__animated animate__fadeInUp"
          }
          role="toolbar"
          style={{ textAlign: "right" }}
        >
          <button
            className="btn sw-btn-next"
            type="button"
            onClick={() => {
              nextStep();
              handleClick(3);
            }}
          >
            Próximo
          </button>
        </div>
      </div>
    </>
  );
};

const Step3 = ({ handleChangeStep }) => {
  const { nextStep } = useWizard();
  const handleClick = (data) => {
    handleChangeStep(data);
  };

  return (
    <>
      <div
        id="step-3"
        className="tab-pane"
        role="tabpanel"
        aria-labelledby="step-3"
      >
        <h4>
          3. Você recebe algum benefício do Governo que não seja o bolsa família
          ou seguro desemprego?
        </h4>
        <div className="button-wrap">
          <input
            className="hidden yes-button"
            id="yes-beneficiary"
            type="radio"
            name="isBeneficiary"
            value="1"
          />
          <label
            className="button-label"
            htmlFor="yes-beneficiary"
            onClick={() => {
              nextStep();
              handleClick(4);
            }}
          >
            <p>Sim</p>
          </label>
          <input
            className="hidden no-button"
            id="no-beneficiary"
            type="radio"
            name="isBeneficiary"
            value="0"
          />
          <label
            className="button-label"
            htmlFor="no-beneficiary"
            onClick={() => {
              nextStep();
              handleClick(4);
            }}
          >
            <p>Não</p>
          </label>
        </div>
      </div>
    </>
  );
};

const Step4 = ({ handleChangeStep }) => {
  const [countInput, setCountInput] = useState(1);
  const [tableData, setTableData] = useState([
    // ... your initial data here ...
  ]);
  const { nextStep } = useWizard();
  const handleClick = (data) => {
    handleChangeStep(data);
  };
  const incrementInput = () => {
    setCountInput(countInput + 1);
  };
  const decrementInput = () => {
    if (countInput == 1) {
      return;
    }
    setCountInput(countInput - 1);
  };

  const handleAddRow = () => {
    const newRow = { id: tableData.length };
    setTableData([...tableData, newRow]);
  };

  const handleRemoveRow = () => {
    if (tableData.length > 0) {
      setTableData(tableData.slice(0, -1));
    }
  };

  return (
    <>
      <div
        id="step-4"
        className="tab-pane"
        role="tabpanel"
        aria-labelledby="step-4"
      >
        <h4>
          4. Quantos <u>familiares</u> moram debaixo do mesmo teto que você?{" "}
        </h4>
        <small>
          {" "}
          - Pela lei nº 12.435, a familia é composta do requerente, o cônjuge ou
          companheiro, os pais e, na ausência de um deles, a madrasta ou o
          padrasto, os irmãos solteiros, os filhos e enteados solteiros e os
          menores tutelados.{" "}
          <mark>
            Qualquer pessoa em grau de parentesco diferente dessas opções deve
            ser desconsiderada
          </mark>
          .
        </small>
        <div id="family-group" className="input-group mt-3 mb-5">
          <button
            className="btn btn-danger minus"
            type="button"
            onClick={() => {
              decrementInput();
              handleRemoveRow();
            }}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="15"
              height="15"
              viewBox="0 0 24 24"
              fill="#ffffff"
            >
              <path d="M0 10h24v4h-24z" />
            </svg>
          </button>
          <input
            type="text"
            name="qtdMembers"
            className="form-control text-center input-number count"
            value={countInput}
            readOnly
          />
          <button
            className="btn btn-success plus"
            type="button"
            onClick={() => {
              incrementInput();
              handleAddRow();
            }}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="15"
              height="15"
              viewBox="0 0 24 24"
              fill="#ffffff"
            >
              <path d="M24 10h-10v-10h-4v10h-10v4h10v10h4v-10h10z" />
            </svg>
          </button>
        </div>
        <div
          className="text-center animate__animated animate__fadeInUp animate__delay-1s"
          id="family-row"
        >
          <h4>Quem são eles? E quanto é a renda de cada um?</h4>
          <table className="table table-bordered" id="family-table">
            <thead>
              <tr>
                <th className="w-50">Quem</th>
                <th className="w-50">
                  Renda Mensal
                  <button
                    className="info"
                    data-bs-toggle="modal"
                    data-bs-target="#incomingModal"
                    tabIndex="-1"
                    aria-expanded="true"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="bi bi-info-circle-fill"
                      viewBox="0 0 512 512"
                    >
                      <path
                        fill="#62b1f6"
                        d="M256 8C119.043 8 8 119.083 8 256c0 136.997 111.043 248 248 248s248-111.003 248-248C504 119.083 392.957 8 256 8zm0 110c23.196 0 42 18.804 42 42s-18.804 42-42 42-42-18.804-42-42 18.804-42 42-42zm56 254c0 6.627-5.373 12-12 12h-88c-6.627 0-12-5.373-12-12v-24c0-6.627 5.373-12 12-12h12v-64h-12c-6.627 0-12-5.373-12-12v-24c0-6.627 5.373-12 12-12h64c6.627 0 12 5.373 12 12v100h12c6.627 0 12 5.373 12 12v24z"
                      ></path>
                    </svg>
                  </button>
                </th>
              </tr>
            </thead>
            <tbody>
              <tr className="txtMult">
                <td>
                  <select name="item_membro[]" className="form-select" disabled>
                    <option value="1">Eu</option>
                  </select>
                </td>
                <td>
                  <div className="input-group">
                    <span className="input-group-text">R$</span>
                    <input
                      type="text"
                      className="form-control money"
                      placeholder="0,00"
                      name="incomes[]"
                    />
                  </div>
                </td>
              </tr>
              {tableData.map((row) => (
                <tr className="txtMult" key={row.id}>
                  <td>
                    <select
                      name="item_membro[]"
                      className="form-select"
                      required
                    >
                      <option disabled selected value="">
                        Selecione um
                      </option>
                      <option value="2">Cônjuge/Companheiro(a)</option>
                      <option value="2">Pai</option>
                      <option value="2">Mãe</option>
                      <option value="2">Padastro</option>
                      <option value="2">Madastra</option>
                      <option value="2">Irmã(o) solteira(o)</option>
                      <option value="2">Filho(a) solteiro(a)</option>
                      <option value="2">Enteado(a) solteiro(a)</option>
                      <option value="2">Menor sob tutela</option>
                    </select>
                  </td>
                  <td>
                    <div className="input-group">
                      <span className="input-group-text">R$</span>
                      <input
                        type="text"
                        className="form-control money"
                        placeholder="0,00"
                        name="incomes[]"
                      />
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <div
          className="toolbar toolbar-bottom animate__animated animate__fadeInUp animate__delay-2s"
          role="toolbar"
          style={{ textAlign: "right" }}
        >
          <button
            id="btn-next-q4"
            className="btn"
            type="button"
            onClick={() => {
              nextStep();
              handleClick(5);
            }}
          >
            Próximo
          </button>
        </div>
      </div>
    </>
  );
};

const Step5 = ({ handleChangeStep }) => {
  const [active, setActive] = useState(false);
  const { nextStep } = useWizard();
  const handleClick = (data) => {
    setActive(!active);
    handleChangeStep(data);
  };

  return (
    <>
      <div
        id="step-5"
        className="tab-pane"
        role="tabpanel"
        aria-labelledby="step-5"
      >
        <h4>5. Você já se cadastrou no CADUNICO ou CRAS de seu Município?</h4>
        <div className="button-wrap">
          <input
            className="hidden yes-button"
            id="yes-cadunico"
            type="radio"
            name="isCadiunicoOrCras"
            value="1"
          />
          <label
            className="button-label"
            htmlFor="yes-cadunico"
            onClick={() => {
              nextStep();
              handleClick(5);
            }}
          >
            <p>Sim</p>
          </label>
          <input
            className="hidden no-button"
            id="no-cadunico"
            type="radio"
            name="isCadiunicoOrCras"
            value="0"
          />
          <label
            className="button-label"
            htmlFor="no-cadunico"
            onClick={() => {
              nextStep();
              handleClick(5);
            }}
          >
            <p>Não</p>
          </label>
        </div>
        <div
          className={!active ? "d-none" : "row text-center my-4"}
          id="wizard-submit"
        >
          <button id="btn-submit" className="btn btn-primary" type="submit">
            Veja o resultado!
          </button>
          <input type="submit" id="hidden-submit" style={{ display: "none" }} />
        </div>
      </div>
    </>
  );
};
