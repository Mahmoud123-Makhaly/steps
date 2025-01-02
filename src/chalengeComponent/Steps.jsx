const Steps = ({ step, setStep }) => {
  return (
    <>
      <button onClick={() => setStep((prev) => prev - 1)}>-</button>
      Step:{step}
      <button onClick={() => setStep((prev) => prev + 1)}>+</button>
    </>
  );
};
export default Steps;
