import PropTypes from 'prop-types';
import { useState } from 'react';
import { useTranslation } from 'react-i18next';

import lockOpen from "../../../assets/svg/lock/lockOpen.svg";
import lockClose from "../../../assets/svg/lock/lockClose.svg";

const Input = ({
  type,
  id,
  placeholder,
  register,
  errors,
  required = false,
  minLength = 0,
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
      return value === compareValue || t("auth.inputs.errors.coincide");
    }
  }

  if (type === "password") {
    return (
      <div className='flex flex-col gap-2'>
        <div className="relative">
          <input
            type={viewPassword ? "password" : "text"}
            id={id}
            name={id}
            placeholder={placeholder}
            className="w-72 px-2 py-1 bg-secondary text-center text-lg text-primary border-2 rounded-md border-gray-300 focus:outline-none focus:shadow-green-focus focus:border-green-500"
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
            className="absolute right-1 top-1/2 -translate-y-1/2 stroke-blue-400 cursor-pointer w-6"
          />
        </div>
        {errors[id] && <span className='ml-1 pl-2 border-l-2 rounded-xl border-red-400 tracking-wide text-xs'>{errors[id].message}</span>}
      </div>
    );
  } else {
    return (
      <div className='flex flex-col gap-2'>
        <input
          type={type}
          id={id}
          name={id}
          placeholder={placeholder}
          className="w-72 border-2 rounded-md bg-secondary text-primary border-gray-300 shadow-md text-center text-lg  px-2 py-1 focus:outline-none focus:shadow-green-focus focus:border-green-500"
          {...register(id, {
            required: {
              value: required,
              message: `${placeholder} ${t("auth.inputs.errors.need")}`
            },
            minLength: {
              value: minLength,
              message: `${t("auth.inputs.errors.atLeastOne")} ${minLength} ${t("auth.inputs.errors.atLeastTwo")}`
            }
          })}
          {...props}
        />
        {errors[id] && <span className='ml-1 pl-2 border-l-2 rounded-xl border-red-400 tracking-wide text-xs'>{errors[id].message}</span>}
      </div>
    );
  }
}

Input.displayName = 'Input';

Input.propTypes = {
  type: PropTypes.oneOf(['text', 'password', 'email']),
  id: PropTypes.string.isRequired,
  placeholder: PropTypes.string.isRequired,
  register: PropTypes.func.isRequired,
  errors: PropTypes.object,
  required: PropTypes.bool,
  minLength: PropTypes.number,
  compareWith: PropTypes.string, 
  formValues: PropTypes.object, 
};

export default Input;
