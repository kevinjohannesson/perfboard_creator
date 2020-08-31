// this comment tells babel to convert jsx to calls to a function called jsx instead of React.createElement
/** @jsx jsx */
import React, { ReactElement } from 'react';
import { jsx } from '@emotion/core'
import Button from './Button';
import { 
  useDispatch,
  // useSelector,
} from 'react-redux';
import { 
  toggleTheme,
  toggleView,
 } from '../../redux/reducers/App/actions';
// import { getTheme } from '../../redux/reducers/App/selectors';

// import { jsx } from '@emotion/core'



function Toolbar(): ReactElement {
  const dispatch = useDispatch()
  const f = (): void => console.log('click')
  return (
    <React.Fragment>
      <Button name={'color'} exec={f} />
      <Button name={'theme'} exec={()=>{
        dispatch(toggleTheme())
      }} />
      <Button name={'view'} exec={()=>{
        dispatch(toggleView())
      }} />
      <Button name={'settings'} exec={f} />
    </React.Fragment>
  )
}

export default Toolbar
