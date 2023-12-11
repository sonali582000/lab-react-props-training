const IdCard = ({ lastName, firstName, gender, height, birth, picture }) => {
  const days = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];
  let dayName = days[birth.getDay()];
  console.log(dayName);
  return (
    <div
      style={{
        border: "1px solid #000",
        display: "flex",
        flexDirection: "row",
      }}
    >
      <img src={picture}></img>
      <div>
        <p>
          <b>First Name:</b>
          <span>{firstName}</span>
        </p>
        <p>
          <b>Last Name:</b>
          <span>{lastName}</span>
        </p>
        <p>
          <b>Gender:</b>
          <span>{gender}</span>
        </p>
        <p>
          <b>Height:</b>
          <span>{Object.values({ height }) / 100}</span>
        </p>
        <p>
          <b>Birth:</b>
          <span>
            {dayName} <span> </span>
            {birth.toLocaleString("default", { month: "long" })} <span> </span>{" "}
            {birth.getDate()}
            <span> </span>
            {birth.getFullYear()}
          </span>
        </p>
      </div>
    </div>
  );
};

export default IdCard;
