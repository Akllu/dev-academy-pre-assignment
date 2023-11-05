import { List, ListItem, Typography } from "@mui/material";
import { useParams } from "react-router-dom";
import useGetStation from "../../hooks/useGetStation";
import LoadingScreen from "../LoadingScreen";
import classes from "./Station.module.css";

const Station = () => {
  const { id } = useParams();
  const { loading, station } = useGetStation(id);

  return (
    <>
      {loading ? (
        <LoadingScreen size={60} />
      ) : (
        <div className={classes.container}>
          <List>
            <ListItem>
              <h1>Station: {station?.station_name ?? "-"}</h1>
            </ListItem>
            <ListItem>
              <Typography>Address: {station?.station_address ?? "-"}</Typography>
            </ListItem>
            <ListItem>
              <Typography>
                Total number of journeys starting from the station:{" "}
                {station?.total_journeys_started ?? "-"}
              </Typography>
            </ListItem>
            <ListItem>
              <Typography>
                Total number of journeys ending at the station:{" "}
                {station?.total_journeys_ended ?? "-"}
              </Typography>
            </ListItem>
            <ListItem>
              <Typography>
                Average distance of journeys starting from the station:{" "}
                {station?.average_distance !== undefined
                  ? `${parseFloat(station.average_distance).toFixed(1)} meters`
                  : "-"}
              </Typography>
            </ListItem>
            <ListItem>
              <Typography>
                Avarage duration of journeys starting from the station:{" "}
                {station?.average_duration
                  ? `${parseFloat(station.average_duration).toFixed(1)} seconds`
                  : "-"}
              </Typography>
            </ListItem>
          </List>
        </div>
      )}
    </>
  );
};

export default Station;
