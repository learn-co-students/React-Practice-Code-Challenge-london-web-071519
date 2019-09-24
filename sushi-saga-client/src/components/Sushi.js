import React, { Fragment } from 'react'

const Sushi = (props) => {

  return (
    <div className="sushi">
      <div className="plate" 
           onClick={() => (props.eatSushis(props.sushi), props.changeMoney(props.sushi))}>
        { 
          props.eatenSushi(props.sushi) ? 
          null 
          :
          <img src=
          {props.sushi.img_url} 
          width="100%" 
          alt = ""/>
        }
      </div>
      <h4 className="sushi-details">
        {props.sushi.name} - ${props.sushi.price}
      </h4>
    </div>
  )
}

export default Sushi