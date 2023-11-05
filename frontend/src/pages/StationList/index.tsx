import { Card } from "@mui/material";
import { DataGrid, GridColDef, GridPaginationModel } from "@mui/x-data-grid";
import { useEffect, useState } from "react";
import stationsService from "../../services/stations";
import { IStation } from "../../types/station";
import classes from "./StationList.module.css";

const StationList = () => {
  const [stations, setStations] = useState<IStation[]>([]);
  const [totalRowCount, setTotalRowCount] = useState<number>(0);
  const [paginationModel, setPaginationModel] = useState<GridPaginationModel>({
    page: 0,
    pageSize: 10
  });
  const [loading, setLoading] = useState<boolean>(false);

  useEffect(() => {
    setLoading(true);
    const fetchData = async () => {
      const reply = await stationsService.getStations(paginationModel);
      setStations(reply.rows);
      setTotalRowCount(reply.totalRowCount);
      setLoading(false);
    };

    fetchData();
  }, [paginationModel]);

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
