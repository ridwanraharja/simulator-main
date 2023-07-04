import { useWizard } from "react-use-wizard";

export default function Step3({ handleChangeStep, handleInputChange }) {
  const { nextStep } = useWizard();
  const handleClick = (data) => {
    handleChangeStep(data);
  };

  const handleInput = (e) => {
    handleInputChange(e);
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
            onClick={(e) => {
              nextStep();
              handleClick(4);
              handleInput(e);
            }}
          />
          <label className="button-label" htmlFor="yes-beneficiary">
            <p>Sim</p>
          </label>
          <input
            className="hidden no-button"
            id="no-beneficiary"
            type="radio"
            name="isBeneficiary"
            value="0"
            onClick={(e) => {
              nextStep();
              handleClick(4);
              handleInput(e);
            }}
          />
          <label className="button-label" htmlFor="no-beneficiary">
            <p>Não</p>
          </label>
        </div>
      </div>
    </>
  );
}
