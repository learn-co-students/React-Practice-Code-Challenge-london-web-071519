import React, { Component } from 'react';
import SushiContainer from './containers/SushiContainer';
import Table from './containers/Table';

// Endpoint!
const API = "http://localhost:3000/sushis"


class App extends Component {
  
  state = {
    sushis : [],
    startingSushiIndex : 0,
    eatenSushis: [],
    tableEmptyPlates: [],
    moneys: 100
  }

  componentDidMount() {
    fetch(API)
    .then(resp => resp.json())
    .then(sushis => {
      this.setState({ sushis: sushis })
     })
  }

  moreSushiChangeIndex = () => {
    let newIndex = this.state.startingSushiIndex
    newIndex + 4 < this.state.sushis.length ? newIndex = this.state.startingSushiIndex + 4 : newIndex = 0
    this.setState({ startingSushiIndex: newIndex})
  }

  eatingSushi = (sushi) => {
    let moneys = this.state.moneys - sushi.price
    if (moneys < 0) return 
    if (this.state.eatenSushis.includes(sushi.id)) return 
    let eatenSushis = [...this.state.eatenSushis, sushi.id]
    let tableEmptyPlates = [...this.state.tableEmptyPlates, '']
    this.setState({ eatenSushis : eatenSushis })
    this.setState({ tableEmptyPlates: tableEmptyPlates})
    this.setState({ moneys : moneys })
  
  }
    

  render() {
  
    return (
      <div className="app">
        <SushiContainer sushis={this.state.sushis} eatenSushis={this.state.eatenSushis} eatingSushi={this.eatingSushi} moreSushiChangeIndex={this.moreSushiChangeIndex} startingSushiIndex={this.state.startingSushiIndex}/>
        <Table moneys={this.state.moneys} tableEmptyPlates={this.state.tableEmptyPlates}/>
      </div>
    );
  }
}

export default App;