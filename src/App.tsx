import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)
  const [res,setRest] = useState<string[]>([])
  const callApi = ()=>{
    const URL = 'https://jsonplaceholder.typicode.com/posts'
    fetch(URL)
    .then(response => response.json())
    .then((data:string) => {
      const resObj:string[] = [...res];
      resObj.push(data ? data : '');
      setRest(resObj);
    })
    .catch(error => console.error(error));
  }
  const btnClick = () =>{
    callApi();
    setCount((count) => count + 1)
  }
  return (
    <>
      <div>
        <a href="https://vitejs.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={btnClick}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.tsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
      <p>bulid test yns co</p>
    </>
  )
}

export default App;
