import PropTypes from 'prop-types'

const WineDescription = ({wine}) => {

    switch (wine) {
      case 1:
        

        break;

      case 2:


        break;

      case 3:


        break;

      case 4:


        break;

      case 5:


        break;

        case 6:


          break;
    
      default:
        break;
    }


  return (

    <section className="flex justify-center items-center h-screen w-screen p-14 bg-secondary">
      
      <img src="../src/assets/img/redWine.png" alt="redWine" className=" w-1/3 h-auto rounded-md" />

      <div className="w-4/6 h-5/6 bg-amber-300  text-white">
        
        <h1 className="text-center text-4xl font-bold">Red wine</h1>
        <div className='pt-4 p'>
        <p className='w-1/2'>Red wine is a type of wine that is made from the skin of the red grape. It is typically made from a variety of grapes, including Cabernet Sauvignon, Merlot, Pinot Noir, and Syrah.</p>
        <p className='w-1/2 start'> Red wine is typically made from a variety of grapes, including Cabernet Sauvignon, Merlot, Pinot Noir, and Syrah.</p>
        </div>
      </div>
    
    </section>
    


  )
}



WineDescription.propTypes = {
  wine: PropTypes.string,
}



export default WineDescription