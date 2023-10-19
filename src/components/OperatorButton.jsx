function OperatorButton(props){


    
   

    return(  
      
        <button className='opebutton' onClick={()=>{props.handleClick(props.opera)}}> {props.opera}</button>
   
  )

}
 export default OperatorButton