export interface Ride {
  id: number;
  name: string;
  distance: number;
  moving_time: number;
  average_speed: number;
  start_date_local: string;
  start_date: string;
  map: {
    summary_polyline: string;
  };
}
