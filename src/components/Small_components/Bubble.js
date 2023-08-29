function Bubble(props){
    return(
        <img src={props.image} alt="C#" className="bubbles" style={{marginLeft:props.left, marginRight:props.right, marginTop:props.top}}/>
    )
}

export default Bubble;