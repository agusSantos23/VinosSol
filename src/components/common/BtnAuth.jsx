import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import Button from "./Button"
import { useTranslation } from "react-i18next"


const BtnAuth = ({isLogin = false}) => {
  const { t } = useTranslation()


  return (
    
    <Link to={`/auth?section=${isLogin ?"login":"register"}`}>
      <Button>
        {t("landingPage.Authenticate")}

      </Button>
    </Link>
  )
}

BtnAuth.propTypes = {
  isLogin: PropTypes.bool
}
export default BtnAuth