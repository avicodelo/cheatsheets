//importante este string para el correcto funcionamiento del error
'use client'

export default function error() {
    return (
        <p style={{backgroundColor:"orange"}}>
            ❌ Ha ocurrido un fallo en la carga de comentarios
        </p>
    )
}
