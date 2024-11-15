import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import Button from "./Button"
import { useTranslation } from "react-i18next"


const BtnAuth = ({isLogin = false}) => {
  const { t } = useTranslation()


  return (
    <Button>
      <Link to={`/auth?section=${isLogin ?"Login":"Register"}`}>
        {t("landingPage.Authenticate")}
      </Link>
    </Button>
  )
}

BtnAuth.propTypes = {
  isLogin: PropTypes.bool
}
export default BtnAuth