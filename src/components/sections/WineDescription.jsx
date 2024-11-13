import PropTypes from "prop-types"
import { useTranslation } from "react-i18next"

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
      title = "Tinto"
      descOne = "ladingPage.tinto.descOne"
      descTwo = "ladingPage.tinto.descTwo"
      style = "bg-secondary"
      break

    case 2:
      img =  "/src/assets/img/whiteWine.png"
      title = "Algo azul"
      descOne = "Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui cumque illum facere blanditiis. Nesciunt perferendis distinctio voluptatum dolore, molestias dicta, adipisci quos, maiores tempore amet fugit optio expedita minima velit."
      descTwo = "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Velit hic commodi magnam itaque, accusamus labore a id cupiditate tenetur impedit dolorem. Cupiditate modi voluptatem soluta ad ipsum corporis maiores a!"
      style = "bg-quaternary"
      break

    case 3:
      img =  "/src/assets/img/roseWine.png"
      title = "Algo verde"
      descOne = "Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui cumque illum facere blanditiis. Nesciunt perferendis distinctio voluptatum dolore, molestias dicta, adipisci quos, maiores tempore amet fugit optio expedita minima velit."
      descTwo = "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Velit hic commodi magnam itaque, accusamus labore a id cupiditate tenetur impedit dolorem. Cupiditate modi voluptatem soluta ad ipsum corporis maiores a!"
      style = "bg-secondary"
      break

    case 4:
      img =  "/src/assets/img/generosoWine.png"
      title = "Algo naranja"
      descOne = "Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui cumque illum facere blanditiis. Nesciunt perferendis distinctio voluptatum dolore, molestias dicta, adipisci quos, maiores tempore amet fugit optio expedita minima velit."
      descTwo = "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Velit hic commodi magnam itaque, accusamus labore a id cupiditate tenetur impedit dolorem. Cupiditate modi voluptatem soluta ad ipsum corporis maiores a!"
      style = "bg-quaternary"
      break

    case 5:
      img =  "/src/assets/img/oportoWine.png"
      title = "Algo amarillo"
      descOne = "Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui cumque illum facere blanditiis. Nesciunt perferendis distinctio voluptatum dolore, molestias dicta, adipisci quos, maiores tempore amet fugit optio expedita minima velit."
      descTwo = "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Velit hic commodi magnam itaque, accusamus labore a id cupiditate tenetur impedit dolorem. Cupiditate modi voluptatem soluta ad ipsum corporis maiores a!"
      style = "bg-secondary"
      break

    case 6:
      img =  "/src/assets/img/vermuWine.png"
      title = "Algo violeta"
      descOne = "Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui cumque illum facere blanditiis. Nesciunt perferendis distinctio voluptatum dolore, molestias dicta, adipisci quos, maiores tempore amet fugit optio expedita minima velit."
      descTwo = "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Velit hic commodi magnam itaque, accusamus labore a id cupiditate tenetur impedit dolorem. Cupiditate modi voluptatem soluta ad ipsum corporis maiores a!"
      style = "bg-quaternary"
      break
  }

  return (
    
    <section className={"h-screen flex justify-between items-center p-12 font-thin " + style}>

      <img src={img} alt={title} className="w-1/3 h-auto rounded-md" />

      <div className="w-3/5 h-5/6 flex flex-col justify-between items-center text-center text-white">

        <h1 className="text-center text-5xl font-bold font-fire">{title}</h1>

        <div className="relative w-full h-64 mb-10 text-lg">

          <p className="absolute left-0 w-4/6 text-pretty text-left">{t(descOne)}</p>
          <p className="absolute right-7 bottom-0 w-4/6 text-pretty text-right">{t(descTwo)}</p>

        </div>
        
        <button className="w-60 text-xl font-bold border-2 py-3 px-10 rounded hover:bg-selected shadow-md shadow-gray-400 duration-200 ease-in">{t("ladingPage.buttonBuy")}</button>
      </div>
    </section>
  )
}



WineDescription.propTypes = {
  wine: PropTypes.number,
}



export default WineDescription