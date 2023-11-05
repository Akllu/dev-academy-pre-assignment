import { Card } from "@mui/material";
import { DataGrid, GridColDef } from "@mui/x-data-grid";
import { useEffect, useState } from "react";
import stationsService from "../../services/stations";
import { IStation } from "../../types/station";
import classes from "./StationList.module.css";

const StationList = () => {
  const [stations, setStations] = useState<IStation[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      const stations = await stationsService.getStations();
      setStations(stations);
    };

    fetchData();
  }, []);

  const columns: GridColDef[] = [
    { field: "station_name", headerName: "Name", minWidth: 400 },
    { field: "station_address", headerName: "Address", minWidth: 400 }
  ];

  return (
    <div className={classes.container}>
      <h1>Stations</h1>
      <Card>
        <DataGrid columns={columns} rows={stations} />
      </Card>
    </div>
  );
};

export default StationList;
