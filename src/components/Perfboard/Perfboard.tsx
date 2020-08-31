import React, { ReactElement } from 'react'
import { useSelector } from 'react-redux'
import { makeStyles } from '@material-ui/core/styles'

import { 
  getGrid, 
  getDimensions,
  getPitch, 
  // getDimensions,
 } from '../../redux/reducers/Board/selectors'
// import { Vector } from '../../types'
import { 
  getView,
  getZoom,
  getScale,
 } from '../../redux/reducers/App/selectors'

 import createAlphabeticalIndex from './createAlphabeticalIndex';

import BoxCreator from '../BoxCreator'
import { MASK_ID, COPPER_RADIUS } from './CONSTANTS'
import { Point } from '../../redux/reducers/Board/types'
import createNumericalIndex from './createNumericalIndex'
import { Vector } from '../../types'

const colors = {
  copper: '#e3aa80',
  board: '#ae7754',
  ink: 'white',
}

const useStyles = makeStyles({
  selectionPoint: {
    position: 'absolute',
    fill: 'rgba(0,0,0,0)',
    stroke: 'rgba(0,0,0,0)',
    strokeWidth: 0.3,

    '&:hover': {
      stroke: 'rgba(255,255,255,0.85)',
    },

    '&:active': {
      fill: 'rgba(255,255,255,0.4)',
    },
    transition: 'all 0.1s ease',
  },
  copperPad: {
    fill: 'rgba(0,0,0,0)',
    stroke: colors.copper,
    clipPath: 'polygon(25% 0%, 75% 0%, 100% 25%, 100% 75%, 75% 100%, 25% 100%, 0% 75%, 0% 25%)',
  },
  grid: {
    fill: 'none',
    strokeWidth: 0.25,
    stroke: 'rgba(255, 255, 255, 1)'
  },

});


function Perfboard(): ReactElement {
  const {width, height, thickness} = useSelector(getDimensions)
  const pitch = useSelector(getPitch)
  const zoom = useSelector(getZoom);
  const scale = useSelector(getScale);
  const grid = useSelector(getGrid);
  const {columns, rows} = grid;
  const view = useSelector(getView);
  const size = (dimension: number) => dimension * scale * zoom;
  const padding = 3;

  
  const fullWidth = (width + pitch) + (padding * 2),
        fullHeight = (height + pitch) + (padding * 2);


  interface BaseProps {
    isMask?: boolean;
  }
  const Base = ({isMask = false}: BaseProps): ReactElement => (
    <rect 
      x={(-pitch / 2) - padding}
      y={(-pitch / 2) - padding}
      width={fullWidth}
      height={fullHeight}
      fill={isMask ? 'white' : colors.board}
      mask={`url(#${MASK_ID})`} 
    />
  )

  const Grid = (): ReactElement => (
    <>
      <rect
        x = {-pitch / 2}
        y = {-pitch / 2}
        width = {width + pitch}
        height = {height + pitch}

        className = {classes.grid}
      />
      {gridLines.map((line, i) => (
        <line 
          key = {i}
          x1 = {line.start.x}
          y1 = {line.start.y}
          x2 = {line.end.x}
          y2 = {line.end.y}

          className={classes.grid}
        />
      ))}
    </>
  )

  const gridLines = (()=> {
    interface Line {
      start: Vector;
      end: Vector;
    }
    const v: Line[] = [];
    const h: Line[] = [];

    for(let c = 5; c < columns; c += 5){
      const start = {x: c * pitch - (pitch / 2), y: -pitch / 2}
      const end = {x: c * pitch - (pitch / 2), y: height + (pitch / 2)}
      v.push({start, end})
    }
    let toggle = true;
    for(let r = 5; r < rows; toggle ? r += 5 : r += 4){
      const start = {x: -pitch / 2, y: r * pitch - (pitch / 2)}
      const end = {x: width + (pitch / 2), y: r * pitch - (pitch / 2)}
      h.push({start, end})
      toggle = !toggle
    }
    return [...v, ...h]
  })()

  interface IndexingProps {
    isBackSide?: boolean;
  }
  const Indexing = ({isBackSide = false}: IndexingProps): ReactElement => (
    <>
    {/* alphabetical indexing for columns: */}
    {[...Array(columns)].map((x, i) => (
      <text 
        key= {i} 
        x = {i * (pitch)}  
        y = {isBackSide ? pitch / 2 + ((padding - pitch)) : -pitch / 2 - ((padding - pitch))} 
        textLength = {pitch / 2} 
        // lengthAdjust = 'spacingAndGlyphs'
        dominantBaseline={isBackSide ? 'hanging' : 'baseline'} textAnchor="middle"
        fontSize={pitch}
        style = {{
          fill: isBackSide ? colors.copper : colors.ink,
          transform: isBackSide ? 'rotateX(180deg)' : '',
        }}
      >
        {createAlphabeticalIndex(i)}
      </text>
    ))}
    {/* numerical indexing for rows:  */}
    {[...Array(rows)].map((x, i) => (
      <text 
        key = {i} 
        x = {width + pitch / 2 + ((padding - pitch))} 
        y = {isBackSide ? -height + i * pitch + pitch / 3 : height - i * (pitch) + (pitch/3)}  
        textLength = {pitch / 1.5} 
        lengthAdjust = 'spacingAndGlyphs'
        style = {{
          fontSize: pitch,
          fill: isBackSide ? colors.copper : colors.ink,
          transform: isBackSide ? 'rotateX(180deg)' : '',
        }}
      >
        {createNumericalIndex(i + 1, rows)}
      </text>
    ))}
    </>
  )

  const CopperPads = (): ReactElement => (
    <>
      {Object.values(grid.points).map((pt, i) => (
        <circle 
          key = { i }
          cx = { pt.location.x }
          cy = { pt.location.y }
          r = { COPPER_RADIUS }

          className={classes.copperPad}
        />
      ))}
    </>
  )

  const handleClick = (pt: Point) => {
    console.log('pt: ', pt.ptnum)
    console.log(pt)
  }
  const classes = useStyles();
  const SelectionPoints = () => (
    Object.values(grid.points).map((pt, i) => {
      const {x, y} = pt.location;
      return (
        <circle 
          key = {i}
          cx = {x}
          cy = {y}
          r = {COPPER_RADIUS}
          className={classes.selectionPoint}
          onClick = { (e)=>handleClick(pt) }
        />
      )
    })
  )

  return (
    <BoxCreator 
      view={view}

      width={size(fullWidth)}
      height={size(fullHeight)}
      length={size(thickness)}

      right={<div style={{height: '100%', width: '100%', backgroundColor: '#6e4a34'}}></div>}
      left={<div style={{height: '100%', width: '100%', backgroundColor: '#6e4a34'}}></div>}
      top={<div style={{height: '100%', width: '100%', backgroundColor: '#6e4a34'}}></div>}
      bottom={<div style={{height: '100%', width: '100%', backgroundColor: '#6e4a34'}}></div>}

      front={
          <svg
            viewBox = { `0 0 ${width} ${height}`}
            height = { size(height) }
            width = { size(width) } 
            x = { 0 }
            y = { 0 }
            style = {{overflow: 'visible'}}
          >
            <mask id={MASK_ID}>
              {/* Unmasked base: */}
              <Base isMask/>
              {/* Component holes */}
              {
                Object.values(grid.points).map( (pt, i) => 
                <circle
                  key = { i }
                  cx = {pt.location.x}
                  cy = {pt.location.y}
                  r = {(grid.pitch === 2.54 ? 1.2 : 0.6) / 2}
                /> 
                )
              }
            </mask>
            <Base />
            <Indexing />
            <Grid />
            
            {SelectionPoints()}
          </svg>
      }
      back={
        <svg
          viewBox = { `0 0 ${width} ${height}`}
          height = { size(height) }
          width = { size(width) } 
          x = { 0 }
          y = { 0 }
          style = {{transform: 'scaleX(-1)', overflow: 'visible'}}
        >
          <Base />
          <CopperPads />
          <Indexing isBackSide/>
          {SelectionPoints()}
        </svg>
      }
    />
  )
}

export default Perfboard