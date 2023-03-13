import CardDestaque from "../cardDestaque";
import "./styles.css"


function Destaques() {
    return (
        <div className="quadrado">
            <CardDestaque name="frutas" />
            <CardDestaque name="legumes" />
            <CardDestaque name="vegetais" />
            <CardDestaque name="bebidas" />
            <CardDestaque name="alguma" />
            <CardDestaque name="alguma" />
            <CardDestaque name="alguma" />
            <CardDestaque name="alguma" />
            <CardDestaque name="alguma" />

        </div>
    )
}
export default Destaques;