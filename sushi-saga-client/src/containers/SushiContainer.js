import React, { Fragment } from 'react'
import MoreButton from '../components/MoreButton'
import Sushi from '../components/Sushi'

const SushiContainer = (props) => {
  return (
    <Fragment>
      <div className="belt">
        {
          props.sushis.slice(props.startingSushiIndex, props.startingSushiIndex+4).map( sushi => {
            return <Sushi key={sushi.id} sushi={sushi} eatenSushis={props.eatenSushis} eatingSushi={props.eatingSushi}/>
          })
        }
        <MoreButton moreSushiChangeIndex={props.moreSushiChangeIndex} />
      </div>
    </Fragment>
  )
}

export default SushiContainer