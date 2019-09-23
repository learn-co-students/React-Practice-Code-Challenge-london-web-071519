import React, { Fragment } from 'react'
import MoreButton from '../components/MoreButton'

import Sushi from '../components/Sushi'

class SushiContainer extends React.Component {

  state = {
    startingIndex: 0
  }

  incremetSushiSlice = () => {
    const {sushis} = this.props
    const {startingIndex} = this.state

    const nextIndex = startingIndex + 4 >= sushis.length ? 0 : startingIndex + 4
    this.setState({ startingIndex: nextIndex })
  }

  getCurrentSushi = () => {
    const {sushis} = this.props
    const {startingIndex} = this.state
    return sushis.slice(startingIndex, startingIndex + 4)
  }

  render() {
    const {incremetSushiSlice, getCurrentSushi} = this
    const {updateMoneyLeft, updateSushisEaten, moneyLeft} = this.props

    return (
      <Fragment>
        <div className="belt">
          {getCurrentSushi().map(sushi => < Sushi key={sushi.id} sushi={sushi} updateMoneyLeft={updateMoneyLeft} updateSushisEaten={updateSushisEaten} moneyLeft={moneyLeft}/>)}
          <MoreButton incremetSushiSlice={incremetSushiSlice}/>
        </div>
      </Fragment>
    )
  }
}

export default SushiContainer