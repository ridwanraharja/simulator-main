import { useState } from "react";
import { Wizard } from "react-use-wizard";
import Step1 from "./Step/Step1";
import Step2 from "./Step/Step2";
import Step3 from "./Step/Step3";
import Step4 from "./Step/Step4";
import Step5 from "./Step/Step5";
import { resultado } from "../utils/resultado";
import { useNavigate } from "react-router-dom";

export default function SmartWizard() {
  const navigate = useNavigate();

  let stepProgress = [1, 2, 3, 4, 5];

  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({
    isOlder: null,
    isDisabled: null,
    isBeneficiary: null,
    isCadiunicoOrCras: null,
    spentMedicine: null,
    itemMembro: [],
    incomes: [],
    sumIncomes: null,
    perCapitaIncome: null,
  });

  const handleChangeStep = (newStep) => {
    setStep(newStep);
  };

  const handleInputChange = (e) => {
    if (e.target.name == "incomes" || e.target.name == "itemMembro") {
      return setFormData((prevState) => ({
        ...prevState,
        [e.target.name]: [e.target.value],
      }));
    }

    setFormData((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = () => {
    let result = resultado(formData);
    navigate("/resultado", { state: { data: result } });
  };

  const multipleInputStep4 = (data) => {
    if ((formData.incomes.length = 1)) {
      return setFormData({
        ...formData,
        incomes: [...formData.incomes, ...data],
      });
    }
    setFormData({ ...formData, incomes: [...formData.incomes[0], ...data] });
  };

  console.log(formData);
  return (
    <div id="smartwizard" className="sw sw-theme-dots sw-justified">
      <div className="title">
        <h2> SIMULADOR BPC-LOAS</h2>
      </div>
      <ul className="d-none d-lg-flex nav">
        {stepProgress.map((progress, index) => {
          return (
            <li className="nav-item" key={index}>
              <a
                className={
                  step === progress
                    ? "nav-link inactive active"
                    : step > progress
                    ? "nav-link inactive done"
                    : step < progress
                    ? "nav-link inactive"
                    : ""
                }
              ></a>
            </li>
          );
        })}
      </ul>
      <div className="d-lg-none progress">
        <div
          className="progress-bar"
          role="progressbar"
          style={
            step == 1
              ? { width: "0%" }
              : step == 2
              ? { width: "20%" }
              : step == 3
              ? { width: "40%" }
              : step == 4
              ? { width: "60%" }
              : step == 5
              ? { width: "80%" }
              : step == 6
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
                ? "0%"
                : step == 2
                ? "20%"
                : step == 3
                ? "40%"
                : step == 4
                ? "60%"
                : step == 5
                ? "80%"
                : step == 6
                ? "100%"
                : ""}
            </span>{" "}
            Completo
          </div>
        </div>
      </div>
      <Wizard>
        <Step1
          handleChangeStep={handleChangeStep}
          handleInputChange={handleInputChange}
        />
        <Step2
          handleChangeStep={handleChangeStep}
          handleInputChange={handleInputChange}
        />
        <Step3
          handleChangeStep={handleChangeStep}
          handleInputChange={handleInputChange}
        />
        <Step4
          handleChangeStep={handleChangeStep}
          handleInputChange={handleInputChange}
          multipleInputStep4={multipleInputStep4}
        />
        <Step5
          handleChangeStep={handleChangeStep}
          handleInputChange={handleInputChange}
          handleSubmit={handleSubmit}
        />
      </Wizard>
    </div>
  );
}
