import React, { useEffect, useState } from 'react'

function SunsetWidget({sys}) {
    const [date, setDate] = useState(null);

    useEffect(()=> {
        if(sys){
            const sunset = new Date(sys.sunset * 1000)
            setDate(convert12Hours(sunset));
        }
    },[sys]);
    const convert12Hours = (date) => {
        let hours = date.getHours();
        let ampm = hours >= 12 ? 'PM' : 'AM';
        hours = hours % 12;
        let minutes = date.getMinutes();
        minutes = minutes < 10 ? '0'+ minutes : minutes;
        let seconds = date.getSeconds();
        seconds = seconds < 1 ? '0' + seconds : seconds;

        return `${hours}:${minutes}:${seconds} ${ampm}`;
    }
    console.log(date)
  return (
    <div className='card'>
        <div style={{ display:"flex", flexDirection:"row"}}>
        <img className="icon" src = {`${process.env.PUBLIC_URL}/cloud-sun.svg`} alt="Wind" />
        <h2>Sunset</h2>
        </div>
        <div>
            <h1>{date}</h1>
        </div>
    </div>
  )
}

export default SunsetWidget