import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
// import Title from './components/Title'
// import BeautifulScreen from './components/BeautifulScreen'
// import NumberButton from './components/NumberButton'
// import OperatorButton from './components/OperatorButton'
// import EgalButton from './components/EqualButton'
import Calculator from './components/Calculator'

function App() {
  
  // const numbers = [9,8,7,6,5,4,3,2,1,0];
  // const operators = ["+", "-", "X","/", "C"]
 
  return (
    <>
     {/* <Title text="Calculator 9000"/>
    <div className='content'> 
    <BeautifulScreen text="0"/>
    <div className='buttoncontent'>
       {numbers.map(number => (
     <NumberButton num={number}/>
     ))}
       {operators.map(operator => (
     <OperatorButton opera={operator}/>
     ))}
     <EgalButton egal="="/>
     </div>
     </div> */}
     <Calculator/>
    
  
     

    </>
  )
}

export default App
