import PropTypes from 'prop-types';

const Modal = ({ isOpen, onClose, children }) => {

  return (
    <div className={`fixed top-0 left-0 w-screen h-screen flex items-center justify-center transition-opacity duration-300 ease-in-out ${isOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'}`}>
      

      <div className="relative z-10 w-4/6 min-h-80 px-16 py-5 bg-primary text-secondary rounded shadow-lg">
        
        <svg 
          width="1em" 
          height="1em" 
          viewBox="0 0 24 24"
          onClick={onClose}
          className="absolute top-2 left-2 size-12 cursor-pointer stroke-primary dark:stroke-secondary hover:stroke-red-500 hover:scale-110 duration-200 ease-in"
        >
          <path
            fill="none"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="m18 18l-6-6m0 0L6 6m6 6l6-6m-6 6l-6 6"
          />
        </svg>

        {children}

      </div>

      <div
        className="absolute top-0 left-0 w-full h-full bg-black opacity-50"
        onClick={onClose}
      />
    </div>
  )
}

Modal.propTypes = {
  isOpen: PropTypes.bool.isRequired, 
  onClose: PropTypes.func.isRequired, 
  children: PropTypes.node, 
};

export default Modal;
