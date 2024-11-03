import PropTypes from "prop-types"

const Button = ({children, onClick}) => {

  return (
    <button 
      onClick={onClick}
      className="
        font-lora font-semibold tracking-wider px-4 py-1 border-2 border-secondary rounded shadow-md shadow-gray-400
        dark:text-primary dark:border-primary
        transition duration-300 ease-in-out 
        hover:bg-selected hover:text-primary hover:border-selected
      "
    >
      {children}
    </button>
  )
}

Button.propTypes = {
  children: PropTypes.node.isRequired,
  onClick: PropTypes.func,
}

export default Button
