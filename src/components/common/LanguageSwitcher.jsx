import { useTranslation } from "react-i18next"
import Button from "./Button"

const LanguageSwitcher = () => {
  const { i18n } = useTranslation()

  const changeLanguage = (lang) => {
    i18n.changeLanguage(lang)
    localStorage.setItem("i18nextLng", lang)
  }
  

  return (
    <div className="w-32 flex justify-between">
      <Button onClick={() => changeLanguage("es")}>
        ES
      </Button>

      <Button onClick={() => changeLanguage("en")}>
        EN
      </Button>

    </div>
  )
}

export default LanguageSwitcher
