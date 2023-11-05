import PedalBikeIcon from "@mui/icons-material/PedalBike";
import { Grid } from "@mui/material";
import { Link } from "react-router-dom";
import classes from "./Navbar.module.css";

const Navbar = () => {
  return (
    <Grid container className={classes.container}>
      <Grid item className={classes.logo}>
        <Link to={"/"} className={classes.link}>
          <PedalBikeIcon sx={{ width: "36px", height: "36px" }} />
        </Link>
      </Grid>
      <Grid item>
        <Grid container spacing={"36px"}>
          <Grid item>
            <Link to="/" className={classes.link}>
              Home
            </Link>
          </Grid>
          <Grid item>
            <Link to="/stations" className={classes.link}>
              Stations
            </Link>
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  );
};

export default Navbar;
