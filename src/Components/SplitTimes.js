import MajorClock from './MajorClock';
import React from 'react';
export default ({value=[]}) => {
  return value.map((v, k) => (
    <MajorClock key={k} milliseconds={v} />
  ));
};