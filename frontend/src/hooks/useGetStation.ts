import { useEffect, useState } from "react";
import stationsService from "../services/stations";
import { IStation } from "../types/station";

const useGetStation = (id: string | undefined) => {
  const [station, setStation] = useState<IStation>();
  const [loading, setLoading] = useState<boolean>(false);

  useEffect(() => {
    setLoading(true);
    const fetchData = async () => {
      const stationID = id !== undefined ? parseInt(id) : undefined;
      if (stationID === undefined || isNaN(stationID)) {
        setLoading(false);
        return;
      }
      const reply = await stationsService.getStation(stationID);
      setStation(reply);
      setLoading(false);
    };

    fetchData();
  }, [id]);

  return { station, loading };
};

export default useGetStation;
