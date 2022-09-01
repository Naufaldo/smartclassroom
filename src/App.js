import logo from './logo.svg';
import './App.css';
import React,{ useState } from 'react';
function App() {
  const[lampu,setLampu] = useState(false);
  const[lampu1,setLampu1] = useState(false);
  return (
    <div className="App">
      <header className="App-header">
        Mencoba Button React tailwind 2
      <img src={logo} className="App-logo" alt="logo" />
        <p>
        <>
      <div className="grid : grid-rows-1 gap-5 text-center mt-5">
    <button
              className={
                "rounded-md w-72 h-20 align-middle " + (!lampu ? "bg-gray-400" : "bg-yellow-400")
              }
              onClick={() => {
                setLampu(!lampu);
              }}
              >
                Start
              </button>
              </div>
              <div className="grid : grid-rows-1 gap-5 text-center mt-5">
              <button 
               className={
                "rounded-md w-72 h-20 align-middle " + (!lampu1 ? "bg-gray-400" : "bg-yellow-400")
              }
              onClick={() => {
                setLampu1(!lampu1);
              }}
              >
                Stop
              </button>
              </div>

              </>
        </p>
      
      </header>
    </div>
   
  );
}

export default App;
