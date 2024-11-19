import PropTypes from 'prop-types'
import { useState } from 'react'

const InputPatch = ({id, value = "undefined", type = "text", isSensitive = false }) => {
  const [isModeEdit, setIsModeEdit] = useState(false) 
  const [isHidden, setIsHidden] = useState(isSensitive) 
  const [currentValue, setCurrentValue] = useState(value) 
  const [inputValue, setInputValue] = useState(value) 

  const toggleEditMode = () => setIsModeEdit(!isModeEdit)
  const toggleVisibility = () => setIsHidden(!isHidden)

  const handleInputChange = (e) => {
    let value = e.target.value
    const fechaRegex = /^\d{4}-\d{2}-\d{2}$/

    if (fechaRegex.test(value)) { 

      const date = new Date(value) 
      const day = String(date.getDate()).padStart(2, '0') 
      const month = String(date.getMonth() + 1).padStart(2, '0') 
      const year = date.getFullYear() 
      value = `${day}/${month}/${year}` 
    }
    setInputValue(value)
  }

  const handleConfirm = () => {
    setCurrentValue(inputValue) 
    setIsModeEdit(false) 
  }

  const handleCancel = () => {
    setInputValue(currentValue) 
    setIsModeEdit(false) 
  }

  const renderInputField = () => {

    if (type === "textarea") {

      return (
        <textarea
          id={id}
          placeholder={currentValue}
          onChange={handleInputChange}
          wrap='hard'
          className="w-full max-h-44 min-h-14 px-7 py-3 bg-secondary text-white text-center rounded-md shadow-md shadow-gray-400"
        />
      )

    }else if (type === "date") {

      return (
        <input
          id={id}
          type="date"
          placeholder={currentValue}
          onChange={handleInputChange}
          className="w-full px-7 py-3 bg-secondary text-white text-center truncate rounded-md shadow-md shadow-gray-400"
        />
      )

    }else if (type === "month") {

      return (

        <div className="relative inline-block">
          <input
            id={id}
            type="month"
            placeholder={currentValue}
            onChange={handleInputChange}
            className="w-full px-7 py-3 bg-secondary text-white text-center truncate rounded-md shadow-md shadow-gray-400"
          />

            <svg 
              width="1em" 
              height="1em" 
              viewBox="0 0 24 24"
              className='absolute right-5 top-1/2 transform -translate-y-1/2 size-7 stroke-white pointer-events-none'
            >
              <path 
                fill="none" 
                strokeLinecap="round" 
                strokeLinejoin="round" 
                strokeWidth="2" 
                d="M8 4h-.8c-1.12 0-1.68 0-2.108.218a2 2 0 0 0-.874.874C4 5.52 4 6.08 4 7.2V8m4-4h8M8 4V2m8 2h.8c1.12 0 1.68 0 2.107.218c.377.192.683.497.875.874c.218.427.218.987.218 2.105V8m-4-4V2M4 8v8.8c0 1.12 0 1.68.218 2.108a2 2 0 0 0 .874.874c.427.218.987.218 2.105.218h9.606c1.118 0 1.677 0 2.104-.218c.377-.192.683-.498.875-.874c.218-.428.218-.986.218-2.104V8M4 8h16m-4 8h.002v.002H16zm-4 0h.002v.002H12zm-4 0h.002v.002H8zm8.002-4v.002H16V12zM12 12h.002v.002H12zm-4 0h.002v.002H8z"/>
            </svg>
 
        </div>
        
      )

    }else{

      return (
        <input
          id={id}
          type="text"
          placeholder={currentValue}
          onChange={handleInputChange}
          className="w-full px-7 py-3 bg-secondary text-white text-center truncate rounded-md shadow-md shadow-gray-400"
        />
      )

    }
  }

  return (
    
    <div className={`${ id === "txtCvv" ? "w-52" : "w-80"} flex justify-center items-center gap-2 font-lora`}>
      {!isModeEdit ? (
        <>
          <h3 className={` ${ id === "txtCvv" ? "w-44" : "w-full"} w-full px-7 py-3 bg-secondary text-white text-center truncate rounded-md shadow-md shadow-gray-400 `}>
            {isSensitive && isHidden ? "●".repeat(value.length) : currentValue}
          </h3>
          {isSensitive && (
            <svg
              onClick={toggleVisibility} 
              width="1em"
              height="1em"
              viewBox="0 0 24 24"
              className="size-9 opacity-70 cursor-pointer hover:scale-110 hover:opacity-100 duration-150 ease-in-out"
            >
              {isHidden ? (
                <g fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2">
                  <path d="M3.587 13.779c1.78 1.769 4.883 4.22 8.413 4.22s6.634-2.451 8.413-4.22c.47-.467.705-.7.854-1.159c.107-.327.107-.913 0-1.24c-.15-.458-.385-.692-.854-1.159C18.633 8.452 15.531 6 12 6c-3.53 0-6.634 2.452-8.413 4.221c-.47.467-.705.7-.854 1.159c-.107.327-.107.913 0 1.24c.15.458.384.692.854 1.159"/>
                  <path d="M10 12a2 2 0 1 0 4 0a2 2 0 0 0-4 0"/>
                </g>
              ) : (
                <path fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m4 4l16 16m-3.5-3.244C15.147 17.485 13.618 18 12 18c-3.53 0-6.634-2.452-8.413-4.221c-.47-.467-.705-.7-.854-1.159c-.107-.327-.107-.913 0-1.24c.15-.459.385-.693.855-1.16c.897-.892 2.13-1.956 3.584-2.793M19.5 14.634c.333-.293.638-.582.912-.854l.003-.003c.468-.466.703-.7.852-1.156c.107-.327.107-.914 0-1.241c-.15-.458-.384-.692-.854-1.159C18.633 8.452 15.531 6 12 6q-.507 0-1 .064m2.323 7.436a2 2 0 0 1-2.762-2.889"/>
              )}
            </svg>
          )}
          <svg
            width="1em"
            height="1em"
            viewBox="2 2 20 20"
            className="size-9 opacity-70 cursor-pointer hover:scale-110 hover:opacity-100 duration-150 ease-in-out"
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
      ) : (
        <>
          {renderInputField()}

          <div className="w-9 flex flex-col justify-center items-center">
            <svg
              onClick={handleConfirm}
              width="1em"
              height="1em"
              viewBox="4 4 16 16"
              className="size-7 stroke-secondary cursor-pointer hover:stroke-green-500 duration-200"
            >
              <path
                fill="none"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="m6 12l4.243 4.243l8.484-8.486"
              />
            </svg>

            <svg
              onClick={handleCancel}
              width="1em"
              height="1em"
              viewBox="5 5 14 14"
              className="size-7 stroke-secondary cursor-pointer hover:stroke-red-500 duration-200"
            >
              <path
                fill="none"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="m16 16l-4-4m0 0L8 8m4 4l4-4m-4 4l-4 4"
              />
            </svg>
          </div>
        </>
      )}
    </div>

  )
}

InputPatch.propTypes = {
  id: PropTypes.string.isRequired,
  value: PropTypes.string,
  type: PropTypes.string,
  isSensitive: PropTypes.bool,
}

export default InputPatch
