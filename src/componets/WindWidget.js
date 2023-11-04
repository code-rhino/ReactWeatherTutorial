import React from 'react'

function WindWidget({wind}) {
    //console.log(wind);

  return (
    <div className='card'>
        <div style={{ display:"flex", flexDirection:"row"}}>
        <img className="icon" src = {`${process.env.PUBLIC_URL}/wind.svg`} alt="Wind" />
        <h2>Wind</h2>
        </div>
        <div>
            <h1>{wind?.speed}</h1>
        </div>
    </div>
  )
}

export default WindWidget