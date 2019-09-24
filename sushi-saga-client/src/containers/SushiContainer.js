import React, { Fragment } from 'react'
import MoreButton from '../components/MoreButton'
import Sushi from '../components/Sushi'

class SushiContainer extends React.Component {
  render() {
  return (
    <Fragment>
      <div className="belt">
        { 
         this.props.sushis.map(sushi => (
         <Sushi sushi={sushi} key={sushi.id} 
         eatenSushi={this.props.eatenSushi}  
         eatSushis={this.props.eatSushis}
         changeMoney={this.props.changeMoney}
         />
       )) }
    
        <MoreButton moreSushi={this.props.moreSushi}/>
    </div>
    </Fragment>
  )
}
}
export default SushiContainer