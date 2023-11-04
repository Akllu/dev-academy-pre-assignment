import PedalBikeIcon from "@mui/icons-material/PedalBike";
import { Grid } from "@mui/material";
import { Link } from "react-router-dom";
import "./Navbar.css";

const Navbar = () => {
  return (
    <Grid container className="container">
      <Grid item xs={4} lg={5}>
        <Link to={"/"} className="link">
          <PedalBikeIcon sx={{ width: "36px", height: "36px" }} />
        </Link>
      </Grid>
      <Grid item xs={8} lg={7}>
        <Grid container spacing={"36px"}>
          <Grid item>
            <Link to="/" className="link">
              Home
            </Link>
          </Grid>
          <Grid item>
            <Link to="/stations" className="link">
              Stations
            </Link>
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  );
};

export default Navbar;
