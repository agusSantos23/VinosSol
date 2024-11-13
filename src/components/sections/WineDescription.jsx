import PropTypes from "prop-types"

const WineDescription = ({ wine }) => {

  let img
  let alt
  let title
  let desc1
  let desc2
  let style

  switch (wine) {
    case 1:
      img =  "/src/assets/img/redWine.png"
      alt = "redWine"
      title = "Algo rojo"
      desc1 = "Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui cumque illum facere blanditiis. Nesciunt perferendis distinctio voluptatum dolore, molestias dicta, adipisci quos, maiores tempore amet fugit optio expedita minima velit."
      desc2 = "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Velit hic commodi magnam itaque, accusamus labore a id cupiditate tenetur impedit dolorem. Cupiditate modi voluptatem soluta ad ipsum corporis maiores a!"
      style = "bg-secondary"
      break

    case 2:
      img =  "/src/assets/img/whiteWine.png"
      alt = "whiteWine"
      title = "Algo azul"
      desc1 = "Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui cumque illum facere blanditiis. Nesciunt perferendis distinctio voluptatum dolore, molestias dicta, adipisci quos, maiores tempore amet fugit optio expedita minima velit."
      desc2 = "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Velit hic commodi magnam itaque, accusamus labore a id cupiditate tenetur impedit dolorem. Cupiditate modi voluptatem soluta ad ipsum corporis maiores a!"
      style = "bg-quaternary"
      break

    case 3:
      img =  "/src/assets/img/roseWine.png"
      alt = "roseWine"
      title = "Algo verde"
      desc1 = "Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui cumque illum facere blanditiis. Nesciunt perferendis distinctio voluptatum dolore, molestias dicta, adipisci quos, maiores tempore amet fugit optio expedita minima velit."
      desc2 = "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Velit hic commodi magnam itaque, accusamus labore a id cupiditate tenetur impedit dolorem. Cupiditate modi voluptatem soluta ad ipsum corporis maiores a!"
      style = "bg-secondary"
      break

    case 4:
      img =  "/src/assets/img/generosoWine.png"
      alt = "generosoWine"
      title = "Algo naranja"
      desc1 = "Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui cumque illum facere blanditiis. Nesciunt perferendis distinctio voluptatum dolore, molestias dicta, adipisci quos, maiores tempore amet fugit optio expedita minima velit."
      desc2 = "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Velit hic commodi magnam itaque, accusamus labore a id cupiditate tenetur impedit dolorem. Cupiditate modi voluptatem soluta ad ipsum corporis maiores a!"
      style = "bg-quaternary"
      break

    case 5:
      img =  "/src/assets/img/oportoWine.png"
      alt = "oportoWine"
      title = "Algo amarillo"
      desc1 = "Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui cumque illum facere blanditiis. Nesciunt perferendis distinctio voluptatum dolore, molestias dicta, adipisci quos, maiores tempore amet fugit optio expedita minima velit."
      desc2 = "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Velit hic commodi magnam itaque, accusamus labore a id cupiditate tenetur impedit dolorem. Cupiditate modi voluptatem soluta ad ipsum corporis maiores a!"
      style = "bg-secondary"
      break

    case 6:
      img =  "/src/assets/img/vermuWine.png"
      alt = "vermuWine"
      title = "Algo violeta"
      desc1 = "Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui cumque illum facere blanditiis. Nesciunt perferendis distinctio voluptatum dolore, molestias dicta, adipisci quos, maiores tempore amet fugit optio expedita minima velit."
      desc2 = "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Velit hic commodi magnam itaque, accusamus labore a id cupiditate tenetur impedit dolorem. Cupiditate modi voluptatem soluta ad ipsum corporis maiores a!"
      style = "bg-quaternary"
      break

    default:
      break
  }


  return (
    

    <section className={"flex justify-center items-center h-screen w-screen p-14 " + style}>

      <img src={img} alt={alt} className="w-1/3 h-auto rounded-md" />

      <div className="w-4/6 h-5/6 flex flex-col justify-between items-center text-center text-white">

        <h1 className="text-center text-4xl font-bold">{title}</h1>

        <div className="mb-10 text-lg">
          <p className="w-2/3 ml-10">{desc1}</p>
          <p className="w-2/3 mt-16 ml-72">{desc2}</p>
        </div>
        
        <button className="w-60 text-xl font-bold border-2 py-3 px-10 rounded hover:bg-selected duration-150 ease-in">Comprar</button>

      </div>

    </section>



  )
}



WineDescription.propTypes = {
  wine: PropTypes.number,
}



export default WineDescription