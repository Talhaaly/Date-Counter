
import Stageone from './ChangeStages/Stageone'

import Stage2 from './ChangeStages/Stage2'
import Stage3 from './ChangeStages/Stage3'

import { useState } from 'react'
import './App.css'

function App() {
  const [count, setCount] = useState(1);
  const [count2, setCount2] = useState(0)

  return (
    <>
     <div className='counterParent'>
    <div className='dateCounter' >
    <Stageone count={count} setCount={setCount}/>
    <Stage2 count2={count2} count={count} setCount2={setCount2}/>
    <Stage3 count2={count2}/>
    </div>
    </div>
    </>
  )
}

export default App
