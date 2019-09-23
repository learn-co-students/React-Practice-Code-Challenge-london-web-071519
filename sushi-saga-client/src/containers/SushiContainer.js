import React, {Fragment} from 'react';
import MoreButton from '../components/MoreButton';
import Sushi from '../components/Sushi';

const SushiContainer = ({sushis, handleClick, more, eaten}) => {
	return (
		<Fragment>
			<div className="belt">
				{sushis.map((sushi) => (
					<Sushi
						sushi={sushi}
						handleClick={handleClick}
						key={sushi.id}
						eaten={eaten(sushi)}
					/>
				))}
				<MoreButton more={more} />
			</div>
		</Fragment>
	);
};

export default SushiContainer;
