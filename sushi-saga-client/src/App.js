import React, { Component } from 'react';
import SushiContainer from './containers/SushiContainer';
import Table from './containers/Table';
import Nav from './containers/Nav'

// Endpoint!
const API = "http://localhost:3000/sushis"

class App extends Component {

  state = {
    sushis: [],
    sushisEaten: [],
    moneyLeft: 100
  }

  componentDidMount = () => {
    fetch(API)
    .then(resp => resp.json())
    .then(sushis => this.setState({sushis}))
    .catch(error => alert(error.message))
  }

  updateSushisEaten = sushi => {
    this.state.sushisEaten.push('')
    this.setState({sushisEaten: this.state.sushisEaten})
  }

  updateMoneyLeft = sushiCost => {
    this.setState({moneyLeft: this.state.moneyLeft - sushiCost})
  }

  addMoreMoney = addMoney => {
    this.setState({moneyLeft: this.state.moneyLeft + addMoney})
  }

  render() {
    const {sushis, sushisEaten, moneyLeft} = this.state
    const {updateMoneyLeft, updateSushisEaten, addMoreMoney} = this
    return (
      
      <div className="app">
          <Nav addMoreMoney={addMoreMoney}/> 
          <SushiContainer sushis={sushis} updateMoneyLeft={updateMoneyLeft} updateSushisEaten={updateSushisEaten} moneyLeft={moneyLeft}/>
          <Table sushisEaten={sushisEaten} moneyLeft={moneyLeft}/>
        </div>
    
    );
  }
}

export default App;