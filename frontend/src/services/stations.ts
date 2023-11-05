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

export default {
  getStations
};
