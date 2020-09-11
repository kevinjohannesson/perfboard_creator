import React, { ReactElement } from "react";
import Paper from "@material-ui/core/Paper";
import Box from "@material-ui/core/Box";
import Perfboard from "./components/Perfboard/Perfboard";
import SwatchButton from "./components/SwatchButton";
import SideBar from "./components/SideBar/SideBar";
import { makeStyles, createStyles } from "@material-ui/core/styles";
import ToggleViewButton from "./components/ToggleViewButton";
import TopBar from "./components/TopBar/TopBar";
import { View } from "./types";

const useStyles = makeStyles((theme) =>
  createStyles({
    root: {
      height: "100vh",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      flexDirection: "column",
    },
    quickToolBar: {
      position: "fixed",
      bottom: theme.spacing(2),
      right: theme.spacing(2),
      display: "flex",
      flexDirection: "column",
    },
    offset: { ...theme.mixins.toolbar, width: "100%" },
    viewport: {
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      width: "100%",
      perspective: "400em",

      paddingLeft: theme.spacing(7) + 16, // copied from drawer css +
    },

    sideBarOuter: {
      position: "absolute",
      left: 0,
      top: 0,
      height: "100%",
      minWidth: "20px",
      display: "flex",
      flexDirection: "column",
    },
    sideBarInner: {
      flexGrow: 1,
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      justifyContent: "center",
    },
  })
);

function App(): ReactElement {
  console.log("App");
  const classes = useStyles();

  const ref = React.createRef<HTMLDivElement>();

  function rotateBox(view: View) {
    console.log("rotateBox");
    if (ref.current) {
      switch (view) {
        case "back": {
          ref.current.style.transform = `rotateX(-180deg)`;
          break;
        }
        case "front": {
          ref.current.style.transform = `rotateX(0deg)`;
          break;
        }
      }
    }
  }

  React.useEffect(() => {
    const listener = (event: MouseEvent) => event.preventDefault();
    document.addEventListener("contextmenu", listener);
    return () => {
      document.removeEventListener("contextmenu", listener);
    };
  }, []);
  return (
    <Paper className={classes.root} square>
      {/* placeholder box to offset the viewport to the center
 of the screen to remove AppBar influence on positioning */}
      <Box className={classes.offset} />

      <Box className={classes.viewport}>
        <Perfboard ref={ref} />
      </Box>

      <TopBar />
      <Box className={classes.sideBarOuter}>
        <Box className={classes.offset} />
        <Box className={classes.sideBarInner}>
          <SideBar />
        </Box>
      </Box>

      <Box className={classes.quickToolBar}>
        <ToggleViewButton rotateFunction={rotateBox} />
        <SwatchButton />
      </Box>
    </Paper>
  );
}

export default App;
