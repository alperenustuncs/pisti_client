import { useParams } from "react-router-dom";

function GameInformation() {
  const { id } = useParams();
  return <div>Game Information {id} </div>;
}

export default GameInformation;
