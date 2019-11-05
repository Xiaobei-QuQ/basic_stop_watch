import React from 'react';

export default ({activated, onStart, onPause, onReset, onSplit}) => {
  if (activated) {
    return (
      <div>
        <button  className='left-btn'  onClick={onSplit}>计次</button>
        <button className='right-btn' onClick={onPause}>停止</button>
      </div>
    );
  } 
  return (
    <div>
      <button className='left-btn' onClick={onReset}>复位</button>
      <button className='right-btn' onClick={onStart}>启动</button>
    </div>
  );
}