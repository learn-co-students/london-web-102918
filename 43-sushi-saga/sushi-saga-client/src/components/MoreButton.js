import React from 'react'

const MoreButton = (props) => {
    return <button onClick={() => props.incrementCounter()}>
             More sushi!
           </button>
}

export default MoreButton
