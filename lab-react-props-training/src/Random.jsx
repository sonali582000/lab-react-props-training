const random = (props) => {
  const generate = Math.floor(Math.random() * props.max);
  const randomNum = `Random value between ${props.min} and ${props.max} => ${generate}`;
  return (
    <div>
      <h3>{randomNum}</h3>
    </div>
  );
};

export default random;
