export default async (req, res) => {
  const headers = {
    Accept: "application/json, text/plain, */*",
    "Content-Type": "application/json",
  };

  const body = JSON.stringify({
    client_id: process.env.STRAVA_CLIENT_ID,
    client_secret: process.env.STRAVA_SECRET,
    refresh_token: process.env.STRAVA_REFRESH_TOKEN,
    grant_type: "refresh_token",
  });

  const reauthorizeResponse = await fetch(
    "https://www.strava.com/oauth/token",
    {
      method: "POST",
      headers: headers,
      body: body,
    }
  );

  const reAuthJson = await reauthorizeResponse.json();
  // console.log(reAuthJson)

  const response = await fetch(
    "https://www.strava.com/api/v3/athletes/52460422/stats?access_token=" +
      reAuthJson.access_token
  );

  const json = await response.json();

  const longestRide = json.biggest_ride_distance; // in meters
  const rideCount = json.all_ride_totals.count;
  const rideDistance = json.all_ride_totals.distance; // in meters
  const rideSecs = json.all_ride_totals.elapsed_time; // in seconds
  const swimCount = json.all_swim_totals.count;
  const swimDistance = json.all_swim_totals.distance; // in meters
  const swimSecs = json.all_swim_totals.elapsed_time; // in seconds

  return res.status(200).json({
    longestRide,
    rideCount,
    rideDistance,
    rideSecs,
    swimCount,
    swimDistance,
    swimSecs,
  });
};
