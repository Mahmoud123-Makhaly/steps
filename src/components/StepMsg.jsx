const StepMsg = ({ step, children }) => {
  return (
    <p className="message">
      Step {step} :{children}
    </p>
  );
};
export default StepMsg;
