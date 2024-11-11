import PropTypes from "prop-types"

const WineDescription = ({ wine }) => {

  let img
  let alt
  let title
  let desc1
  let desc2

  switch (wine) {
    case 1:
        img =  "/src/assets/img/redWine.png"
        alt = "redWine"
        title = "Algo rojo"
        desc1 = "Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui cumque illum facere blanditiis. Nesciunt perferendis distinctio voluptatum dolore, molestias dicta, adipisci quos, maiores tempore amet fugit optio expedita minima velit."
        desc2 = "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Velit hic commodi magnam itaque, accusamus labore a id cupiditate tenetur impedit dolorem. Cupiditate modi voluptatem soluta ad ipsum corporis maiores a!"

      break

    case 2:
      img =  "/src/assets/img/redWine.png"
      alt = "redWine"
      title = "Algo rojo"
      desc1 = "Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui cumque illum facere blanditiis. Nesciunt perferendis distinctio voluptatum dolore, molestias dicta, adipisci quos, maiores tempore amet fugit optio expedita minima velit."
      desc2 = "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Velit hic commodi magnam itaque, accusamus labore a id cupiditate tenetur impedit dolorem. Cupiditate modi voluptatem soluta ad ipsum corporis maiores a!"

      break

    case 3:
      img =  "/src/assets/img/redWine.png"
      alt = "redWine"
      title = "Algo rojo"
      desc1 = "Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui cumque illum facere blanditiis. Nesciunt perferendis distinctio voluptatum dolore, molestias dicta, adipisci quos, maiores tempore amet fugit optio expedita minima velit."
      desc2 = "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Velit hic commodi magnam itaque, accusamus labore a id cupiditate tenetur impedit dolorem. Cupiditate modi voluptatem soluta ad ipsum corporis maiores a!"

      break

    case 4:
      img =  "/src/assets/img/redWine.png"
      alt = "redWine"
      title = "Algo rojo"
      desc1 = "Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui cumque illum facere blanditiis. Nesciunt perferendis distinctio voluptatum dolore, molestias dicta, adipisci quos, maiores tempore amet fugit optio expedita minima velit."
      desc2 = "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Velit hic commodi magnam itaque, accusamus labore a id cupiditate tenetur impedit dolorem. Cupiditate modi voluptatem soluta ad ipsum corporis maiores a!"

      break

    case 5:
      img =  "/src/assets/img/redWine.png"
      alt = "redWine"
      title = "Algo rojo"
      desc1 = "Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui cumque illum facere blanditiis. Nesciunt perferendis distinctio voluptatum dolore, molestias dicta, adipisci quos, maiores tempore amet fugit optio expedita minima velit."
      desc2 = "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Velit hic commodi magnam itaque, accusamus labore a id cupiditate tenetur impedit dolorem. Cupiditate modi voluptatem soluta ad ipsum corporis maiores a!"

      break

    case 6:
      img =  "/src/assets/img/redWine.png"
      alt = "redWine"
      title = "Algo rojo"
      desc1 = "Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui cumque illum facere blanditiis. Nesciunt perferendis distinctio voluptatum dolore, molestias dicta, adipisci quos, maiores tempore amet fugit optio expedita minima velit."
      desc2 = "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Velit hic commodi magnam itaque, accusamus labore a id cupiditate tenetur impedit dolorem. Cupiditate modi voluptatem soluta ad ipsum corporis maiores a!"

      break

    default:
      break
  }


  return (
    

    <section className="flex justify-center items-center h-screen w-screen p-14 bg-secondary">

      <img src={img} alt={alt} className="w-1/3 h-auto rounded-md" />

      <div className="w-4/6 h-5/6 bg-amber-300  text-white">

        <h1 className="text-center text-4xl font-bold">{title}</h1>
        <div className="pt-4 p">
          <p className="w-1/2">{desc1}</p>
          <p className="w-1/2 start">{desc2}</p>
        </div>
      </div>

    </section>



  )
}



WineDescription.propTypes = {
  wine: PropTypes.number,
}



export default WineDescription