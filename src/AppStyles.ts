import { makeStyles, createStyles } from "@material-ui/core/styles";

const drawerWidth = 240;

const useStyles = makeStyles((theme) =>
  createStyles({
    root: {
      height: "100vh",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      flexDirection: "column",
    },
    swatch_icon: {
      position: "fixed",
      bottom: theme.spacing(2),
      right: theme.spacing(2),
      display: "flex",
      flexDirection: "column",
    },
    swatches: {
      display: "flex",
      flexDirection: "row",
      "&:focus": {
        outline: "none",
      },
    },
    appBar: {
      zIndex: theme.zIndex.drawer + 1,
      transition: theme.transitions.create(["width", "margin"], {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.leavingScreen,
      }),
    },
    appBarShift: {
      marginLeft: drawerWidth,
      width: `calc(100% - ${drawerWidth}px)`,
      transition: theme.transitions.create(["width", "margin"], {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.enteringScreen,
      }),
    },
    typography: {
      padding: theme.spacing(2),
    },
    menuButton: {
      marginRight: 36,
    },
    hide: {
      display: "none",
    },

    list: {
      display: "flex",
      justifyContent: "flex-start",
      flexDirection: "column",
      height: "100%",
      fontWeight: 900,
    },
    drawer: {
      width: drawerWidth,
      flexShrink: 0,
      whiteSpace: "nowrap",
    },
    drawerOpen: {
      overflowX: "hidden",
      width: drawerWidth,
      transition: theme.transitions.create(["width"], {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.enteringScreen,
      }),
    },
    drawerClose: {
      transition: theme.transitions.create(["width"], {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.leavingScreen,
      }),
      overflowX: "hidden",
      width: theme.spacing(7) + 1,
      [theme.breakpoints.up("sm")]: {
        width: theme.spacing(9) + 1,
      },
    },
    toolbar: {
      display: "flex",
      alignItems: "center",
      justifyContent: "flex-end",
      padding: theme.spacing(0, 1),
      // necessary for content to be below app bar
      ...theme.mixins.toolbar,
    },
    content: {
      flexGrow: 1,
      padding: theme.spacing(3),
    },
    title: {
      flexGrow: 1,
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
    drawerOffset: {
      height: "100%",
    },

    listTitle: {
      fontWeight: "bolder",
      pointerEvents: "none",
      maxHeight: "2rem",
    },
  })
);

export default useStyles;
