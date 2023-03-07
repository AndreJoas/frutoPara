import "./styles.css"
import bag from "../procurandoComponente/bag.svg";
import heart from "../procurandoComponente/heart.svg";
import user from "../procurandoComponente/user.svg";
import Lupa from "../procurandoComponente/lupa.svg";

export default function Procurando() {
    return (
        <div className="cardprocurar">
            <div className="procurar">     
                <div><img   className="lup" src={Lupa} /></div>
                <input className="ip2" type="text" placeholder="O que está procurando?" />
            </div>
            <div className="icons">
                <div className="imgcard"><img src={user} alt="" /></div>
                <div className="imgcard"><img src={heart} alt="" /></div>
                <div className="imgcard"><img src={bag} alt="" /></div>
            </div>

        </div>
    )
}