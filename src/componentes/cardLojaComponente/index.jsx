import "./styles.css"

function CardLoja(props){
    return(
            <div className="cardl">
                <div className="elipsel"></div>
                <h2 className="t2">{props.name}</h2>
                <h3 className="t1">{props.value}</h3>
            </div>
    )
}
export default CardLoja;