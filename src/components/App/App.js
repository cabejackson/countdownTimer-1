import React, { useState, useRef, useEffect } from 'react';
import Timer from 'react-compound-timer';
import './App.css';

const App = () => {
  return (
    <Timer
      initialTime={1800000}
      startImmediately={false}
      // onStart={() => console.log('onStart hook')}
      // onResume={() => console.log('onResume hook')}
      // onPause={() => console.log('onPause hook')}
      // onStop={() => console.log('onStop hook')}
      // onReset={() => console.log('onReset hook')}
      direction="backward"
    >
      {({ start, resume, pause, stop, reset, getTimerState, getTime }) => (
        <>
          <div>
            {/* <Timer.Days /> days
                <Timer.Hours /> hours */}
            <Timer.Minutes /> minutes
                <Timer.Seconds /> seconds
                {/* <Timer.Milliseconds /> milliseconds */}
          </div>

          <div>{getTimerState()} </div>
          {/* <div>{getTime()}</div> */}
          <br />
          <div>
            <button onClick={start}>Start</button>
            <button onClick={pause}>Pause</button>
            <button onClick={resume}>Resume</button>
            <button onClick={stop}>Stop</button>
            <button onClick={reset}>Reset</button>
          </div>
        </>
      )}
    </Timer>
  )
};
export default App;
