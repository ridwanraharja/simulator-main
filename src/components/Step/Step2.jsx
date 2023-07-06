import { useState } from "react";
import { useWizard } from "react-use-wizard";

export default function Step2({ handleChangeStep, handleInputChange }) {
  const { nextStep } = useWizard();
  const [input, setInput] = useState("");
  const [active, setActive] = useState(false);

  const handleClick = (data) => {
    setActive(!active);
    handleChangeStep(data);
  };

  const handleInput = (e) => {
    if (e.target.name == "isDisabled") {
      return handleInputChange(e);
    }
    const value = e.target.value;
    const regex = /^[0-9.]*$/; // input just for number and .
    if (regex.test(value)) {
      setInput(value);
    }
    handleInputChange(e);
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
            onClick={(e) => {
              handleClick(2);
              handleInput(e);
            }}
          />
          <label className="button-label" htmlFor="yes-disabled">
            <p>Sim</p>
          </label>
          <input
            className="hidden no-button"
            id="no-disabled"
            type="radio"
            name="isDisabled"
            value="0"
            onClick={(e) => {
              nextStep();
              handleClick(3);
              handleInput(e);
            }}
          />
          <label className="button-label" htmlFor="no-disabled">
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
              placeholder="0.00"
              value={input}
              name="spentMedicine"
              onChange={(e) => {
                handleInput(e);
              }}
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
}
