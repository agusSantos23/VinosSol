import { useTranslation } from "react-i18next"
import { Link } from "react-router-dom"

const Footer = () => {

  const { t } = useTranslation()

  return (
    <footer className="relative grid grid-cols-4 gap-24 py-10 px-5 bg-secondary text-white text-center">

      <div >
        <h3 className="text-lg font-semibold font-lora tracking-wider">{t("footer.title.vine")}</h3>
        <ul className="font-thin tracking-wider opacity-70 hover:opacity-100">
          
          <li className="hover:scale-110">
            <a href="#1">{t("landingPage.tinto.h2")}</a>
          </li>
          
          <li className="hover:scale-110">
            <a href="#2">{t("landingPage.blanco.h2")}</a>
          </li>
                   
          <li className="hover:scale-110">
            <a href="#3">{t("landingPage.rosado.h2")}</a>
          </li>    
          
          <li className="hover:scale-110">
            <a href="#4">{t("landingPage.generoso.h2")}</a>
          </li>
          
          <li className="hover:scale-110">
            <a href="#5">{t("landingPage.oporto.h2")}</a>
          </li>    
          
          <li className="hover:scale-110">
            <a href="#6">{t("landingPage.vermut.h2")}</a>
          </li>
          
          
        </ul>
      </div>

      <div >
        <h3 className="text-lg font-semibold font-lora tracking-wider">{t("footer.title.ourWines")}</h3>
        <ul className="font-thin tracking-wider opacity-70 hover:opacity-100">
          <li className="hover:scale-110">
            <Link to="/store?wine=1">{t("landingPage.tinto.h2")}</Link>
          </li>

          <li className="hover:scale-110">
            <Link to="/store?wine=2">{t("landingPage.blanco.h2")}</Link>
          </li>

          <li className="hover:scale-110">
            <Link to="/store?wine=3">{t("landingPage.rosado.h2")}</Link>
          </li>

          <li className="hover:scale-110">
            <Link to="/store?wine=4">{t("landingPage.generoso.h2")}</Link>
          </li>

          <li className="hover:scale-110">
            <Link to="/store?wine=5">{t("landingPage.oporto.h2")}</Link>
          </li>

          <li className="hover:scale-110">
            <Link to="/store?wine=6">{t("landingPage.vermut.h2")}</Link>
          </li>
        </ul>
      </div>

      <div className="grid grid-cols-1 gap-4">
        <div>
          <h3 className="text-lg font-semibold font-lora tracking-wider">{t("footer.title.section")}</h3>
          <ul className="font-thin tracking-wider opacity-70 hover:opacity-100">
            <li className="hover:scale-110">{t("auth.logIn")}</li>
            <li className="hover:scale-110">{t("auth.register")}</li>
            <li className="hover:scale-110">{t("footer.title.list")}</li>
            <li className="hover:scale-110">{t("footer.title.cart")}</li>
            <li className="hover:scale-110">{t("footer.title.profile")}</li>
          </ul>
        </div>

        <div className="col-span-1">
          <Link to="/termsconditions" >
            <h3 className="text-lg font-semibold font-lora tracking-wider hover:text-selected duration-200 ease-in-out">{t("footer.title.privacy")}</h3>       
          </Link>
        </div>
      </div>

      <div >
        <h3 className="text-lg font-semibold font-lora tracking-wider">{t("footer.title.contact")}</h3>
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
