import { useState } from 'react'
import { useForm } from 'react-hook-form'
import { useTranslation } from 'react-i18next'
import { Link, useLocation,useNavigate  } from 'react-router-dom'

import Input from '../components/common/form/Input'

import SVGarrowToLeft from '../assets/svg/common/arrowToLeft.svg'
import IMGgeneroso from "../assets/img/generosoWine.png"
import IMGred from "../assets/img/redWine.png"


const Auth = () => {

  const [step, setStep] = useState(1)

  const { register, handleSubmit, formState: { errors }, trigger, watch } = useForm()
  const { t } = useTranslation()

  const location = useLocation()
  const navigate = useNavigate()

  const params = new URLSearchParams(location.search)
  const section = params.get("section")

  const handleSectionChange = (newSection, e) => {
    e.preventDefault()
    navigate(`/auth?section=${newSection}`)
  }

  

  const goToNextStep = async () => {
    const isValid = await trigger(["txtFullName", "txtEmail", "txtPhoneNumber", "txtBirthDate"]);
    isValid && setStep(2)
  }

  const goToPreviousStep = () => setStep(1)

  const onSubmit = async (data) => {
    
    console.log(data)
    
  }

  
  return (
    <main className='flex justify-center items-center bg-third h-screen'>

      <Link to="/">
        <img 
          src={SVGarrowToLeft} 
          alt="arrow" 
          className='absolute top-8 left-8 size-10 hover:scale-110 cursor-pointer'
        />
      </Link>
      
      
      <div className='w-3/4 h-5/6 flex justify-between items-center gap-5 p-10 bg-primary rounded-md'>
        {section === "login" ? (
          <>
            <img 
              src={IMGgeneroso} 
              alt="Generoso Wine" 
              className='h-full rounded-lg'
            />

            <form onSubmit={handleSubmit(onSubmit)} className='w-2/4 h-5/6 flex flex-col justify-center items-center gap-10'>
              
              <div className='flex flex-col justify-between gap-3'>
                <Input 
                  type="email" 
                  id="email" 
                  placeholder={t("auth.inputs.email")}
                  register={register}
                  required={true}
                  errors={errors}
                />

                <Input 
                  type="password" 
                  id="password" 
                  placeholder={t("auth.inputs.password")}
                  register={register}
                  required={true}
                  errors={errors}
                  minLength={6}
                />  

              </div>

              <div className='flex flex-col justify-between items-center gap-5'>
                <button 
                  type="submit" 
                  className="w-56 px-4 py-1 text-lg text-secondary font-bold tracking-widest border-4 border-secondary rounded-md duration-300 ease-in-out hover:bg-selected hover:text-primary hover:border-selected"
                >
                  {t("auth.logIn")}
                </button>

                <hr className="w-3/5 border-t-4 rounded border-secondary" />

                <button
                  onClick={(e) => handleSectionChange("register", e)}
                  className="w-56 px-4 py-1 bg-third text-lg text-secondary font-bold tracking-widest border-4 border-third rounded-md duration-300 ease-in-out hover:bg-selected hover:text-primary hover:border-selected"
                >
                  Register
                </button>

              </div>

            </form>
          </>
        ) : section === "register" ? (
          <>
            <form onSubmit={handleSubmit(onSubmit)} className='w-3/5 h-full flex flex-col justify-around items-center'>
              
              <div className='flex flex-col justify-between gap-3'>

                {step === 1 && (
                  <>
                    <Input 
                      id="txtFullName" 
                      placeholder={"Nombre completo"}
                      register={register}
                      required={true}
                      minLength={2}
                      errors={errors}
                    />

                    <Input 
                      type="email" 
                      id="txtEmail" 
                      placeholder={t("auth.inputs.email")}
                      register={register}
                      required={true}
                      errors={errors}
                    />

                    <Input 
                      id="txtPhoneNumber" 
                      placeholder={"Numero de telefono"}
                      register={register}
                      required={true}
                      minLength={9}
                      maxLength={9}
                      errors={errors}
                    />

                    <Input 
                      type='date'
                      id="txtBirthDate" 
                      placeholder={"Fecha de nacimiento"}
                      register={register}
                      required={true}
                      errors={errors}
                    />

                  </>
                )}
                

                {step === 2 && (
                  <>
                    <Input 
                      id="username" 
                      placeholder={t("auth.inputs.username")}
                      register={register}
                      required={true}
                      minLength={3}
                      errors={errors}
                    />

                    <Input 
                      type="password" 
                      id="password" 
                      placeholder={t("auth.inputs.password")}
                      register={register}
                      required={true}
                      errors={errors}
                      minLength={6}
                      formValues={watch()}
                    />

                    <Input 
                      type="password" 
                      id="passwordRepeat" 
                      placeholder={t("auth.inputs.password")}
                      register={register}
                      required={true}
                      errors={errors}
                      compareWith="password"
                      formValues={watch()}
                    />

                    
                    <div className='w-80'>
                      <div className="flex items-center">
                        <input 
                          type="checkbox" 
                          id="acceptTerms" 
                          {...register("acceptTerms", {
                            required: `Terminos y condiciones ${t("auth.inputs.errors.need")}`
                          },)} 
                          className="mr-2"
                        />

                        <label htmlFor="terms" className="text-sm text-gray-700">
                          Acepto el tratamiento de mis datos personales de acuerdo con la <Link to="/termsconditions" className="text-blue-500 hover:text-selected">Politica de Privacidad</Link>
                        </label>
                      </div>

                      {errors.acceptTerms && <span className="text-red-500 text-xs">{errors.acceptTerms.message}</span>}
                    </div>
 
                  
                  </>
                )}
              </div>

              
              <div className='w-96 flex flex-col justify-between items-center gap-5'>
                
                <div className='flex  items-center gap-5'>

                  <svg 
                    width="1em" 
                    height="1em" 
                    viewBox="0 0 24 24"
                    onClick={goToPreviousStep}
                    className={`size-12 stroke-secondary  cursor-pointer ${step === 1 ? "opacity-45 cursor-not-allowed" : "hover:stroke-selected hover:scale-125 duration-150 ease-in"}`}
                  >
                    <path fill="none" strokeLinejoin="round" strokeLinecap="round" strokeWidth="2" d="m11 9l-3 3m0 0l3 3m-3-3h8m5 0a9 9 0 1 0-18 0a9 9 0 0 0 18 0"/>
                  </svg>

                  {step === 1 ? (
                    <svg 
                      width="1em" 
                      height="1em" 
                      viewBox="0 0 24 24"
                      onClick={goToNextStep}
                      className='size-12 stroke-secondary cursor-pointer hover:stroke-selected hover:scale-125 duration-150 ease-in'
                    >
                      <path fill="none" strokeLinejoin="round" strokeLinecap="round" strokeWidth="2" d="m13 15l3-3m0 0l-3-3m3 3H8m13 0a9 9 0 1 0-18 0a9 9 0 0 0 18 0"/>
                    </svg>
                  ) : (
                    <button 
                      type="submit" 
                      className="w-56 px-4 py-1 text-lg text-secondary font-bold tracking-widest border-4 border-secondary rounded-md duration-300 ease-in-out hover:bg-selected hover:text-primary hover:border-selected"
                    >
                      {t("auth.Signup")}
                    </button>
                  )}

                </div>
                
                <hr className="w-2/5 border-t-4 rounded border-secondary"/>

                <button
                  onClick={(e) => handleSectionChange("login", e)}
                  className="w-56 px-4 py-1 bg-third text-lg text-secondary font-bold tracking-widest border-4 border-third rounded-md duration-300 ease-in-out hover:bg-selected hover:text-primary hover:border-selected"
                >
                  Login
                </button>

              </div>

            </form>

            <img 
              src={IMGred} 
              alt="Red Wine" 
              className='h-full rounded-lg'              
            />

          </>
        ) : (
          <div>Selecciona una opción</div>
        )}
      </div>
    </main>
  )
}

export default Auth