// import { Link } from "react-router-dom";
import TreasureItem from "./TreasureItem";
import { List, Title } from "../styles";

import { useSelector } from "react-redux";
import { useHistory } from "react-router";

const Today = () => {
  const history = useHistory();
  const treasures = useSelector((state) => state.treasures.treasures);
  const user = useSelector((state) => state.users.users);
  let treasuresArr = treasures
    .filter((treasure) => treasure.isTreasure === true)
    .map((treasure) => <TreasureItem treasure={treasure} key={treasure.id} />);
  let garbageArr = treasures
    .filter((treasure) => treasure.isTreasure === false)
    .map((treasure) => <TreasureItem treasure={treasure} key={treasure.id} />);

  if (!user) {
    history.push("/");
  }

  return (
    <div>
      <Title> Treasures</Title>
      <List>{treasuresArr}</List>
      <Title>Garbage</Title>
      <List>{garbageArr}</List>
    </div>
  );
};

export default Today;
