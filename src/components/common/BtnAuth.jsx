import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import Button from "./Button"


const btnAuth = ({isLogin = false}) => {

  return (
    <Button>
      <Link to={`/auth?section=${isLogin ?"Login":"Register"}`}>
        Autentificarse
      </Link>
    </Button>
  )
}

btnAuth.propTypes = {
  isLogin: PropTypes.bool
}
export default btnAuth