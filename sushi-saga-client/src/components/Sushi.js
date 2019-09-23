import React, { Fragment } from 'react'

const Sushi = (props) => {
  // debugger
  return (
    <div className="sushi">
      <div
        className="plate" 
        onClick={() => props.eatingSushi(props.sushi)}
      >
        { 
          props.eatenSushis.includes(props.sushi.id)
            ? ''
            : <img src={props.sushi.img_url} width="100%" />   
        }
      </div>
      <h4 className="sushi-details">
        {props.sushi.name} - ${props.sushi.price}
      </h4>
    </div>
  )
}

export default Sushi