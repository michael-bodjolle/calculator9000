function EgalButton(props){


    
   

    return(  
      
        <button   className='button' onClick={()=> {props.handleClickEgal(props.egal)}}> {props.egal}</button>
   
  )

}
 export default EgalButton