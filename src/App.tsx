import React, { ReactElement } from 'react';

import { useSelector, useDispatch } from 'react-redux'

import { ThemeProvider, Paper, Grid, IconButton, AppBar, Tooltip, Toolbar, Drawer, Divider, Typography, CssBaseline } from '@material-ui/core';
import { unstable_createMuiStrictModeTheme as createMuiTheme, createStyles, makeStyles } from '@material-ui/core/styles';
import Brightness4Icon from '@material-ui/icons/Brightness4'
import Brightness7Icon from '@material-ui/icons/Brightness7';
import FlipCameraAndroidIcon from '@material-ui/icons/FlipCameraAndroid'
import MenuIcon from '@material-ui/icons/Menu'
import ChevronRightIcon from '@material-ui/icons/ChevronRight'
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft'

import clsx from 'clsx';
import { getTheme, getView } from './redux/reducers/App/selectors'
import { toggleTheme, toggleView } from './redux/reducers/App/actions';
import Perfboard from './components/Perfboard/Perfboard';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import InboxIcon from '@material-ui/icons/MoveToInbox';
import MailIcon from '@material-ui/icons/Mail';
import Button from '@material-ui/core/Button';
// import Board from './components/board/Board';
// import Plane from './components/Plane';
// import Cube from './components/Cube';
// import CubeCreator from './components/CubeCreator';

const drawerWidth = 240;

const useStyles = makeStyles((theme) =>
  createStyles({
    root: {
      height: '100vh',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      flexDirection: 'column',
    },
    appBar: {
      zIndex: theme.zIndex.drawer + 1,
      transition: theme.transitions.create(['width', 'margin'], {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.leavingScreen,
      }),
    },
    appBarShift: {
      marginLeft: drawerWidth,
      width: `calc(100% - ${drawerWidth}px)`,
      transition: theme.transitions.create(['width', 'margin'], {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.enteringScreen,
      }),
    },
    menuButton: {
      marginRight: 36,
    },
    hide: {
      display: 'none',
    },
    drawer: {
      width: drawerWidth,
      flexShrink: 0,
      whiteSpace: 'nowrap',
    },
    drawerOpen: {
      width: drawerWidth,
      transition: theme.transitions.create(['width'], {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.enteringScreen,
      }),
    },
    drawerClose: {
      transition: theme.transitions.create(['width'], {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.leavingScreen,
      }),
      overflowX: 'hidden',
      width: theme.spacing(7) + 1,
      [theme.breakpoints.up('sm')]: {
        width: theme.spacing(9) + 1,
      },
    },
    toolbar: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'flex-end',
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
    offset: {...theme.mixins.toolbar, width: '100%'}, 
    viewport: {
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      width: '100%',

      paddingLeft: theme.spacing(7) + 16, // copied from drawer css + 
    },
    drawerOffset: {
       
      height: '100%',
    },
  }),
);

function App(): ReactElement {
  console.log('App')

  const dispatch = useDispatch();
  const isDarkTheme = useSelector(getTheme) === 'dark';
  const isFrontView = useSelector(getView) === 'front';

  const theme = createMuiTheme({
    palette: {
      type: isDarkTheme ? 'dark' : 'light',
    },
  });
  const classes = useStyles();

  const [open, setOpen] = React.useState(false);

  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };

  return (
    <ThemeProvider theme={theme}>
      <Paper className={classes.root} >
      <CssBaseline />
      <AppBar
        position="fixed"
        className={clsx(classes.appBar, {
          [classes.appBarShift]: open,
        })}
      >
        
        <Toolbar>
          <Tooltip title={`Toggle full menu`} arrow>
            <IconButton
              color="inherit"
              aria-label="open drawer"
              onClick={handleDrawerOpen}
              edge="start"
              className={clsx(classes.menuButton, {
                [classes.hide]: open,
              })}
            >
              <MenuIcon />
            </IconButton>
          </Tooltip>

          <Typography variant="h6" className={classes.title}>
            Untitled project
          </Typography>

          <Tooltip title={`Toggle ${isFrontView ? 'back' : 'front'} view`} arrow>
            <IconButton aria-label="view" onClick={()=>{dispatch(toggleView())}}>
              <FlipCameraAndroidIcon/>
            </IconButton>
          </Tooltip>
          <Tooltip title={`Toggle ${isDarkTheme ? 'light' : 'dark'} theme`} arrow>
            <IconButton aria-label="theme" onClick={()=>{dispatch(toggleTheme())}}>
              {isDarkTheme ? <Brightness7Icon/> : <Brightness4Icon/>}
            </IconButton>
          </Tooltip>

          
          <Button color="inherit">Login</Button>
        </Toolbar>
      </AppBar>
      {/* <Toolbar /> */}

        <Drawer
          variant="permanent"
          className={clsx(classes.drawer, {
            [classes.drawerOpen]: open,
            [classes.drawerClose]: !open,
          })}
          classes={{
            paper: clsx({
              [classes.drawerOpen]: open,
              [classes.drawerClose]: !open,
            }),
          }}
        >
        <div className={classes.toolbar}>
          <IconButton onClick={handleDrawerClose}>
            {theme.direction === 'rtl' ? <ChevronRightIcon /> : <ChevronLeftIcon />}
          </IconButton>
        </div>
        <Divider />

        <List>
          {['Inbox', 'Starred', 'Send email', 'Drafts'].map((text, index) => (
            <ListItem button key={text} style={{paddingLeft: '24px'}}>
              <ListItemIcon>{index % 2 === 0 ? <InboxIcon /> : <MailIcon />}</ListItemIcon>
              <ListItemText primary={text} />
            </ListItem>
          ))}
        </List>

      </Drawer>
      <div className={classes.offset}/>
        {/* <Grid container className={clsx(classes.root)}> */}
      <div className={classes.viewport}>
        {/* <div className={classes.drawerOffset}/> */}
        <Perfboard />
      </div>
        {/* </Grid> */}
      </Paper>
    </ThemeProvider>
  );
}

export default App;