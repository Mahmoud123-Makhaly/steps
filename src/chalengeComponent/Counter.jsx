const Counter = ({ count, setCount, step }) => {
  return (
    <div>
      <button onClick={() => setCount((prev) => prev - step)}>-</button>
      Count:{count}
      <button onClick={() => setCount((prev) => prev + step)}>+</button>
    </div>
  );
};
export default Counter;
