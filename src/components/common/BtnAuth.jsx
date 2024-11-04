import PropTypes from "prop-types";
import { Link } from "react-router-dom";

const btnAuth = ({isLogin = false}) => {

  return (
    <div>
      <Link to={`/auth?section=${isLogin ?"Login":"Register"}`} >
        <button 
          className="m-20  text-xs px-3 py-1 border border-secondary rounded-md  bg-primary shadow-lg shadow-gray-400 hover:bg-selecter hover:text-primary"
          >{isLogin ?"Iniciar Sesión" :"Registrarse"}
        </button>
      </Link>
    </div>
  )
}

btnAuth.propTypes = {
  isLogin: PropTypes.bool
}
export default btnAuth