import { Button, Card } from "@mui/material";
import { DataGrid, GridColDef, GridPaginationModel, GridRowSelectionModel } from "@mui/x-data-grid";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import useGetStations from "../../hooks/useGetStations";
import classes from "./StationList.module.css";

const StationList = () => {
  const [paginationModel, setPaginationModel] = useState<GridPaginationModel>({
    page: 0,
    pageSize: 10
  });
  const [rowSelectionModel, setRowSelectionModel] = useState<GridRowSelectionModel>([]);

  const { loading, stations, totalRowCount } = useGetStations(paginationModel);
  const navigate = useNavigate();

  const columns: GridColDef[] = [
    { field: "station_name", headerName: "Name", minWidth: 400 },
    { field: "station_address", headerName: "Address", minWidth: 400 }
  ];

  const navigateToStation = () => {
    const stationID = Number(rowSelectionModel[0]);
    navigate(`/stations/${stationID}`);
  };

  return (
    <div className={classes.container}>
      <h1>Stations</h1>
      <Card sx={{ padding: "8px" }}>
        <DataGrid
          loading={loading}
          columns={columns}
          rows={stations}
          rowSelectionModel={rowSelectionModel}
          onRowSelectionModelChange={model => setRowSelectionModel(model)}
          onRowDoubleClick={navigateToStation}
          rowCount={totalRowCount}
          pageSizeOptions={[5, 10, 25]}
          paginationModel={paginationModel}
          paginationMode="server"
          onPaginationModelChange={model => setPaginationModel(model)}
        />

        <Button
          variant="contained"
          sx={{ marginTop: "16px" }}
          disabled={rowSelectionModel.length === 0}
          onClick={navigateToStation}>
          View the station
        </Button>
      </Card>
    </div>
  );
};

export default StationList;
