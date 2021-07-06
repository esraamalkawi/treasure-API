import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";

const TreasureItem = (props) => {
  const treasure = props.treasure;
  return (
    <div>
      <h5>{treasure.name}</h5>
      {/* <p>{treasure.image} </p> */}
    </div>
  );
};

export default TreasureItem;
