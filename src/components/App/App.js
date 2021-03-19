import React, { useState, useRef, useEffect } from 'react';
//import Canvas from './Canvas';
import Timer from 'react-compound-timer';
import Background from '../Backgrounds/Background';
import CanvasGalaxy from '../Canvas/CanvasGalaxy'
import './App.css';

const App = () => {
  return (
    <>
      <CanvasGalaxy />
      {/* <CanvasGalaxy/> */}
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
        {/* <CanvasGalaxy /> */}

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
        {/* <CanvasGalaxy /> */}

      </Timer>
      {/* </CanvasGalaxy> */}
    </>

  )
};
export default App;
