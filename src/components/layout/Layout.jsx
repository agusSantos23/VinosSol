import { useState } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next'


import LanguageSwitcher from "../../components/common/LanguageSwitcher.jsx"
import Modal from './Modal.jsx';


import SVGarrowToLeft from '../../assets/svg/common/arrowToLeft.svg'
import InputPatch from '../common/form/InputPatch.jsx';


const Layout = ({ children }) => {

  const [isSidebarOpen, setIsSidebarOpen] = useState(false)
  const [isModalOpen, setIsModalOpen] = useState(false);

  const { t } = useTranslation()
  const toggleSidebar = () => setIsSidebarOpen(!isSidebarOpen) 
  const toggleModal = () => setIsModalOpen(!isModalOpen)


  return (
    <main className="flex h-screen bg-primary">

      <aside className="fixed top-1/2 -translate-y-1/2 h-5/6 w-64 flex flex-col justify-between items-center p-4  ">
        
        <svg 
          width="1em" 
          height="1em" 
          viewBox="0 0 24 24"
          className='size-12 cursor-pointer hover:scale-125 duration-150 ease-in'
          onClick={toggleSidebar}
        >
          <path fill="none" stroke="black" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"  d="M5 17h14M5 12h14M5 7h14"/>
        </svg>
        
        <Link to="/">
          <img 
            src={SVGarrowToLeft} 
            alt="arrow" 
            className='size-12 cursor-pointer hover:scale-125 duration-150 ease-in'
          />
        </Link>
        
        <ul className='h-3/4 flex flex-col justify-between'>
          <li className=' hover:scale-125 duration-300 ease-in-out'>
            <Link>
              <svg
                width="100px"
                height="75px"
                viewBox="350 275 750 20"
                id="svg11"
              >
                <path
                  d="m 4313.0174,12653.487 c -58.8938,-33.128 -114.1067,-134.965 -185.2699,-341.093 -98.1561,-284.653 -166.8655,-553.355 -212.2627,-839.236 -38.0355,-234.348 -46.6242,-731.263 -17.1774,-987.697 67.4824,-604.8864 267.4757,-1163.1497 587.7103,-1642.8881 341.0927,-510.4122 761.9374,-883.4057 1289.5269,-1142.2926 680.9585,-334.958 1444.1229,-415.9369 2183.9752,-231.8941 469.9227,116.5605 932.4838,347.2276 1334.9241,663.7813 68.7094,53.9859 215.9436,190.1776 327.5963,303.0572 434.3418,435.5681 733.7178,925.1222 932.4838,1522.6476 87.114,262.5677 112.88,395.0787 114.106,570.5327 1.228,185.27 -24.538,261.34 -119.013,357.043 -204.901,203.675 -606.1152,188.951 -1716.5071,-67.483 -917.7604,-212.262 -1393.818,-285.879 -1867.4216,-287.106 -451.5184,-1.227 -739.8522,57.667 -1055.179,214.716 -376.6744,188.951 -693.228,504.277 -975.4271,968.066 -50.305,83.433 -163.1847,292.014 -251.5252,465.015 -169.3195,331.277 -214.7168,407.348 -276.0644,458.88 -42.9433,35.581 -55.2128,38.035 -94.4752,15.951 z"
                  id="path1"
                  fill="#690404"
                  fillOpacity="1"
                  stroke="none"
                  strokeWidth="1.22695"
                  transform="matrix(0.1,0,0,-0.1,0,1280)"
                />
              </svg>
            </Link>
          </li>

          <li className=' hover:scale-125 duration-300 ease-in-out'>
            <Link>
              <svg
                width="100px"
                height="75px"
                viewBox="350 275 750 20"
                id="svg11"
              >
                <path
                  d="m 4313.0174,12653.487 c -58.8938,-33.128 -114.1067,-134.965 -185.2699,-341.093 -98.1561,-284.653 -166.8655,-553.355 -212.2627,-839.236 -38.0355,-234.348 -46.6242,-731.263 -17.1774,-987.697 67.4824,-604.8864 267.4757,-1163.1497 587.7103,-1642.8881 341.0927,-510.4122 761.9374,-883.4057 1289.5269,-1142.2926 680.9585,-334.958 1444.1229,-415.9369 2183.9752,-231.8941 469.9227,116.5605 932.4838,347.2276 1334.9241,663.7813 68.7094,53.9859 215.9436,190.1776 327.5963,303.0572 434.3418,435.5681 733.7178,925.1222 932.4838,1522.6476 87.114,262.5677 112.88,395.0787 114.106,570.5327 1.228,185.27 -24.538,261.34 -119.013,357.043 -204.901,203.675 -606.1152,188.951 -1716.5071,-67.483 -917.7604,-212.262 -1393.818,-285.879 -1867.4216,-287.106 -451.5184,-1.227 -739.8522,57.667 -1055.179,214.716 -376.6744,188.951 -693.228,504.277 -975.4271,968.066 -50.305,83.433 -163.1847,292.014 -251.5252,465.015 -169.3195,331.277 -214.7168,407.348 -276.0644,458.88 -42.9433,35.581 -55.2128,38.035 -94.4752,15.951 z"
                  id="path1"
                  fill="#e8e0ac"
                  fillOpacity="1"
                  stroke="none"
                  strokeWidth="1.22695"
                  transform="matrix(0.1,0,0,-0.1,0,1280)"
                />
              </svg>
            </Link>
          </li>

          <li className=' hover:scale-125 duration-300 ease-in-out'>
            <Link>
              <svg
                width="100px"
                height="75px"
                viewBox="350 275 750 20"
                id="svg11"
              >
                <path
                  d="m 4313.0174,12653.487 c -58.8938,-33.128 -114.1067,-134.965 -185.2699,-341.093 -98.1561,-284.653 -166.8655,-553.355 -212.2627,-839.236 -38.0355,-234.348 -46.6242,-731.263 -17.1774,-987.697 67.4824,-604.8864 267.4757,-1163.1497 587.7103,-1642.8881 341.0927,-510.4122 761.9374,-883.4057 1289.5269,-1142.2926 680.9585,-334.958 1444.1229,-415.9369 2183.9752,-231.8941 469.9227,116.5605 932.4838,347.2276 1334.9241,663.7813 68.7094,53.9859 215.9436,190.1776 327.5963,303.0572 434.3418,435.5681 733.7178,925.1222 932.4838,1522.6476 87.114,262.5677 112.88,395.0787 114.106,570.5327 1.228,185.27 -24.538,261.34 -119.013,357.043 -204.901,203.675 -606.1152,188.951 -1716.5071,-67.483 -917.7604,-212.262 -1393.818,-285.879 -1867.4216,-287.106 -451.5184,-1.227 -739.8522,57.667 -1055.179,214.716 -376.6744,188.951 -693.228,504.277 -975.4271,968.066 -50.305,83.433 -163.1847,292.014 -251.5252,465.015 -169.3195,331.277 -214.7168,407.348 -276.0644,458.88 -42.9433,35.581 -55.2128,38.035 -94.4752,15.951 z"
                  id="path1"
                  fill="#e3a6b7"
                  fillOpacity="1"
                  stroke="none"
                  strokeWidth="1.22695"
                  transform="matrix(0.1,0,0,-0.1,0,1280)"
                />
              </svg>
            </Link>
          </li>

          <li className=' hover:scale-125 duration-300 ease-in-out'>
            <Link>
              <svg
                width="100px"
                height="75px"
                viewBox="350 275 750 20"
                id="svg11"
              >
                <path
                  d="m 4313.0174,12653.487 c -58.8938,-33.128 -114.1067,-134.965 -185.2699,-341.093 -98.1561,-284.653 -166.8655,-553.355 -212.2627,-839.236 -38.0355,-234.348 -46.6242,-731.263 -17.1774,-987.697 67.4824,-604.8864 267.4757,-1163.1497 587.7103,-1642.8881 341.0927,-510.4122 761.9374,-883.4057 1289.5269,-1142.2926 680.9585,-334.958 1444.1229,-415.9369 2183.9752,-231.8941 469.9227,116.5605 932.4838,347.2276 1334.9241,663.7813 68.7094,53.9859 215.9436,190.1776 327.5963,303.0572 434.3418,435.5681 733.7178,925.1222 932.4838,1522.6476 87.114,262.5677 112.88,395.0787 114.106,570.5327 1.228,185.27 -24.538,261.34 -119.013,357.043 -204.901,203.675 -606.1152,188.951 -1716.5071,-67.483 -917.7604,-212.262 -1393.818,-285.879 -1867.4216,-287.106 -451.5184,-1.227 -739.8522,57.667 -1055.179,214.716 -376.6744,188.951 -693.228,504.277 -975.4271,968.066 -50.305,83.433 -163.1847,292.014 -251.5252,465.015 -169.3195,331.277 -214.7168,407.348 -276.0644,458.88 -42.9433,35.581 -55.2128,38.035 -94.4752,15.951 z"
                  id="path1"
                  fill="#cc711d"
                  fillOpacity="1"
                  stroke="none"
                  strokeWidth="1.22695"
                  transform="matrix(0.1,0,0,-0.1,0,1280)"
                />
              </svg>
            </Link>
          </li>

          <li className=' hover:scale-125 duration-300 ease-in-out'>
            <Link>
              <svg
                width="100px"
                height="75px"
                viewBox="350 275 750 20"
                id="svg11"
              >
                <path
                  d="m 4313.0174,12653.487 c -58.8938,-33.128 -114.1067,-134.965 -185.2699,-341.093 -98.1561,-284.653 -166.8655,-553.355 -212.2627,-839.236 -38.0355,-234.348 -46.6242,-731.263 -17.1774,-987.697 67.4824,-604.8864 267.4757,-1163.1497 587.7103,-1642.8881 341.0927,-510.4122 761.9374,-883.4057 1289.5269,-1142.2926 680.9585,-334.958 1444.1229,-415.9369 2183.9752,-231.8941 469.9227,116.5605 932.4838,347.2276 1334.9241,663.7813 68.7094,53.9859 215.9436,190.1776 327.5963,303.0572 434.3418,435.5681 733.7178,925.1222 932.4838,1522.6476 87.114,262.5677 112.88,395.0787 114.106,570.5327 1.228,185.27 -24.538,261.34 -119.013,357.043 -204.901,203.675 -606.1152,188.951 -1716.5071,-67.483 -917.7604,-212.262 -1393.818,-285.879 -1867.4216,-287.106 -451.5184,-1.227 -739.8522,57.667 -1055.179,214.716 -376.6744,188.951 -693.228,504.277 -975.4271,968.066 -50.305,83.433 -163.1847,292.014 -251.5252,465.015 -169.3195,331.277 -214.7168,407.348 -276.0644,458.88 -42.9433,35.581 -55.2128,38.035 -94.4752,15.951 z"
                  id="path1"
                  fill="#4f073e"
                  fillOpacity="1"
                  stroke="none"
                  strokeWidth="1.22695"
                  transform="matrix(0.1,0,0,-0.1,0,1280)"
                />
              </svg>
            </Link>
          </li>
        </ul>
      </aside>

      <div className="ml-64 flex-1 flex flex-col">

        <header className="bg-gray-100 p-4 shadow">
          <h2 className="text-lg font-semibold">Tienda de Vinos</h2>
        </header>

        <main className="p-4 overflow-y-auto">
          {children}
        </main>
      </div>

      <div className={`fixed top-0 left-0 w-screen h-full flex transform transition-transform duration-300 ease-in-out ${isSidebarOpen ? 'translate-x-0' : '-translate-x-full'}`}>
        
        <div className="w-96 h-full flex flex-col justify-between p-6 bg-primary text-secondary dark:bg-secondary dark:text-primary">

          <div>
            <div className="w-full flex flex-col justify-center items-center gap-5 mb-14 text-center">
              <h2 className="text-2xl">Nombre Usuario</h2>
              <div className="size-20 border-4 border-gray-500  rounded-full" />
            </div>

            <ul className='flex flex-col gap-7 text-xl'>
              <li className='w-max'>
                <Link>{t("layout.favoriteList")}</Link>
              </li>
              <li className='w-max'>
                <Link>{t("layout.cart")}</Link>
              </li>
              <li className='w-max cursor-pointer hover:scale-110 hover:text-selected hover:font-bold duration-150 ease-in' onClick={toggleModal}>{t("layout.profile")}</li>
            </ul>

          </div>

          <div className='flex justify-between items-center'>
            <LanguageSwitcher />

            <svg 
              width="1em" 
              height="1em" 
              viewBox="0 0 24 24" 
              className="size-10 cursor-pointer stroke-secondary dark:stroke-primary hover:stroke-red-500 hover:scale-110 duration-200 ease-in"
            >
              <path
                fill="none"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="m12 15l3-3m0 0l-3-3m3 3H4m0-4.752V7.2c0-1.12 0-1.68.218-2.108c.192-.377.497-.682.874-.874C5.52 4 6.08 4 7.2 4h9.6c1.12 0 1.68 0 2.107.218c.377.192.683.497.875.874c.218.427.218.987.218 2.105v9.607c0 1.118 0 1.677-.218 2.104a2 2 0 0 1-.875.874c-.427.218-.986.218-2.104.218H7.197c-1.118 0-1.678 0-2.105-.218a2 2 0 0 1-.874-.874C4 18.48 4 17.92 4 16.8v-.05"
              />
            </svg>

            
          </div>
        </div>

        <div
          className="w-full h-full bg-secondary cursor-pointer opacity-40"
          onClick={toggleSidebar} 
        />

      </div>

      <Modal isOpen={isModalOpen} onClose={toggleModal}>
        
        <header className='flex justify-center items-center gap-6'>
          <div className="w-36 h-32 border-4 border-gray-500 rounded-full" />

          <div className='flex flex-wrap gap-2'>
            <div>
              <label htmlFor="txtUsername">{t("layout.menu.myProfile.labels.userName")}:</label>
              <InputPatch id='txtUsername' value="ManuelKiler" />
            </div>
            <div>
              <label htmlFor="txtPassword">{t("layout.menu.myProfile.labels.password")}:</label>
              <InputPatch id='txtPassword' value={"1234568Aa"} type='password' isSensitive/>
            </div>
            <div>
              <label htmlFor="txtEmail">{t("layout.menu.myProfile.labels.email")}:</label>
              <InputPatch id='txtEmail' value={"manuelGutierre03@gmail.com"} type='email'/>
            </div>
          </div>
        </header>
        <main className='h-max mt-3 flex justify-between'>

          <div className='flex flex-col gap-1'>
            <h2 className='text-2xl font-fire'>{t("layout.menu.myProfile.sectionTitle.personal")}</h2>
            <div>
              <label htmlFor="txtFullName">{t("layout.menu.myProfile.labels.fullname")}:</label>
              <InputPatch id='txtFullName' value='Manuel Jimenez Gutierrez' />

              <label htmlFor="txtBirthDate">{t("layout.menu.myProfile.labels.date")}:</label>
              <InputPatch id='txtBirthDate' value='20/07/2001' type='date' />
              <label htmlFor="txtPhoneNumber">{t("layout.menu.myProfile.labels.phone")}:</label>
              <InputPatch id='txtPhoneNumber' value='+34 943 423 234' />
            </div>
          </div>
          <div className='flex flex-col gap-1'>
            <h2 className='text-2xl text-center font-fire'>{t("layout.menu.myProfile.sectionTitle.delivery")}</h2>
            <div>
              <label htmlFor="txtAddress">{t("layout.menu.myProfile.labels.home")}:</label>
              <InputPatch id="txtAddress" value='Cº Ronaldi' />

              <label htmlFor="txtArea">{t("layout.menu.myProfile.labels.Instructions")}:</label>
              <InputPatch id='txtArea' value='Tira el paquete por arriba' type='textarea'  />

            </div>

            
          </div>
          <div className='flex flex-col justify-start items-center gap-1 text-left'>
            <h2 className='text-2xl text-left font-fire'>{t("layout.menu.myProfile.sectionTitle.bank")}</h2>

            <div>
              <label htmlFor="txtCardName" className='w-full'>{t("layout.menu.myProfile.labels.cardholder")}:</label>
              <InputPatch id='txtCardName' value='Manuel Gimenez Gutierrez' />

              <label htmlFor="txtBillingAddress" className='w-full'>{t("layout.menu.myProfile.labels.facturation")}:</label>
              <InputPatch id='txtBillingAddress' value='Cº Ronaldi' isSensitive />

              <label htmlFor="txtCardNumber" className='w-full'>{t("layout.menu.myProfile.labels.cardnumber")}:</label>
              <InputPatch id='txtCardNumber' value='1233 2343 8978 3482' isSensitive />
          
              <label htmlFor="txtExpirationDate" className='w-full'>{t("layout.menu.myProfile.labels.expiration")}:</label>
              <InputPatch id='txtExpirationDate' value='03/29' type='month' isSensitive/>
              
              <label htmlFor="txtExpirationDate" className='w-52'>CVV:</label>
              <InputPatch id='txtCvv' value='234' isSensitive />
            </div>

          </div>

        </main>

        <svg 
          width="1em" 
          height="1em" 
          viewBox="0 0 24 24"
          className='absolute top-3 right-3 size-9 stroke-secondary cursor-pointer hover:stroke-red-600 duration-150'
        >
          <path 
            fill="none" 
            strokeLinecap="round" 
            strokeLinejoin="round" 
            strokeWidth="2" 
            d="M14 10v7m-4-7v7M6 6v11.8c0 1.12 0 1.68.218 2.108a2 2 0 0 0 .874.874c.427.218.987.218 2.105.218h5.606c1.118 0 1.677 0 2.104-.218c.377-.192.683-.498.875-.874c.218-.428.218-.987.218-2.105V6M6 6h2M6 6H4m4 0h8M8 6c0-.932 0-1.398.152-1.765a2 2 0 0 1 1.082-1.083C9.602 3 10.068 3 11 3h2c.932 0 1.398 0 1.765.152a2 2 0 0 1 1.083 1.083C16 4.602 16 5.068 16 6m0 0h2m0 0h2"/>
        </svg>
      </Modal>

    </main> 
  );
};

Layout.propTypes = {
  children: PropTypes.node.isRequired, 
};

export default Layout;
