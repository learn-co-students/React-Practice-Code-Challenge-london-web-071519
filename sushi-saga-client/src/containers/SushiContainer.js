import React, { Fragment } from 'react'
import MoreButton from '../components/MoreButton'
import Sushi from '../components/Sushi'

const SushiContainer = ({ eatSushi, sushis, getNextFourSushis, hasSushiBeenEaten }) => {
  return (
    <Fragment>
      <div className="belt">
        {
          sushis.map(sushi => <Sushi eatSushi={eatSushi} sushi={sushi} eaten={hasSushiBeenEaten(sushi)} />)
        }
        <MoreButton getNextFourSushis={getNextFourSushis} />
      </div>
    </Fragment>
  )
}

export default SushiContainer