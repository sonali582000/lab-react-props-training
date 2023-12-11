const boxcolor = (props) => {
  const color = `rgb(${props.r},${props.g},${props.b})`;
  return (
    <div style={{ border: "1px solid #000", backgroundColor: `${color}` }}>
      <h1>{props.r}</h1>
    </div>
  );
};

export default boxcolor;
