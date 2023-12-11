function IdCard({
  lastName = "",
  firstName = "",
  gender = "",
  height = 0,
  birth = new Date(),
  picture = "",
}) {
  const formattedHeight = (height / 100).toFixed(2);
  const formattedDate = birth.toLocaleDateString("en-US", {
    weekday: "short",
    month: "short",
    day: "numeric",
    year: "numeric",
  });

  return (
    <div>
      <img src={picture} alt="Image of Person" />
      <p>
        <span className="bold">First name: </span>
        {firstName}
      </p>
      <p>
        <span className="bold">Last name: </span>
        {lastName}
      </p>
      <p>
        <span className="bold">Gender: </span>
        {gender}
      </p>
      <p>
        <span className="bold">Height: </span>
        {formattedHeight}m
      </p>
      <p>
        <span className="bold">Birth: </span>
        {formattedDate}
      </p>
    </div>
  );
}

export default IdCard;
