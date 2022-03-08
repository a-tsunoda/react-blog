import React from "react";
import { AppBar, Toolbar, Typography, makeStyles } from "@material-ui/core";

const useStyles = makeStyles(() => ({
  appbarStyles: {
    backgroundColor: "#3CB371"
  }
}));

function Header() {
  const classes = useStyles();
  return (
    <AppBar className={classes.appbarStyles} position="static">
      <Toolbar>
        <Typography>Blog</Typography>
      </Toolbar>
    </AppBar>
  );
}

export default Header;
