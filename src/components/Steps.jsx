import { Fragment, useState } from "react";
import Button from "./Button";
import StepMsg from "./StepMsg";

const messages = [
  "Learn React ⚛️",
  "Apply for jobs 💼",
  "Invest your new income 🤑",
];

const Steps = () => {
  const [step, setStep] = useState(1);
  const [isOpen, setIsOpen] = useState(true);
  const handlePrevious = () => {
    if (step > 1) setStep((prev) => prev - 1);
  };
  const handleNext = () => {
    if (step < 3) setStep((prev) => prev + 1);
  };

  return (
    <Fragment>
      <button className="close" onClick={() => setIsOpen((prev) => !prev)}>
        X
      </button>
      {isOpen && (
        <div className="steps">
          <div className="numbers">
            <div className={step >= 1 && "active"}>1</div>
            <div className={step >= 2 && "active"}>2</div>
            <div className={step >= 3 && "active"}>3</div>
          </div>

          <StepMsg step={step}>{messages[step - 1]}</StepMsg>

          <div className="buttons">
            <Button onClick={handlePrevious}>
              <span>👩🏻‍🤝‍👩🏻</span>Previous
            </Button>
            <Button onClick={handleNext}>
              Next<span>😫</span>
            </Button>
          </div>
        </div>
      )}
    </Fragment>
  );
};
export default Steps;
