import axios from "axios";
import { IStation } from "../types/station";

const getStations = async () => {
  const { data } = await axios.get<IStation[]>("http://localhost:4000/api/stations");
  return data;
};

export default {
  getStations
};
