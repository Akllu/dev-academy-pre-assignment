import { useParams } from "react-router-dom";
import classes from "./Station.module.css";

const Station = () => {
  const { id } = useParams();

  return (
    <div className={classes.container}>
      <h1>Station #{id}</h1>
    </div>
  );
};

export default Station;
