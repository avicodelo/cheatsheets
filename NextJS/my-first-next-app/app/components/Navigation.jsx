/*COMPONENTE PARA LA NAVEGACIÓN */

//imports
import Link from 'next/link'
import styles from "./Navigation.module.css"

//Creamos un array de objetos con los links para renderizarlos
const links = [{
    label: "Home",
    route: "/"
},
{
    label: "About",
    route: "/about"
},
{
    label: "Posts",
    route: "/posts"
}
]

import React from 'react'

export default function Navigation() {
    return (
        <header className={styles.header}>
            <nav>
                <ul className={styles.menu}>
                    {/* Utilizamos la constante de links para crear el menu */}
                    {links.map(({ label, route }) => (
                        <ol key={label + route}>
                            <Link href={route}>{label}</Link>
                        </ol>
                    ))}
                </ul>
            </nav>
        </header>
    )
}
