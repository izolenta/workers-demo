import React, {useEffect, useState} from 'react';
import './App.css';

const fiboWorker: Worker = new Worker('/fibonacci.worker.js');

function App() {

  const [calc, setCalc] = useState<number|undefined>(undefined);

  useEffect(() => {
    fiboWorker.onmessage = (event: MessageEvent) => {
        const { data } = event;
        console.log('calculated '+data);
        setCalc(data);
    }
  }, []);

  const runCalc = () => {
      setCalc(undefined);
      fiboWorker.postMessage(44);
  };

  return (
    <div className="App">
      <div className={'div'}>
        <h1 className={'animate'}>A</h1>
        <h3>Web Workers Demo</h3>
      <button className={'button'} onClick={()=>runCalc()}>Calculate fibonacci of 44</button>
        {calc? <div className={'calculated'}>Calculated fibonacci: {calc}</div>:<></>}
        </div>
    </div>
  );
}

export default App;
