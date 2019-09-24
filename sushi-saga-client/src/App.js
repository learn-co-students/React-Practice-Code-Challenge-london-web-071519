import React, { Component } from 'react';
import SushiContainer from './containers/SushiContainer';
import Table from './containers/Table';

// Endpoint!
const API = "http://localhost:3000/sushis"

class App extends Component {
  state = {
    sushis: [],
    sushiIndex: 0, 
    money: 100, 
    eatenSushis: []
  }

getSushis = () => {
  return fetch("http://localhost:3000/sushis")
  .then(resp => resp.json())
  .then(sushis => this.setState({ sushis}))
}  


  getFour = () => this.state.sushis.slice(this.state.sushiIndex, this.state.sushiIndex + 4)
  

  moreSushi = () => {
    let newIndex = this.state.sushiIndex + 4
    this.setState({sushiIndex: newIndex}) 
  }

 eatenSushi = sushi => {
  return this.state.eatenSushis.includes(sushi) }

  eatSushis = sushi => {
    if (sushi.price < this.state.money) {
    this.setState({ eatenSushis: [...this.state.eatenSushis, sushi] })}
    else return 
    }


  changeMoney = sushi => {
  if (sushi.price < this.state.money) {
    const newMoney = this.state.money - sushi.price  
    this.setState( {money: newMoney })
  }
  else return alert("You cant afford this sushi") 
  }

// removeSushi = (id) => {
//   const newSushis = this.state.sushis.filter(sushi => 
//       sushi.id !== id) 
//       this.setState({sushis: newSushis})
//     }


componentDidMount () {
  this.getSushis()
}

  render() {
    const sushis = this.getFour()
    return (
      <div className="app">
        <SushiContainer
        eatenSushi={this.eatenSushi}
        removeSushi={this.removeSushi}  
        sushis={sushis}
        eatSushis={this.eatSushis}
        moreSushi={this.moreSushi}
        changeMoney={this.changeMoney}
        />
        <Table money={this.state.money}
        addPlate={this.state.eatenSushis}/>
      </div>
    );
  }

}

export default App;