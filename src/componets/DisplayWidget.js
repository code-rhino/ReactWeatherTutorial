import React from 'react'

function DisplayWidget({weather}) {
  return (
    <div className='card'>
        <div style={{ display:"flex", flexDirection:"row"}}>
        <img className="icon" src = {`${process.env.PUBLIC_URL}/eye.svg`} alt="Wind" />
        <h2>Weather</h2>
        </div>
        <div>
            <h1>{(weather) && weather[0]?.description}</h1>
        </div>
    </div>
  )
}

export default DisplayWidget