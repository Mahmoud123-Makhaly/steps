import { useState } from "react";
import Steps from "./Steps";
import Counter from "./Counter";
import TheDate from "./TheDate";

const Chalenge = () => {
  const [step, setStep] = useState(1);

  const [count, setCount] = useState(0);

  return (
    <>
      {/*start step   */}
      <Steps step={step} setStep={setStep} />
      <Counter count={count} setCount={setCount} step={step} />
      <TheDate count={count} />
    </>
  );
};
export default Chalenge;
