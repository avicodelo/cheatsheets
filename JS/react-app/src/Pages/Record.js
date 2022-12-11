import { NavLink } from "react-router-dom";
import { useState, useEffect } from "react";
//importamos el hook para acceder a los parámetros
import { useParams } from "react-router-dom";

export default function Record() {

    //el nombre de la variable tiene que coincidir con el parámetro que introdujimos (:user)
    //atención a los corchetes
    const { user } = useParams()

    const [userData, setUserData] = useState({})
    const FAKE_URL = "https://reqres.in/api/users/";

    //coge los datos del servidor
    useEffect(() => {
        fetch(FAKE_URL + user)
            .then(response => response.json())
            .then(data => setUserData(data))

    }, [user]);

    const showUser = (user) => {
        if (user !== undefined && user <= 12) {
            return (
                <div>
                    <h2>{`Mostrando usuario ${user}`}</h2>
                    {/* El interrogante hace que si no existe la propiedad posterior al punto, no lance error.
                    En este caso es útil ya que tenemos que esperar a nuestro fetch */}
                    <li>{userData.data?.first_name}</li>
                    <li>{userData.data?.last_name}</li>
                    <li>{userData.data?.email}</li>
                    <img src={userData.data?.avatar} alt="Profile" />
                </div>
            )
        }
    }

    return (
        <div className="separator">
            <h1 style={{ backgroundColor: "blue" }}>Record</h1>

            <div className="nav-bar">
                <NavLink to="/record/1">Usuario1</NavLink>
                <NavLink to="/record/2">Usuario2</NavLink>
            </div>
            {showUser(user)}
        </div>
    )
}
