import { useState } from "react";
import { useWizard } from "react-use-wizard";

export default function Step4({ handleChangeStep, handleInputChange }) {
  const { nextStep } = useWizard();
  const [countInput, setCountInput] = useState(1);
  const [tableData, setTableData] = useState([]);

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

  const handleInput = (e) => {
    handleInputChange(e);
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
                  <select
                    name="itemMembro"
                    className="form-select"
                    disabled
                    onChange={(e) => handleInput(e)}
                  >
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
                      name="incomes"
                      onChange={(e) => handleInput(e)}
                    />
                  </div>
                </td>
              </tr>
              {tableData.map((row) => (
                <tr className="txtMult" key={row.id}>
                  <td>
                    <select
                      name="itemMembro"
                      className="form-select"
                      required
                      onChange={(e) => handleInput(e)}
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
                        name="incomes"
                        onChange={(e) => handleInput(e)}
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
}
