import React, { Fragment } from 'react'
import MoreButton from '../components/MoreButton'
import Sushi from '../components/Sushi'

const SushiContainer = (props) => {
  return (
    <Fragment>
      <div className="belt">
        {props.sushis.map(sushi =>
          <Sushi sushi={sushi} buySushi={props.buySushi} sushiEaten={props.sushiEaten}/>
        )}
        <MoreButton nextFourSushis={props.nextFourSushis} />
      </div>
    </Fragment>
  )
}

export default SushiContainer