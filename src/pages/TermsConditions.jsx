import { Link } from "react-router-dom"

import SVGarrowToLeft from '../assets/svg/common/arrowToLeft.svg'


const TermsConditions = () => {

  return (
    <main className="flex justify-center items-center  bg-primary h-screen">
      <Link to="/">
        <img 
          src={SVGarrowToLeft} 
          alt="arrow" 
          className='absolute top-8 left-8 size-10 hover:scale-110 cursor-pointer'
        />
      </Link>
      

      <div className='w-4/6 p-5 flex justify-center items-center gap-5 bg-third rounded-md'>
        terminos
      </div>
      
    </main>
  )
}

export default TermsConditions
