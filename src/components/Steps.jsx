import { Fragment, useState } from "react";

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
          <p className="message">
            Step {step} : {messages[step - 1]}
          </p>
          <div className="buttons">
            <button onClick={() => handlePrevious()}>Previous</button>
            <button onClick={() => handleNext()}>Next</button>
          </div>
        </div>
      )}
    </Fragment>
  );
};
export default Steps;
