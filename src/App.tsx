// this comment tells babel to convert jsx to calls to a function called jsx instead of React.createElement
/** @jsx jsx */
import { ReactElement } from 'react';

import { jsx } from '@emotion/core'
import {ThemeProvider} from 'emotion-theming'

import { useSelector } from 'react-redux'
import { getTheme } from './redux/reducers/App/selectors'

import { ReactLogo } from './components/ReactLogo';


const themeLight = {
  text: '#000',
  background: '#fff',
  buttonText: '#000',
  buttonTextHover: '#fff',
  buttonBorder: '#000',
  buttonBg: 'rgba(0, 0, 0, 0)',
  buttonBgHover: 'rgba(0, 0, 0, 1)',
}

const themeDark = {
  text: '#fff',
  background: '#121212',
  buttonText: '#fff',
  buttonTextHover: '#000',
  buttonBorder: '#fff',
  buttonBg: 'rgba(255, 255, 255, 0)',
  buttonBgHover: 'rgba(255, 255, 255, 1)',
}

function App(): ReactElement {
  const theme = useSelector(getTheme)
  return (
    <ThemeProvider theme = {theme === 'dark' ? themeDark : themeLight}>
      <div
        css={theme => ({ 
          backgroundColor: theme.background,
          color: theme.text,
          width: '100%',
          height: '100%',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          transitionDuration: '0.4s',
          transitionProperty: 'background-color, color',
        })}
      >
        <ReactLogo />
      </div>
    </ThemeProvider>
  );
}

export default App;
