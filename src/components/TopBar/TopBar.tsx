import React, { ReactElement } from "react";
import { ThemeContext } from "../../themes/ThemeProvider";
import Brightness4Icon from "@material-ui/icons/Brightness4";
import Brightness7Icon from "@material-ui/icons/Brightness7";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import IconButton from "@material-ui/core/IconButton";
import Button from "@material-ui/core/Button";
import clsx from "clsx";
import { makeStyles, createStyles } from "@material-ui/core/styles";
import BrandTooltip from "../BrandTooltip";

const useStyles = makeStyles((theme) =>
  createStyles({
    appBar: {
      zIndex: theme.zIndex.drawer + 1,
      transition: theme.transitions.create(["width", "margin"], {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.leavingScreen,
      }),
    },

    typography: {
      padding: theme.spacing(2),
    },

    toolbar: {
      display: "flex",
      alignItems: "center",
      justifyContent: "flex-end",
      padding: theme.spacing(0, 1),
      // necessary for content to be below app bar
      ...theme.mixins.toolbar,
    },
    title: {
      flexGrow: 1,
    },
  })
);

export default function TopBar(): ReactElement {
  const { currentTheme, setTheme } = React.useContext(ThemeContext);
  const isDarkTheme = currentTheme === "dark";
  const classes = useStyles();
  return (
    <AppBar position="fixed" className={clsx(classes.appBar)}>
      <Toolbar>
        <Typography variant="h6" className={classes.title}>
          Untitled project
        </Typography>

        <BrandTooltip title={`Toggle ${isDarkTheme ? "light" : "dark"} theme`}>
          <IconButton
            aria-label="theme"
            onClick={() => {
              setTheme(isDarkTheme ? "light" : "dark");
            }}
          >
            {isDarkTheme ? <Brightness7Icon /> : <Brightness4Icon />}
          </IconButton>
        </BrandTooltip>

        <Button color="inherit">Login</Button>
      </Toolbar>
    </AppBar>
  );
}
