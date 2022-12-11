import { useState } from "react";
//Importamos useNavigate.
//Lo usaremos para redireccionar cuando se desencadenen eventos
import { useNavigate } from "react-router-dom";

export default function Dashboard() {

    const [userDesired, setUserDesired] = useState("");
    //Transferimos nuestro hook a una variable
    const navigate = useNavigate();
    const directTo = () => {
        return (e) => {
            e.preventDefault();
            //introducimos la ruta en nuestra variable para que nos redireccione
            navigate(`/record/${userDesired}`);
        }
    }
    return (
        <div className="separator">
            <h1 style={{ backgroundColor: "blue" }}>Dashboard</h1>

            <form>
                <input type="number" title="Sólo dos numeros" max="12" min="1" onChange={e => setUserDesired(e.target.value)} />
                <input type="submit" value={`Ir al usuario ${userDesired}`} onClick={directTo()} />
            </form>

        </div>
    )
}
