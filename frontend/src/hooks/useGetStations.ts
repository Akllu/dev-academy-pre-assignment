import { GridPaginationModel } from "@mui/x-data-grid";
import { useEffect, useState } from "react";
import stationsService from "../services/stations";
import { IStation } from "../types/station";

const useGetStations = (paginationModel: GridPaginationModel) => {
  const [stations, setStations] = useState<IStation[]>([]);
  const [totalRowCount, setTotalRowCount] = useState<number>(0);
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

  return { stations, totalRowCount, loading };
};

export default useGetStations;
