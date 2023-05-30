import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
interface responseType{
  userId: number,
    id: number,
    title: string,
    body:string
}
function App() {
  const [count, setCount] = useState(0)
  const [res,setRest] = useState<responseType[]>([])
  const callApi = async()=>{
    const URL = 'https://jsonplaceholder.typicode.com/posts/1'
    try{
      const response = await fetch(URL);
      if(response.ok){
        const data:responseType = await response.json();
        const resObj:responseType[] = [...res];
        data && resObj.push(data);
        setRest(resObj)
      }else{
        throw new Error('network error');
      }

    }catch(err){
      console.log(err)
    }
  }
  const btnClick = () =>{
    callApi();
    setCount((count) => count + 1)
  }
  console.log(res)
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
        {res.map((list:responseType,i:number)=>{
          console.log(list);
          return (
            <p key={i}>{list.title}</p>
          )
          
        })}
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
