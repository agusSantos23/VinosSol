import PropTypes from "prop-types"
import { useState } from "react"

const PrivacySection = ({title, children}) => {

  const [breakDown, setBreakDown] = useState(false)


  const handleBreakDown = () => setBreakDown(!breakDown)




  return (
    
    <section>
      <header onClick={handleBreakDown} className="w-max flex justify-start items-center">
        <h2 className="text-2xl font-bold font-lora">{title}</h2>

        <svg 
          width="1em" 
          height="1em" 
          viewBox="0 0 24 24"
          className="size-8"
        >
          <path 
          fill="none" 
          stroke="currentColor" 
          strokeLinecap="round" 
          strokeLinejoin="round" 
          strokeWidth="2" 
          d="m16 10l-4 4l-4-4"
          />
        </svg>

      </header>

      <div className={`${!breakDown && "hidden"}`}>
        {children}
      </div>
    </section>

  )
}

PrivacySection.propTypes = {
  title: PropTypes.string.isRequired,
  children: PropTypes.node.isRequired
}

export default PrivacySection