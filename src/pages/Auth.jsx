import { useForm } from 'react-hook-form'
import { useTranslation } from 'react-i18next'
import { Link, useLocation,useNavigate  } from 'react-router-dom'

import Input from '../components/common/form/Input';

import SVGarrowToLeft from '../assets/svg/common/arrowToLeft.svg'
import IMGgeneroso from "../assets/img/generosoWine.png"
import IMGred from "../assets/img/redWine.png"


const Auth = () => {
  const { register, handleSubmit, formState: { errors },watch } = useForm();
  const { t } = useTranslation()

  const location = useLocation();
  const navigate = useNavigate();


  const params = new URLSearchParams(location.search);
  const section = params.get("section");

  const handleSectionChange = (newSection, e) => {
    e.preventDefault();
    navigate(`/auth?section=${newSection}`);
  };

  const onSubmit = async (data) => {
    
    console.log(data);
    
  }

  
  return (
    <main className='flex justify-center items-center  bg-primary h-screen'>

      <Link to="/">
        <img 
          src={SVGarrowToLeft} 
          alt="arrow" 
          className='absolute top-8 left-8 size-10 hover:scale-110 cursor-pointer'
        />
      </Link>
      
      
      <div className='w-5/6 h-5/6 flex justify-center items-center gap-5 bg-third rounded-md'>
        {section === "login" ? (
          <>
            <img 
              src={IMGgeneroso} 
              alt="Generoso Wine" 
              className='h-5/6 rounded-lg'
            />

            <form onSubmit={handleSubmit(onSubmit)} className='w-3/5 h-5/6 flex flex-col justify-around items-center'>
              
              <div className='h-36 flex flex-col justify-between'>
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

              <div className='w-full flex flex-col justify-center items-center gap-5'>
                <button 
                  type="submit" 
                  className="ml-4 px-4 py-2 bg-green-500 text-white rounded-md"
                >
                  {t("auth.logIn")}
                </button>

                
                <hr  className='w-3/4'/>

                <button
                  className="ml-4 px-4 py-2 bg-green-500 text-white rounded-md"
                  onClick={(e) => handleSectionChange("register", e)}
                >
                  Register
                </button>
              </div>

              

            </form>
          </>
        ) : section === "register" ? (
          <>
            
            <form onSubmit={handleSubmit(onSubmit)} className='w-3/5 h-5/6 flex flex-col justify-around items-center'>
              
              <div className='h-72 flex flex-col justify-between'>
                <Input 
                  type="email" 
                  id="email" 
                  placeholder={t("auth.inputs.email")}
                  register={register}
                  required={true}
                  errors={errors}
                />

                <Input 
                  type="text" 
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

              </div>

              <div>
                <div className="flex items-center mt-4">
                  <input 
                    type="checkbox" 
                    id="terms" 
                    {...register("terms", {
                      required: true,
                      message: `Terminos y condiciones ${t("auth.inputs.errors.need")}`
                    },)} 
                    className="mr-2"
                  />

                  <label htmlFor="terms" className="text-sm text-gray-700">
                    Acepta los <Link to="/termsconditions" className="text-blue-500">Terminos & Condiciones</Link>
                  </label>
                </div>

                {errors.terms && <span className="text-red-500 text-xs">{errors.terms.message}</span>}
              </div>

              <div className='w-full flex flex-col justify-center items-center gap-5'>
                <button 
                  type="submit" 
                  className="ml-4 px-4 py-2 bg-green-500 text-white rounded-md"
                >
                  {t("auth.Signup")}
                </button>
                
                <hr  className='w-3/4'/>

                <button
                  className="ml-4 px-4 py-2 bg-green-500 text-white rounded-md"
                  onClick={(e) => handleSectionChange("login", e)}
                >
                  Login
                </button>

              </div>

            </form>

            <img 
              src={IMGred} 
              alt="Red Wine" 
              className='h-5/6 rounded-lg'              
            />

          </>
        ) : (
          <div>Selecciona una opción</div>
        )}
      </div>
    </main>
  );
};

export default Auth