import "./styles.css"

function CardDestaque(props){
    return(
            <div className="card">
                <div className="elipse"></div>
                <h3>{props.name}</h3>
            </div>
    )
}
export default CardDestaque;