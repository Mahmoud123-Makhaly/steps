const TheDate = ({ count }) => {
  const currentDate = new Date();


  currentDate.setDate(currentDate.getDate() + count);
  const formattedDate = currentDate.toDateString();
  return (
    <p>
      {count > 0
        ? `${count} day From Today`
        : count < 0
        ? `${Math.abs(count)} days ago  was`
        : "Today is"}
      {formattedDate}
    </p>
  );
};
export default TheDate;
