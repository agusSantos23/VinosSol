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
            }
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
