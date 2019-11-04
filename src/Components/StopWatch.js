import React, { useState } from 'react'
import MajorClock from './MajorClock'
import ControlButtons from './ControlButtons'
import SplitTimes from './SplitTimes'

let intervalHandle = null

export default () => {
  const [isStart,setIsStart] = useState(false)
  const [startTime,setStartTime] = useState(null)
  const [currentTime,setCurrentTime] = useState(null)
  const [splits,setSplits] = useState([])

  const onSplit = () => {
    setSplits([...splits, currentTime - startTime])
  }


  const onStart = () => {
    setIsStart(true)
    setStartTime(new Date())
    setCurrentTime(new Date())
    intervalHandle = setInterval(() => {
      setCurrentTime(new Date())
    }, 1000 / 60); 
  }


  const onPause = () => {
    clearInterval(intervalHandle);
    intervalHandle = null;
    setIsStart(false)
  }

  const onReset = () => {
    setStartTime(null)
    setCurrentTime(null)
    setSplits([])
  }

  return (
    <>
      <MajorClock
        milliseconds={currentTime - startTime}
      />
      <ControlButtons
         activated={isStart}
         onStart={onStart}
         onPause={onPause}
         onReset={onReset}
         onSplit={onSplit}
      />
      <SplitTimes
        value={splits}
      />
    </>
  )
}