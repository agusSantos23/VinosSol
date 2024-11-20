import PropTypes from 'prop-types';
import { useState } from 'react';
import { useTranslation } from 'react-i18next';

import lockOpen from "../../../assets/svg/lock/lockOpen.svg";
import lockClose from "../../../assets/svg/lock/lockClose.svg";

const Input = ({
  type = "text",
  id,
  placeholder,
  register,
  errors,
  required = false,
  minLength = 0,
  maxLength = null,
  compareWith,
  formValues, 
  ...props
}) => {
  const [viewPassword, setViewPassword] = useState(true)

  const handledView = () => setViewPassword(!viewPassword)
  const { t } = useTranslation()

  const passwordValidation = compareWith && {
    validate: (value) => {
      const compareValue = formValues[compareWith]; 
      return value === compareValue || t("auth.inputs.errors.matches");
    }
  }

  const validateAge = (date) => {
    const today = new Date();
    const birthDate = new Date(date);
    const age = today.getFullYear() - birthDate.getFullYear();
    const monthDiff = today.getMonth() - birthDate.getMonth();
    return monthDiff < 0 || (monthDiff === 0 && today.getDate() < birthDate.getDate()) 
      ? age - 1 
      : age >= 18;
  };

  const handleCalendarClick = () => {
    const inputElement = document.getElementById(id);
    inputElement.showPicker ? inputElement.showPicker() :inputElement.click()
  }

  if (type === "password") {
    return (
      <div className='flex flex-col gap-1'>
        <div className="relative">
          <input
            type={viewPassword ? "password" : "text"}
            id={id}
            name={id}
            placeholder={placeholder}
            className="w-80 px-8 py-3 bg-secondary text-center text-lg text-primary border-4 rounded-md border-transparent focus:outline-none "
            {...register(id, {
              required: {
                value: required,
                message: `${placeholder} ${t("auth.inputs.errors.need")}`
              },
              minLength: {
                value: minLength,
                message: `${t("auth.inputs.errors.atLeastOne")} ${minLength} ${t("auth.inputs.errors.atLeastTwo")}`
              },
              pattern: {
                value: /(?=.*[a-z])(?=.*[A-Z])/,
                message: t("auth.inputs.errors.case")
              },
              ...passwordValidation 
            })}
            {...props}
          />
          <img
            onClick={handledView}
            src={viewPassword ? lockClose : lockOpen}
            alt={viewPassword ? 'View password' : 'Hide password'}
            className="absolute right-2 top-1/2 -translate-y-1/2 size-6 cursor-pointer"
          />
        </div>
        {errors[id] && <span className='text-red-600 tracking-wide text-sm font-semibold'>{errors[id].message}</span>}
      </div>
    );
  }if (type === "date" || type === "month") {
    return (
      <div >
        
        <div className="relative">
          <input
            type={type}
            id={id}
            name={id}
            placeholder={placeholder}
            className="w-full px-7 py-3 bg-secondary text-white text-center truncate rounded-md shadow-md shadow-gray-400"
            {...register(id, {
              required: {
                value: required,
                message: `${placeholder} ${t("auth.inputs.errors.need")}`
              },
              validate: (value) => validateAge(value) || "Debes ser mayor de edad.",
            })}
            {...props}
          />

          <svg 
            width="1em" 
            height="1em" 
            viewBox="0 0 24 24"
            onClick={handleCalendarClick}
            className='absolute right-5 top-1/2 transform -translate-y-1/2 size-7 stroke-white cursor-pointer hover:stroke-selected hover:scale-110 duration-150 ease-in'
          >
            <path 
              fill="none" 
              strokeLinecap="round" 
              strokeLinejoin="round" 
              strokeWidth="2" 
              d="M8 4h-.8c-1.12 0-1.68 0-2.108.218a2 2 0 0 0-.874.874C4 5.52 4 6.08 4 7.2V8m4-4h8M8 4V2m8 2h.8c1.12 0 1.68 0 2.107.218c.377.192.683.497.875.874c.218.427.218.987.218 2.105V8m-4-4V2M4 8v8.8c0 1.12 0 1.68.218 2.108a2 2 0 0 0 .874.874c.427.218.987.218 2.105.218h9.606c1.118 0 1.677 0 2.104-.218c.377-.192.683-.498.875-.874c.218-.428.218-.986.218-2.104V8M4 8h16m-4 8h.002v.002H16zm-4 0h.002v.002H12zm-4 0h.002v.002H8zm8.002-4v.002H16V12zM12 12h.002v.002H12zm-4 0h.002v.002H8z"/>
          </svg>

        </div>

        {errors[id] && <span className='text-red-600 tracking-wide text-sm font-semibold'>{errors[id].message}</span>}
      </div>
    );
  } else {
    return (
      <div className='flex flex-col gap-1'>
        <input
          type={type}
          id={id}
          name={id}
          placeholder={placeholder}
          className="w-80 px-8 py-3  bg-secondary text-center text-lg text-primary  border-4 rounded-md border-transparent focus:outline-none "
          {...register(id, {
            required: {
              value: required,
              message: `${placeholder} ${t("auth.inputs.errors.need")}`
            },
            minLength: {
              value: minLength,
              message: `${t("auth.inputs.errors.atLeastOne")} ${minLength} ${t("auth.inputs.errors.atLeastTwo")}`
            },
            maxLength: {
              value: maxLength,
              message: `El campo debe tener exactamente ${maxLength} caracteres.`
            },
            ...(type === "email" && {
              pattern: {
                value: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
                message: "El correo electrónico no tiene un formato válido.",
              },
            }),
          })}
          {...props}
        />
        {errors[id] && <span className='text-red-600 tracking-wide text-sm font-semibold'>{errors[id].message}</span>}
      </div>
    );
  }
}

Input.displayName = 'Input';

Input.propTypes = {
  type: PropTypes.oneOf(['text', 'password', 'email', 'date', 'month']),
  id: PropTypes.string.isRequired,
  placeholder: PropTypes.string.isRequired,
  register: PropTypes.func.isRequired,
  errors: PropTypes.object,
  required: PropTypes.bool,
  minLength: PropTypes.number,
  maxLength: PropTypes.number,
  compareWith: PropTypes.string, 
  formValues: PropTypes.object, 
};

export default Input;
