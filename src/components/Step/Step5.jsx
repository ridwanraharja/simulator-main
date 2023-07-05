import { useState } from "react";
import { useWizard } from "react-use-wizard";

export default function Step5({
  handleChangeStep,
  handleInputChange,
  handleSubmit,
}) {
  const { nextStep } = useWizard();

  const [active, setActive] = useState(false);

  const handleClick = (data) => {
    setActive(!active);
    handleChangeStep(data);
  };

  const handleInput = (e) => {
    handleInputChange(e);
  };

  const handleResult = () => {
    handleSubmit();
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
            onClick={(e) => {
              nextStep();
              handleClick(6);
              handleInput(e);
            }}
          />
          <label className="button-label" htmlFor="yes-cadunico">
            <p>Sim</p>
          </label>
          <input
            className="hidden no-button"
            id="no-cadunico"
            type="radio"
            name="isCadiunicoOrCras"
            value="0"
            onClick={(e) => {
              nextStep();
              handleClick(6);
              handleInput(e);
            }}
          />
          <label className="button-label" htmlFor="no-cadunico">
            <p>Não</p>
          </label>
        </div>
        <div
          className={!active ? "d-none" : "row text-center my-4"}
          id="wizard-submit"
        >
          <button
            id="btn-submit"
            className="btn btn-primary"
            type="submit"
            onClick={handleResult}
          >
            Veja o resultado!
          </button>
          <input type="submit" id="hidden-submit" style={{ display: "none" }} />
        </div>
      </div>
    </>
  );
}
