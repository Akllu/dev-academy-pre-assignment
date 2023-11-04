import { Grid } from "@mui/material";
import { useEffect, useState } from "react";
import stationsService from "../services/stations";
import { IStation } from "../types/station";

const StationsPage = () => {
  const [stations, setStations] = useState<IStation[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      const stations = await stationsService.getStations();
      setStations(stations);
    };

    fetchData();
  }, []);

  return (
    <>
      <h1>Stations</h1>
      <Grid container flexDirection={"column"}>
        {stations.map(station => (
          <Grid item key={station.id}>
            {station.station_name}
          </Grid>
        ))}
      </Grid>
    </>
  );
};

export default StationsPage;
