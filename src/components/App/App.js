import React, { useState, useRef, useEffect } from 'react';
import Timer from 'react-compound-timer';
import './App.css';

const App = () => {
  let fakePerson = {
    username: "bowtiesandbooks",
    legal_name: "Jesse",
    preferred_name: "Jessica"
    // name: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
  };
  return (
    <div className="twinkling">
      <div className="stars">
        <div className="clouds">
          <div className="timer-container">
            <Timer className="timer"
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
                  <div >

                    <div className="welcome-message">
                      <h1>Welcome {fakePerson.preferred_name}!!</h1>

                    </div>
                    {/* <Timer.Days /> days <Timer.Hours /> hours */}

                    <div className="time-text">

                      <Timer.Minutes /> minutes {" "}

                      <Timer.Seconds /> seconds
                    </div>
                    {/* <Timer.Milliseconds /> milliseconds */}
                  </div>

                  {/* <div className="state-text">{getTimerState()} </div> */}
                  {/* <div>{getTime()}</div> */}
                  <br />
                  <div>
                    <button className="btn" onClick={start}>Start</button>
                    <button className="btn" onClick={pause}>Pause</button>
                    <button className="btn" onClick={resume}>Resume</button>
                    <button className="btn" onClick={stop}>Stop</button>
                    <button className="btn" onClick={reset}>Reset</button>
                  </div>
                </>
              )}
            </Timer>
          </div>
        </div>
      </div>
    </div>
  )
};
export default App;
