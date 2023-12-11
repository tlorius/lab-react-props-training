const Random = ({ min = 0, max = 0 }) => {
  let rndValue = Math.round(Math.random() * (max - min) + min);
  return (
    <p>
      Random value between {min} and {max} {"=>"} {rndValue}
    </p>
  );
};

export default Random;
