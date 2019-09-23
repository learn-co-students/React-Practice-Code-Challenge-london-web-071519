import React, { Component } from 'react'
import SushiContainer from './containers/SushiContainer'
import Table from './containers/Table'
import API from './api'

class App extends Component {

  state = {
    sushis: [],
    money: 100,
    sushiIndex: 0,
    eatenSushis: []
  }

  getSushis = () => {
    // get the sushis and put them in state
    API.getSushis()
      .then(sushis => this.setState({ sushis }))
  }

  iCantAffordIt = amount => amount > this.state.money

  spendMoney = amount => {
    // as long as I have money
    // take money away from me
    if (this.iCantAffordIt(amount)) {
      alert(`
        Not enough moneh $$$.
        You have ${this.state.money}.
        You are trying to spend ${amount}.
      `)
      return
    }
    this.setState({ money: this.state.money - amount })
  }

  getNextFourSushis = () => {
    // increase index by four
    // start over when the end of the sushis is reached
    const { sushiIndex, sushis } = this.state
    const nextIndex = sushiIndex + 4 < sushis.length
      ? sushiIndex + 4
      : 0

    this.setState({ sushiIndex: nextIndex })
  }

  eatSushi = sushi => {
    // put a sushi in the eatenSushi array
    if (this.iCantAffordIt(sushi.price)) {
      alert("You can't afford that one!")
      return
    }
    if (this.hasSushiBeenEaten(sushi)) {
      alert('You already ate that one!')
      return
    }
    this.spendMoney(sushi.price)
    this.setState({ eatenSushis: [...this.state.eatenSushis, sushi] })
  }

  get currentSushis() {
    const { sushis, sushiIndex } = this.state
    return sushis.slice(sushiIndex, sushiIndex + 4)
  }

  hasSushiBeenEaten = sushi => {
    return this.state.eatenSushis.includes(sushi)
  }

  componentDidMount() {
    this.getSushis()
  }

  render() {
    const { money, eatenSushis } = this.state
    const {
      currentSushis,
      eatSushi,
      getNextFourSushis,
      hasSushiBeenEaten
    } = this
    return (
      <div className="app">
        <SushiContainer
          sushis={currentSushis}
          eatSushi={eatSushi}
          getNextFourSushis={getNextFourSushis}
          hasSushiBeenEaten={hasSushiBeenEaten}
        />
        <Table money={money} eatenSushis={eatenSushis} />
      </div>
    )
  }
}

export default App;