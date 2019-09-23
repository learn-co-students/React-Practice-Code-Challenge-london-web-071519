import React, {Component} from 'react';
import SushiContainer from './containers/SushiContainer';
import Table from './containers/Table';
import API from './API';

// Endpoint!

class App extends Component {
	state = {
		sushis: [],
		sushiIndex: 0,
		wallet: 100,
		sushisEaten: []
	};

	//Helper to get sushis and update state
	getSushis = () =>
		API.getSushis().then((resp) => this.setState({sushis: resp}));

	//Only run when the components are loaded
	componentDidMount() {
		this.getSushis();
	}

	//canAfford?
	canAfford = (sushi) => sushi.price <= this.state.wallet;

	//wallet
	adjustLeftMoney = (sushi) => {
		this.setState({wallet: this.state.wallet - sushi.price});
	};

	//update sushi index
	updateSushiIndex = () => {
		const {sushiIndex, sushis} = this.state;
		if (sushiIndex + 4 < sushis.length) {
			this.setState({sushiIndex: sushiIndex + 4});
		}
	};

	//update sushis eaten
	updateSushisEaten = (sushi) => {
		if (!this.state.sushisEaten.includes(sushi) && this.canAfford(sushi)) {
			this.setState({sushisEaten: [...this.state.sushisEaten, sushi]});
			this.adjustLeftMoney(sushi);
		}
	};

	//is this sushi eaten?
	sushiEaten = (sushi) => this.state.sushisEaten.includes(sushi);

	//getFourSushis
	get fourSushis() {
		const {sushis, sushiIndex} = this.state;
		return sushis.slice(sushiIndex, sushiIndex + 4);
	}

	render() {
		return (
			<div className="app">
				<SushiContainer
					sushis={this.fourSushis}
					handleClick={this.updateSushisEaten}
					more={this.updateSushiIndex}
					eaten={this.sushiEaten}
				/>
				<Table
					plates={this.state.sushisEaten}
					wallet={this.state.wallet}
				/>
			</div>
		);
	}
}

export default App;
