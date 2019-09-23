import React, {Component, Fragment} from 'react';

class Sushi extends Component {
	render() {
		const {img_url, name, price} = this.props.sushi;
		const {handleClick, sushi, eaten} = this.props;
		return (
			<div className="sushi">
				<div className="plate" onClick={() => handleClick(sushi)}>
					{eaten ? null : <img src={img_url} width="100%" />}
				</div>
				<h4 className="sushi-details">
					{name} - ${price}
				</h4>
			</div>
		);
	}
}

export default Sushi;
