// import './App.css'
import Title from './Title'
import BeautifulScreen from './BeautifulScreen'
import NumberButton from './NumberButton'
import OperatorButton from './OperatorButton'
import EgalButton from './EqualButton'
import ItSOverNineThousand from './ItSOverNineThousand'
import { useState } from 'react';


function Calculator() {

const [resultScreen, setResultScreen] = useState("0");
const [operationResults, setOperationResults] = useState("0")

  const numbers = [7,8,9,4,5,6,1,2,3,0];
  const operators = ["+", "-", "*","/", "C","."];
   
  function handleClick(value) {
    if (value==="C") {
      handleClickRemove("");
      // setResultScreen("0")
    } else{
      if (resultScreen ==='0'){
        
      setResultScreen(value);
     
        
      } else {
        
        setResultScreen(""+ resultScreen  + value);
        
      }
      // console.log(setResultScreen(resultScreen));
    }

  if (value === "=") {
        handleClickEgal()
  }

    }
    
    function handleClickRemove(){
   
    setResultScreen("0");
  }

  function handleClickEgal(){
   console.log(eval(resultScreen));
   const resCalcul = eval(resultScreen);
  
  if (resCalcul >= 9000) {
      
    console.log("!It’s Over 9000 !!");
    setResultScreen("It’s Over 9000 !!");

    setTimeout(() => setResultScreen(resCalcul), 1000);

  } else
   setResultScreen(resCalcul);
  }

  // function handleDisplayNine(){

  //   if (resultScreen>=9000){
      
  //     console.log("It’s Over 9000 !!!");
  //     alert("It’s Over 9000 !!!");

  //   }



  // }
 
  return (
    <>
     <Title text="Calculator 9000"/>
    <div className='content'> 
    {/* <ItSOverNineThousand/> */}
    <BeautifulScreen  text= {resultScreen}/>
    <div className='buttoncontent'>
      
      {numbers.map((number, index) => (
        <NumberButton key={index} num={number} handleClick={handleClick}  />
      ))}
      
       {operators.map((operator,index) => (
     <OperatorButton key={index} opera={operator} handleClick={handleClick}  />
     
     ))}
     <EgalButton egal="="  handleClickEgal={handleClickEgal} handleClick={handleClick}/>
     </div>
     </div>
 </>

  ) }

export default Calculator;