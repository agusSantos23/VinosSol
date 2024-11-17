import PropTypes from 'prop-types';

const InputPatch = ({value}) => {


  return (
    <div>

      <h3>{value}</h3>

      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="1em"
        height="1em"
        viewBox="0 0 24 24"
        className="your-custom-class"
      >
        <path
          fill="none"
          stroke="black"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2"
          d="m12 8l-8 8v4h4l8-8m-4-4l2.869-2.869c.395-.395.593-.593.821-.667a1 1 0 0 1 .618 0c.228.074.425.272.82.666l1.74 1.74c.396.396.594.594.668.822a1 1 0 0 1 0 .618c-.074.228-.272.426-.668.822L16 12.001m-4-4l4 4"
        />
      </svg>

    </div>
  )
}



InputPatch.propTypes = {
  value: PropTypes.string
};

export default InputPatch
