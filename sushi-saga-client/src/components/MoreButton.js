import React from 'react'

const MoreButton = (props) => {
    return <button onClick={() => props.moreSushiChangeIndex()}>
            More sushi!
          </button>
}

export default MoreButton