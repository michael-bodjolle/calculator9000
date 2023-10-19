
function NumberButton(props){

return(   
    <button className="button" onClick={()=> {props.handleClick(props.num)}}>{props.num}</button>
  )

}
 export default NumberButton
