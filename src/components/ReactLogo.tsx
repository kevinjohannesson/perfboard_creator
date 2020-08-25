/** @jsx jsx */
import { css, jsx } from '@emotion/core'
import { ReactElement } from 'react'

import { useTheme } from 'emotion-theming'
import { useDispatch, useSelector } from 'react-redux'
import { setTheme } from '../redux/reducers/App/actions'
import { getTheme } from '../redux/reducers/App/selectors'

import logo from '../logo.svg'

interface Props {
  
}

export const ReactLogo = (props: Props): ReactElement => {
  const theme: any = useTheme()
  const currentTheme = useSelector(getTheme)
  const dispatch = useDispatch()
  console.log(theme)
  return (
    <img 
      src={logo} 
      alt="logo" 
      css={css`
        animation: App-logo-spin infinite 20s linear;
        height: 40vmin;

        cursor: pointer;
        
        transition: all 0.2s ease;

        &:hover {
          height: 42vmin;
        }

        &:active {
          height: 38vmin;
        }
        
        @keyframes App-logo-spin {
          from {
            transform: rotate(0deg);
          }
          to {
            transform: rotate(360deg);
          }
        }`
      }
      onClick = {()=>{dispatch(setTheme(currentTheme === 'dark' ? 'light' : 'dark'))}}
    />
  )
}
