import PropTypes from "prop-types"
import { useTranslation } from "react-i18next"
import { Link } from "react-router-dom"

const WineDescription = ({ wine }) => {

  const { t } = useTranslation()

  let img
  let title
  let descOne
  let descTwo
  let style

  switch (wine) {
    case 1:
      img =  "/src/assets/img/redWine.png"
      title = "landingPage.tinto.h2"
      descOne = "landingPage.tinto.descOne"
      descTwo = "landingPage.tinto.descTwo"
      style = "bg-secondary"
      break

    case 2:
      img =  "/src/assets/img/whiteWine.png"
      title = "landingPage.blanco.h2"
      descOne = "landingPage.blanco.descOne"
      descTwo = "landingPage.blanco.descTwo"
      style = "bg-quaternary"
      break

    case 3:
      img =  "/src/assets/img/roseWine.png"
      title = "landingPage.rosado.h2"
      descOne = "landingPage.rosado.descOne"
      descTwo = "landingPage.rosado.descTwo"
      style = "bg-secondary"
      break

    case 4:
      img =  "/src/assets/img/generosoWine.png"
      title = "landingPage.generoso.h2"
      descOne =  "landingPage.generoso.descOne"
      descTwo =  "landingPage.generoso.descTwo"
      style = "bg-quaternary"
      break

    case 5:
      img =  "/src/assets/img/oportoWine.png"
      title = "landingPage.oporto.h2"
      descOne = "landingPage.oporto.descOne"
      descTwo = "landingPage.oporto.descTwo"
      style = "bg-secondary"
      break

    case 6:
      img =  "/src/assets/img/vermuWine.png"
      title = "landingPage.vermut.h2"
      descOne = "landingPage.vermut.descOne"
      descTwo = "landingPage.vermut.descTwo"
      style = "bg-quaternary"
      break
  }

  return (
    
    <section id={wine} className={"h-screen flex justify-between items-center p-12 font-thin " + style}>

      <img src={img} alt={title} className="w-1/3 h-auto rounded-md" />

      <div className="w-3/5 h-5/6 flex flex-col justify-between items-center text-center text-white">

        <h2 className="text-center text-5xl font-bold font-fire">{t(title)}</h2>

        <div className="relative w-full h-72 mb-10 text-lg">

          <p className="absolute left-0 w-3/4 text-pretty text-left">{t(descOne)}</p>
          <p className="absolute right-7 bottom-0 w-4/5 text-wrap text-left">{t(descTwo)}</p>

        </div>
        
        <Link to={`/store?wine=${wine}`} className="w-60 text-xl font-bold border-2 py-3 px-10 rounded hover:bg-selected shadow-md shadow-gray-400 duration-200 ease-in">{t("landingPage.buttonBuy")}</Link>
      </div>
    </section>
  )
}



WineDescription.propTypes = {
  wine: PropTypes.number,
}



export default WineDescription