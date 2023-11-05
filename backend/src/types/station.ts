export interface IStation {
  id: number;
  station_name?: string;
  station_address?: string;
  coordinate_x?: string;
  coordinate_y?: string;
  total_journeys_started?: string;
  total_journeys_ended?: string;
  average_distance?: string;
  average_duration?: string;
}

export interface IStationQueryParams {
  offset: number;
  limit: number;
}
