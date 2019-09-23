import React, { } from 'react'

class Sushi extends React.Component {

  state = {
    sushiEaten: false
  }

  eatSushi = () => {
    if (this.state.sushiEaten !== false) return
    const {sushi, updateMoneyLeft, updateSushisEaten, moneyLeft} = this.props

    if (moneyLeft - sushi.price >= 0) {
      this.setState({sushiEaten: !this.state.sushiEaten})
      updateMoneyLeft(sushi.price)
      updateSushisEaten(sushi)
    }
  }

  render() {
    const {eatSushi} = this
    const {sushi} = this.props
    const {sushiEaten} = this.state
    return (
      <div className="sushi">
        <div className="plate" 
            onClick={eatSushi}>
          { 
            sushiEaten ? null : <img src={sushi.img_url} width="100%" alt={sushi.name}/>
          }
        </div>
        <h4 className="sushi-details">
          {sushi.name} - ${sushi.price}
        </h4>
      </div>
    )
  }
}

export default Sushi