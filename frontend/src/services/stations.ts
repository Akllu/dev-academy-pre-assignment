import { GridPaginationModel } from "@mui/x-data-grid";
import axios from "axios";
import { IStation } from "../types/station";

interface IStationQueryReply {
  rows: IStation[];
  totalRowCount: number;
}

const getStations = async (paginationModel: GridPaginationModel) => {
  const { data } = await axios.get<IStationQueryReply>("http://localhost:4000/api/stations", {
    params: paginationModel
  });
  return data;
};

const getStation = async (id: number) => {
  const { data } = await axios.get<IStation>(`http://localhost:4000/api/stations/${id}`);
  return data;
};

export default {
  getStations,
  getStation
};
