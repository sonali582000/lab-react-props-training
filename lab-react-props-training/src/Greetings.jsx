const greeting = (props) => {
  console.log(props.lang);
  let greet;
  if ("de" === props.lang) {
    greet = `Hallo ${props.children}`;
  } else if ("en" === props.lang) {
    greet = `Hello ${props.children}`;
  } else {
    greet = `Bonjour ${props.children}`;
  }
  return (
    <div style={{ border: "1px solid #000" }}>
      <p>{greet}</p>
    </div>
  );
};

export default greeting;
