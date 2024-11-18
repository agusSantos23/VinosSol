import PropTypes from 'prop-types';
import { useState } from 'react';



const InputPatch = ({value = "undefined", type = "text"}) => {

  const [ isModeEdit, setIsModeEdit ] = useState(false)

  const toggleEditMode = () => setIsModeEdit(!isModeEdit)

  return(
    <div className='w-72 flex justify-center items-center gap-2'>
      {
        !isModeEdit 
        ? (
          <>
            <h3 className='w-full px-7 py-4 bg-secondary text-white text-center text-xl rounded-md shadow-md shadow-gray-400'>{value}</h3>

            <svg
              width="1em"
              height="1em"
              viewBox="0 0 24 24"
              className="size-10 opacity-70 cursor-pointer hover:scale-110 hover:opacity-100 duration-150 ease-in-out"
              onClick={toggleEditMode}
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
          </>
        )
        :(
          <>
          {
            type !== "textarea"
            ?
            <input 
              type={type} 
              value={value} 
              className='w-full px-7 py-4 bg-secondary text-white text-center text-xl rounded-md shadow-md shadow-gray-400' 
            />

            :
            <textarea 
              name="" 
              id=""
              className=''
            >{value}</textarea>
          }

          <div className='flex flex-col justify-center items-center gap-1'>

            <svg 
              width="1em" 
              height="1em" 
              viewBox="4 4 16 16"
              className='size-7 stroke-secondary cursor-pointer hover:stroke-green-500 duration-200'
            >
              <path 
                fill="none" 
                strokeLinecap="round" 
                strokeLinejoin="round" 
                strokeWidth="2" 
                d="m6 12l4.243 4.243l8.484-8.486"/>
            </svg>


            <svg 
              width="1em" 
              height="1em" 
              viewBox="5 5 14 14"
              className='size-7 stroke-secondary cursor-pointer hover:stroke-red-500 duration-200'
              onClick={toggleEditMode}
            >
              <path 
                fill="none" 
                strokeLinecap="round" 
                strokeLinejoin="round" 
                strokeWidth="2" 
                d="m16 16l-4-4m0 0L8 8m4 4l4-4m-4 4l-4 4"/>
            </svg>

          </div>
            
          </>
        )
      }
    </div>
  )
  
}



InputPatch.propTypes = {
  value: PropTypes.string,
  type: PropTypes.string
};

export default InputPatch
