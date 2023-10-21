function EgalButton(props){


    
   

    return(  
      
        <button   className='egalbutton' onClick={()=> {props.handleClickEgal(props.egal)}}> {props.egal}</button>
   
  )

}
 export default EgalButton