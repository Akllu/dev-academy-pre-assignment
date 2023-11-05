import { Card } from "@mui/material";
import { DataGrid, GridColDef, GridPaginationModel } from "@mui/x-data-grid";
import { useState } from "react";
import useGetStations from "../../hooks/useGetStations";
import classes from "./StationList.module.css";

const StationList = () => {
  const [paginationModel, setPaginationModel] = useState<GridPaginationModel>({
    page: 0,
    pageSize: 10
  });

  const { loading, stations, totalRowCount } = useGetStations(paginationModel);

  const columns: GridColDef[] = [
    { field: "station_name", headerName: "Name", minWidth: 400 },
    { field: "station_address", headerName: "Address", minWidth: 400 }
  ];

  return (
    <div className={classes.container}>
      <h1>Stations</h1>
      <Card>
        <DataGrid
          loading={loading}
          columns={columns}
          rows={stations}
          rowCount={totalRowCount}
          pageSizeOptions={[5, 10, 25]}
          paginationModel={paginationModel}
          paginationMode="server"
          onPaginationModelChange={model => setPaginationModel(model)}
        />
      </Card>
    </div>
  );
};

export default StationList;
