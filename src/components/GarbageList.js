// import { Link } from "react-router-dom";
import TreasureItem from "./TreasureItem";
import { List, Title } from "../styles";

import { useSelector } from "react-redux";

const Today = () => {
  const treasures = useSelector((state) => state.treasures.treasures);
  const user = useSelector((state) => state.users.users);
  let garbageArr = treasures
    .filter((treasure) => treasure.isTreasure === false)
    .map((treasure) => <TreasureItem treasure={treasure} key={treasure.id} />);

  return (
    <div>
      <Title>Garbage</Title>
      <List>{garbageArr}</List>
    </div>
  );
};

export default Today;
