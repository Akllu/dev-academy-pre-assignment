import { Typography } from "@mui/material";

const Home = () => {
  return (
    <div style={{ textAlign: "center" }}>
      <h1>Helsinki city bike application</h1>
      <Typography>
        This is the pre-assignment for Solita Dev Academy Finland January 2024.
      </Typography>
      <Typography>The exercise uses data that is owned by City Bike Finland.</Typography>
      <Typography sx={{ position: "absolute", bottom: "10px", right: "10px", fontStyle: "italic" }}>
        Created by Aleksi Kalliokoski
      </Typography>
    </div>
  );
};

export default Home;
