
//es necesario instalar el paquete de react-router-dom
//importamos las funciones de react-router y las de las páginas que queremos enrutar
import { BrowserRouter, Route, Routes, NavLink } from "react-router-dom";
import Dashboard from "./Pages/Dashboard";
import Index from "./Pages/Index";
import Record from "./Pages/Record";


export default function Router() {
  return (
    <div>
      {/* Iniciamos el BrowserRouter que englobará todo lo relativo al enrutado */}
      <BrowserRouter >

        {/* NavLink establece los enlaces a las diferentes páginas. */}
        <div className="nav-bar">
          <NavLink className={(navData) => navData.isActive ? "active-link":"nav-item"} to="/dashboard">Dashboard</NavLink>
          <NavLink className={(navData) => navData.isActive ? "active-link":"nav-item"} to="/record">Usuarios</NavLink>
        </div>


        {/* Aquello que valla dentro de Routes serán las diferentes rutas de las páginas */}
        <Routes>
          {/* Cada ruta tiene que estar iniciada con Route. El camino al componente se indica con path y el componente con element */}
          {/* Para indicar la página de inicio se usa el atributo index */}
          <Route index element={<Index />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/record" element={<Record />}>
            <Route path=":user" element={<Record />} />
          </Route>

          {/* Así se indica una página que no existe */}
          <Route path="*" element={<h1>Error 404: La página no existe</h1>} />
        </Routes>

      </BrowserRouter>
    </div>
  )
}
