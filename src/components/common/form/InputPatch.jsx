import PropTypes from 'prop-types'
import { useState } from 'react'

const InputPatch = ({ value = "undefined", type = "text", isSensitive = false }) => {
  const [isModeEdit, setIsModeEdit] = useState(false) 
  const [isHidden, setIsHidden] = useState(isSensitive) 
  const [currentValue, setCurrentValue] = useState(value) 
  const [inputValue, setInputValue] = useState(value) 

  const toggleEditMode = () => setIsModeEdit(!isModeEdit)
  const toggleVisibility = () => setIsHidden(!isHidden)

  const handleInputChange = (e) => setInputValue(e.target.value)

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
          placeholder={currentValue}
          onChange={handleInputChange}
          className="w-full px-7 py-4 bg-secondary text-white text-center truncate rounded-md shadow-md shadow-gray-400"
        />
      )

    }else if (type === "date") {

      return (
        <input
          type="date"
          placeholder={currentValue}
          onChange={handleInputChange}
          className="w-full px-7 py-4 bg-secondary text-white text-center truncate rounded-md shadow-md shadow-gray-400"
        />
      )

    }else if (type === "month") {

      return (
        <input
          type="month"
          placeholder={currentValue}
          onChange={handleInputChange}
          className="w-full px-7 py-4 bg-secondary text-white text-center truncate rounded-md shadow-md shadow-gray-400"
        />
      )

    }else{

      return (
        <input
          type="text"
          placeholder={currentValue}
          onChange={handleInputChange}
          className="w-full px-7 py-4 bg-secondary text-white text-center truncate rounded-md shadow-md shadow-gray-400"
        />
      )

    }
  }

  return (
    <div className="w-80 flex justify-center items-center gap-2 font-lora">
      {!isModeEdit ? (
        <>
          <h3 className={`w-full px-7 py-4 bg-secondary text-white text-center truncate rounded-md shadow-md shadow-gray-400`}>
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
  value: PropTypes.string,
  type: PropTypes.string,
  isSensitive: PropTypes.bool,
}

export default InputPatch
