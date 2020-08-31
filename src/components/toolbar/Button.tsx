
import React, { ReactElement } from 'react';


import SettingsIcon from '@material-ui/icons/Settings'
import Brightness4Icon from '@material-ui/icons/Brightness4'
import PaletteIcon from '@material-ui/icons/Palette'
import FlipCameraAndroidIcon from '@material-ui/icons/FlipCameraAndroid'
import { IconButton } from '@material-ui/core'


import { makeStyles } from '@material-ui/core/styles';
interface Props {
  name: Icon,
  exec: () => any,
}


type Icon = 'settings' 
| 'theme'
| 'color'
| 'view'

function styles() {
  return {
    icon: {
      color: 'green',
    },
  }
}



function Button({name, exec}: Props): ReactElement {
  const classes = makeStyles(styles)();
  const icon = (function(){
    switch(name){
      case 'color': return <PaletteIcon className={classes.icon}/>
      case 'theme': return <Brightness4Icon className={classes.icon}/>
      case 'settings': return <SettingsIcon className={classes.icon}/>
      case 'view': return <FlipCameraAndroidIcon className={classes.icon}/>
    }
  })()
  return (
    <IconButton aria-label="delete" onClick={exec}>

      {icon}

    </IconButton>
    // <button onClick={exec}>
    // </button>
  )
}

export default Button
