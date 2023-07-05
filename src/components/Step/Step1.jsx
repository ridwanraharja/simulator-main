import { useWizard } from "react-use-wizard";

export default function Step1({ handleChangeStep, handleInputChange }) {
  const { nextStep } = useWizard();

  const handleClick = (data) => {
    handleChangeStep(data);
  };

  const handleInput = (e) => {
    handleInputChange(e);
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
            onClick={(e) => {
              nextStep();
              handleClick(2);
              handleInput(e);
            }}
          />
          <label className="button-label" htmlFor="yes-older">
            <p>Sim</p>
          </label>
          <input
            className="hidden no-button"
            id="no-older"
            type="radio"
            name="isOlder"
            value="0"
            onClick={(e) => {
              nextStep();
              handleClick(2);
              handleInput(e);
            }}
          />
          <label className="button-label" htmlFor="no-older">
            <p>Não</p>
          </label>
        </div>
      </div>
    </>
  );
}
