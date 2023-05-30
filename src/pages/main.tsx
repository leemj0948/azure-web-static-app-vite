import { useState } from 'react'
import reactLogo from '../assets/react.svg'
import viteLogo from '../../public/vite.svg'

import '../App.css'
interface responseType{
  userId: number,
    id: number,
    title: string,
    body:string
}
function Main() {
  const [count, setCount] = useState(0)
  const [res,setRest] = useState<responseType[]>([])
  const callApi = async()=>{
    const URL = 'https://jsonplaceholder.typicode.com/posts'
    console.log('처리전')
    try{
      const response = await fetch(`${URL}/1`);
      const response1 = await fetch(`${URL}/2`);
      const response2 = await fetch(`${URL}/3`);
      const response3 = await fetch(`${URL}/4`);
      const response4 = await fetch(`${URL}/5`);
      
      const Parallel = Promise.all([response,response1,response2,response3,response4])
      console.log(Parallel,'Parallel')
      console.log('response:',response.status,'response1:',response1.status,'response2:',response2.status,'response3:',response3.status,'response4:',response4.status)
      console.log('처리완료')
      if(response.ok){
        const data:responseType = await response.json();
        const resObj:responseType[] = [...res];
        data && resObj.push(data);
        setRest(resObj)
      }else{
        console.log('오류')
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

export default Main;
