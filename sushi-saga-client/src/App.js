import React, { Component } from 'react';
import SushiContainer from './containers/SushiContainer';
import Table from './containers/Table';

const API = "http://localhost:3001/sushis"

class App extends Component {

  state ={
    sushis: [],
    money: 100,
    sushiIndex: 0,
    eatenSushi: []
  }

  getSushi = () => {
    return fetch(API)
    .then(resp => resp.json())
    .then(sushis => this.setState({ sushis }))
  }

  currentFourSushi = () => {
    const { sushiIndex } = this.state
    return this.state.sushis.slice(sushiIndex, sushiIndex + 4)
  }

  nextFourSushis = () => {
    const { sushiIndex, sushis } = this.state
    const nextIndex = sushiIndex + 4 < sushis.length ? sushiIndex + 4 : 0
    this.setState({ sushiIndex: nextIndex })
  }

  buySushi = (sushiPiece) => {
    if (this.state.money < sushiPiece.price) {
      alert(`You can't afford to pay for that one! You have ${this.state.money}, that sushi's price is ${sushiPiece.price}`)
      return
    }
    if (this.sushiEaten(sushiPiece)) {
      alert(`You have already eaten the ${sushiPiece.name}`)
      return
    }
    this.setState({ eatenSushi: [...this.state.eatenSushi, sushiPiece] })
    this.setState({ money: this.state.money - sushiPiece.price })
  }

  sushiEaten = (sushiPiece) => {
    return this.state.eatenSushi.includes(sushiPiece)
  }

  componentDidMount() {
    this.getSushi()
  }

  render() {
    const { nextFourSushis, buySushi, sushiEaten } = this
    const { eatenSushi, money } = this.state
    return (
      <div className="app">
        <SushiContainer  sushis={this.currentFourSushi()} nextFourSushis={nextFourSushis} sushiEaten={sushiEaten} buySushi={buySushi}/>
        <Table money={money} eatenSushi={eatenSushi} />
      </div>
    );
  }
}

export default App;