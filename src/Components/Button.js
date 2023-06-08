/*import "../Styles.css"*/

const Button = (props)=>{
    return(
        <div>
        <button style={{backgroundColor:props.color}}>{props.btntext}</button>
        {props.children}
        </div>
    )
    
}
export default Button;