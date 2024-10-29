import PropTypes from 'prop-types'

const WineDescription = ({wine}) => {

    


  return (

    <section className="relative h-screen w-screen bg-secondary">
        <img src="../src/assets/img/redWine.png" alt="redWine" className="absolute top- left-3 h-2/4 w-auto rounded-md" />

    </section>
    


  )
}



WineDescription.propTypes = {
  wine: PropTypes.string,
}



export default WineDescription