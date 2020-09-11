import React, { ReactElement } from 'react'
import Tooltip, { TooltipProps } from '@material-ui/core/Tooltip'
import Zoom from '@material-ui/core/Zoom'

interface Props {
  title: string,
  placement?: TooltipProps['placement'],
  children: ReactElement<any, any>,
}

export default function BrandTooltip({title, placement = 'bottom', children}: Props): ReactElement {
  return (
    <Tooltip arrow title={title} placement={placement} TransitionComponent={Zoom} enterDelay={1000} leaveDelay={200}>
      {children}
    </Tooltip>
  )
}
