import { Link } from "react-router-dom"

const Footer = () => {
  return (
    <footer className="relative grid grid-cols-4 gap-24 py-10 px-5 bg-secondary text-white text-center">

      <div >
        <h3 className="text-lg font-semibold font-lora tracking-wider">De la Vid a la Copa</h3>
        <ul className="font-thin tracking-wider opacity-70 hover:opacity-100">
          <a href="#1"> 
            <li className="hover:scale-110">Tinto</li>
          </a>
          <a href="#2">
            <li className="hover:scale-110">Blanco</li>
          </a>
          <a href="#3">
            <li className="hover:scale-110">Rosado</li>
          </a>
          <a href="#4">
            <li className="hover:scale-110">Generoso</li>
          </a>
          <a href="#5">
            <li className="hover:scale-110">Oporto</li>
          </a>
          <a href="#6">
            <li className="hover:scale-110">Vermut</li>
          </a>
          
        </ul>
      </div>

      <div >
        <h3 className="text-lg font-semibold font-lora tracking-wider">Nuestros Vinos en Tienda</h3>
        <ul className="font-thin tracking-wider opacity-70 hover:opacity-100">
          <li className="hover:scale-110">Tinto</li>
          <li className="hover:scale-110">Blanco</li>
          <li className="hover:scale-110">Rosado</li>
          <li className="hover:scale-110">Generoso</li>
          <li className="hover:scale-110">Oporto</li>
          <li className="hover:scale-110">Vermut</li>
        </ul>
      </div>

      <div className="grid grid-cols-1 gap-4">
        <div>
          <h3 className="text-lg font-semibold font-lora tracking-wider">Secciones</h3>
          <ul className="font-thin tracking-wider opacity-70 hover:opacity-100">
            <li className="hover:scale-110">Iniciar Sesion</li>
            <li className="hover:scale-110">Registrarse</li>
            <li className="hover:scale-110">Lista de Favoritos</li>
            <li className="hover:scale-110">Carrito</li>
            <li className="hover:scale-110">Mi perfil</li>
          </ul>
        </div>

        <div className="col-span-1">
          <Link to="/termsconditions" >
            <h3 className="text-lg font-semibold font-lora tracking-wider hover:text-selected duration-200 ease-in-out">Politica de Privacidad</h3>       
          </Link>
        </div>
      </div>

      <div >
        <h3 className="text-lg font-semibold font-lora tracking-wider">Contactanos</h3>
        <ul className="font-thin tracking-wider opacity-70 hover:opacity-100">
          <li className="hover:scale-110">Gmail</li>
          <li className="hover:scale-110">telefono</li>
          <li className="hover:scale-110">youtube</li>
          <li className="hover:scale-110">twiter</li>
          <li className="hover:scale-110">tiktok</li>
          <li className="hover:scale-110">Instagram</li>
        </ul>
      </div>

      <h4 className="absolute right-1/2 translate-x-1/2 bottom-1">Copyright © 2024 Vinos Del Sol</h4>
      
    </footer>
  )
}

export default Footer
