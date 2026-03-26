import React, { useRef, useState } from 'react';

const TypingTracker = () => {
    const TimerRef=useRef(null)
    const[data,setData]=useState([])
    const[stop,setStop]=useState(false)
    const typeChange=(e)=>{
        
       setData( e.target.value)
       setStop(false)

       if(TimerRef.current){
        clearTimeout(TimerRef.current)
       }
       TimerRef.current=setTimeout(()=>{
        setStop(true)
       },2000)

    }
 return(
    <>
    <div className='h-40 w-350 bg-amber-400 p-5 flex flex-col'>
        <label htmlFor='type'>type something:</label><br/>
          <input id="type" className='border-2 w-40 ' ref={TimerRef} type="text" value={data} placeholder='type something' onChange={typeChange}/>
    {stop&&(<p className="text-red-500 font-semibold">
          User stopped typing…
        </p>)}
    </div>
  
    </>
 )
};

export default TypingTracker;