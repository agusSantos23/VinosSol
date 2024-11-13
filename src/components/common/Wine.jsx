import PropTypes from "prop-types" // Importa PropTypes para definir tipos de propiedades esperadas en el componente
import { useState, useEffect } from "react" // Importa useState, un hook para manejar el estado local en el componente
import { Link } from "react-router-dom" // Importa Link para crear enlaces de navegación en la aplicación web

const Wine = ({idWine, invested}) => {
  /*
    -Parametros
    idWine: Clasificacion del tipo de vino
    invested: Define si se usa la version avanzada (invertida segun su valor)
  */

  //Consulta al navegador si el tema del navegador es oscuro y devuelve un booleano
  const [isDarkMode, setIsDarkMode] = useState(window.matchMedia("(prefers-color-scheme: dark)").matches)

  useEffect(() => {
    //Nos permite escuchar cambios en la preferencia del tema del navegador
    const mediaQuery = window.matchMedia("(prefers-color-scheme: dark)");

    const handleChange = (event) => setIsDarkMode(event.matches)
    
    //Nuestra funcion se ejecute automaticamente cuando el usuario cambie de tema
    mediaQuery.onchange = handleChange;

    // Eliminar el listener cuando el componente se desmonte
    return () => {
      mediaQuery.onchange = null;
    };
  }, []);

  
  const fillColor = isDarkMode ? "#dfded4" : "#111" //Asigna el color del svg 
  const [hovered, setHovered] = useState(false) // Activa el estado hovered al hacer hover sobre el componente avanzado

  // Define los tipos de vino, cada uno con un color y texto asociado segun su idWine
  const wineTypes = {
    1: { color: "#6b033b", text: "Tinto", delay: "animate-opacityDelay1" },
    2: { color: "#e8e0ac", text: "Blanco", delay: "animate-opacityDelay2" },
    3: { color: "#e3a6b7", text: "Rosado", delay: "animate-opacityDelay3" },
    4: { color: "#cc711d", text: "Generoso", delay: "animate-opacityDelay1" },
    5: { color: "#4f073e", text: "Oporto", delay: "animate-opacityDelay2" },
    6: { color: "#690404", text: "Vermu", delay: "animate-opacityDelay3" },
  }
  const { color, text, delay } = wineTypes[idWine]  // Extrae el color y texto del tipo de vino correspondiente al idWine proporcionado

  if (invested !== undefined) {// rederizara el componenete avanzado o simple

    return (
      <div 
        className={`relative w-52 h-60 cursor-pointer opacity-0 ${delay}`}
        onMouseEnter={() => setHovered(true)} // Activa hovered al pasar el raton
        onMouseLeave={() => setHovered(false)} // Desactiva hovered al quitar el raton
      >
        <Link to="#"> 
          <svg
            className={`absolute ${invested ? "right-0" : "left-0"} ${hovered && "animate-swinging" }  `}
            width="176px"
            viewBox="0 0 1280 1280"
          >
            <g
              transform="matrix(0.1,0,0,-0.1,0,1280)"
              stroke="none"
              id="g11"
            >
              
              <path
                d="m 4313.0174,12653.487 c -58.8938,-33.128 -114.1067,-134.965 -185.2699,-341.093 -98.1561,-284.653 -166.8655,-553.355 -212.2627,-839.236 -38.0355,-234.348 -46.6242,-731.263 -17.1774,-987.697 67.4824,-604.8864 267.4757,-1163.1497 587.7103,-1642.8881 341.0927,-510.4122 761.9374,-883.4057 1289.5269,-1142.2926 680.9585,-334.958 1444.1229,-415.9369 2183.9752,-231.8941 469.9227,116.5605 932.4838,347.2276 1334.9241,663.7813 68.7094,53.9859 215.9436,190.1776 327.5963,303.0572 434.3418,435.5681 733.7178,925.1222 932.4838,1522.6476 87.114,262.5677 112.88,395.0787 114.106,570.5327 1.228,185.27 -24.538,261.34 -119.013,357.043 -204.901,203.675 -606.1152,188.951 -1716.5071,-67.483 -917.7604,-212.262 -1393.818,-285.879 -1867.4216,-287.106 -451.5184,-1.227 -739.8522,57.667 -1055.179,214.716 -376.6744,188.951 -693.228,504.277 -975.4271,968.066 -50.305,83.433 -163.1847,292.014 -251.5252,465.015 -169.3195,331.277 -214.7168,407.348 -276.0644,458.88 -42.9433,35.581 -55.2128,38.035 -94.4752,15.951 z"
                id="path1"
                fill={color}
              />

              <path
                d="m 3714.2646,11957.804 c -4.9078,-34.354 -6.1348,-65.028 -2.4539,-68.708 2.4539,-3.682 8.5886,23.312 13.4964,57.666 4.9079,34.355 6.1348,65.029 3.6809,68.709 -3.6809,2.454 -9.8156,-23.312 -14.7234,-57.667 z"
                id="path2"
                fill={fillColor}
              />

              <path
                d="m 3684.8177,11765.173 c -111.6526,-866.229 -23.312,-1689.513 265.0218,-2445.3156 353.3622,-927.576 970.5193,-1636.7545 1771.7192,-2035.514 305.5111,-152.1421 612.2492,-247.8443 968.0654,-304.2842 198.7663,-30.6738 693.228,-30.6738 901.81,0 662.5543,99.3832 1291.9808,381.5822 1864.9676,838.0084 185.2698,147.2343 550.9023,516.547 710.4053,716.5403 258.887,325.1423 509.185,732.4906 656.42,1068.6755 123.922,284.653 184.043,484.6456 215.943,733.7166 19.632,144.781 24.54,426.979 7.362,453.973 -29.446,45.397 -65.028,-33.128 -148.461,-323.916 C 10645.318,9588.5599 10252.694,8891.651 9677.2531,8302.7139 9031.8761,7642.6135 8287.116,7251.2157 7461.3772,7140.79 c -224.5324,-30.6738 -591.3911,-26.993 -820.8312,6.1348 -851.5049,126.376 -1585.2225,571.7598 -2128.7623,1294.4347 -450.2916,599.9796 -723.902,1325.1085 -823.2852,2185.2025 -29.4468,251.524 -29.4468,771.753 0,1040.455 23.3122,207.355 20.8583,278.518 -3.6808,98.156 z"
                id="path3"
                fill={fillColor}
              />

              <path
                d="m 5955.9066,6859.8179 c -39.2625,-28.2199 -51.532,-83.4328 -168.0925,-723.9019 -117.7874,-646.6039 -163.1847,-888.3135 -545.9938,-2963.09 -149.6882,-806.1077 -273.6104,-1479.7045 -277.2912,-1496.8818 -4.9078,-29.447 46.6241,117.7873 134.9647,386.49 24.5391,74.8441 41.7164,112.8795 36.8086,85.8866 -13.4965,-92.0214 4.9078,-36.8085 62.5746,184.0429 61.3476,235.5749 65.0284,251.5252 273.6103,901.8099 501.8236,1569.2721 750.8949,2353.2946 860.0936,2711.5648 137.4187,453.9723 141.0995,506.7313 42.9433,656.4195 -49.0781,74.8441 -182.8158,208.5819 -246.6174,247.8444 -53.9859,33.1277 -132.5108,36.8085 -173.0002,9.8156 z"
                id="path4"
                fill={fillColor}
              />

              <path
                d="m 3076.2494,2190.0372 c -482.1924,-22.0851 -795.0653,-134.9648 -893.2215,-323.9154 -78.5249,-149.6882 11.0427,-355.8162 246.6174,-561.9442 C 3195.2638,631.80767 5171.884,33.054913 6499.4464,72.317393 c 563.1712,15.95038 896.9022,126.376087 1001.1932,330.050187 35.5816,69.93628 29.4468,187.72371 -15.9504,279.74513 -74.8441,153.36901 -280.972,346.00059 -552.1285,515.31999 -163.1847,101.8371 -496.9157,269.9296 -715.3133,360.724 -322.6884,132.5108 -918.9873,319.0076 -1104.2571,343.5467 -55.2128,7.3617 -53.986,7.3617 380.3552,-133.7378 700.5898,-228.2131 1294.4347,-521.4548 1598.719,-790.15739 226.9862,-199.99318 304.2841,-398.75949 212.2627,-543.53987 -120.2413,-188.95066 -463.7879,-283.426 -1031.8669,-282.19905 -1526.3288,1.22695 -3629.3252,782.79559 -3879.6235,1440.44211 -42.9434,112.8796 -22.0851,207.3549 67.4823,295.6955 268.7027,271.1565 1149.6545,304.2842 2318.9401,87.1136 94.4754,-17.1773 173.0003,-28.2198 176.6812,-25.766 7.3617,8.5887 -11.0426,13.4965 -260.1139,68.7094 -677.2777,149.6882 -1110.3919,195.0854 -1619.5771,171.7733 z"
                id="path9"
                fill={fillColor}
              />

              <path
                d="m 5120.3521,2073.4767 c 0,-13.4965 3.6808,-17.1773 7.3616,-7.3617 3.6809,8.5887 2.4539,19.6312 -1.2269,23.312 -3.6809,4.9079 -7.3617,-2.4538 -6.1347,-15.9503 z"
                id="path10"
                fill={fillColor}
              />

              <path
                d="m 5108.0825,2024.3986 c 0,-13.4965 3.6808,-17.1773 7.3617,-7.3617 3.6809,8.5887 2.4539,19.6312 -1.2269,23.3121 -3.6809,4.9078 -7.3617,-2.4539 -6.1348,-15.9504 z"
                id="path11"
                fill={fillColor}
              />

            </g>
          </svg>

          <div className={`absolute  ${invested ? "md:left-8" : "md:right-18"} md:bottom-0 md:w-24 md:h-5 bg-secondary dark:bg-primary rounded-full blur-md ${hovered && "animate-swingingShadow"} `}></div>

          <div className={`absolute  ${invested ? "md:left-0" : "md:right-0"} px-3 py-1 rounded-md text-center text-xl text-secondary dark:text-primary ${hovered && "bg-selected text-third"} font-lora font-bold duration-200 ease-in`}>
            {
              // Divide el texto en letras individuales, asignando un key único a cada div
              text.split("").map((letter, index) => (
                <div 
                  key={index}
                >{letter}</div>
              ))
            }
          </div>
        </Link>
      </div>
    )

  }else{

    return(
      <svg
        width="176px"
        viewBox="0 0 1280 1280"
        preserveAspectRatio="xMidYMid"
      >
        <g
          transform="matrix(0.1,0,0,-0.1,0,1280)"
          stroke="none"
          id="g11"
        > 
          <path
            d="m 4313.0174,12653.487 c -58.8938,-33.128 -114.1067,-134.965 -185.2699,-341.093 -98.1561,-284.653 -166.8655,-553.355 -212.2627,-839.236 -38.0355,-234.348 -46.6242,-731.263 -17.1774,-987.697 67.4824,-604.8864 267.4757,-1163.1497 587.7103,-1642.8881 341.0927,-510.4122 761.9374,-883.4057 1289.5269,-1142.2926 680.9585,-334.958 1444.1229,-415.9369 2183.9752,-231.8941 469.9227,116.5605 932.4838,347.2276 1334.9241,663.7813 68.7094,53.9859 215.9436,190.1776 327.5963,303.0572 434.3418,435.5681 733.7178,925.1222 932.4838,1522.6476 87.114,262.5677 112.88,395.0787 114.106,570.5327 1.228,185.27 -24.538,261.34 -119.013,357.043 -204.901,203.675 -606.1152,188.951 -1716.5071,-67.483 -917.7604,-212.262 -1393.818,-285.879 -1867.4216,-287.106 -451.5184,-1.227 -739.8522,57.667 -1055.179,214.716 -376.6744,188.951 -693.228,504.277 -975.4271,968.066 -50.305,83.433 -163.1847,292.014 -251.5252,465.015 -169.3195,331.277 -214.7168,407.348 -276.0644,458.88 -42.9433,35.581 -55.2128,38.035 -94.4752,15.951 z"
            id="path1"
            fill={color}
          />

          <path
            d="m 3714.2646,11957.804 c -4.9078,-34.354 -6.1348,-65.028 -2.4539,-68.708 2.4539,-3.682 8.5886,23.312 13.4964,57.666 4.9079,34.355 6.1348,65.029 3.6809,68.709 -3.6809,2.454 -9.8156,-23.312 -14.7234,-57.667 z"
            id="path2"
            fill={fillColor}
          />

          <path
            d="m 3684.8177,11765.173 c -111.6526,-866.229 -23.312,-1689.513 265.0218,-2445.3156 353.3622,-927.576 970.5193,-1636.7545 1771.7192,-2035.514 305.5111,-152.1421 612.2492,-247.8443 968.0654,-304.2842 198.7663,-30.6738 693.228,-30.6738 901.81,0 662.5543,99.3832 1291.9808,381.5822 1864.9676,838.0084 185.2698,147.2343 550.9023,516.547 710.4053,716.5403 258.887,325.1423 509.185,732.4906 656.42,1068.6755 123.922,284.653 184.043,484.6456 215.943,733.7166 19.632,144.781 24.54,426.979 7.362,453.973 -29.446,45.397 -65.028,-33.128 -148.461,-323.916 C 10645.318,9588.5599 10252.694,8891.651 9677.2531,8302.7139 9031.8761,7642.6135 8287.116,7251.2157 7461.3772,7140.79 c -224.5324,-30.6738 -591.3911,-26.993 -820.8312,6.1348 -851.5049,126.376 -1585.2225,571.7598 -2128.7623,1294.4347 -450.2916,599.9796 -723.902,1325.1085 -823.2852,2185.2025 -29.4468,251.524 -29.4468,771.753 0,1040.455 23.3122,207.355 20.8583,278.518 -3.6808,98.156 z"
            id="path3"
            fill={fillColor}
          />

          <path
            d="m 5955.9066,6859.8179 c -39.2625,-28.2199 -51.532,-83.4328 -168.0925,-723.9019 -117.7874,-646.6039 -163.1847,-888.3135 -545.9938,-2963.09 -149.6882,-806.1077 -273.6104,-1479.7045 -277.2912,-1496.8818 -4.9078,-29.447 46.6241,117.7873 134.9647,386.49 24.5391,74.8441 41.7164,112.8795 36.8086,85.8866 -13.4965,-92.0214 4.9078,-36.8085 62.5746,184.0429 61.3476,235.5749 65.0284,251.5252 273.6103,901.8099 501.8236,1569.2721 750.8949,2353.2946 860.0936,2711.5648 137.4187,453.9723 141.0995,506.7313 42.9433,656.4195 -49.0781,74.8441 -182.8158,208.5819 -246.6174,247.8444 -53.9859,33.1277 -132.5108,36.8085 -173.0002,9.8156 z"
            id="path4"
            fill={fillColor}
          />

          <path
            d="m 3076.2494,2190.0372 c -482.1924,-22.0851 -795.0653,-134.9648 -893.2215,-323.9154 -78.5249,-149.6882 11.0427,-355.8162 246.6174,-561.9442 C 3195.2638,631.80767 5171.884,33.054913 6499.4464,72.317393 c 563.1712,15.95038 896.9022,126.376087 1001.1932,330.050187 35.5816,69.93628 29.4468,187.72371 -15.9504,279.74513 -74.8441,153.36901 -280.972,346.00059 -552.1285,515.31999 -163.1847,101.8371 -496.9157,269.9296 -715.3133,360.724 -322.6884,132.5108 -918.9873,319.0076 -1104.2571,343.5467 -55.2128,7.3617 -53.986,7.3617 380.3552,-133.7378 700.5898,-228.2131 1294.4347,-521.4548 1598.719,-790.15739 226.9862,-199.99318 304.2841,-398.75949 212.2627,-543.53987 -120.2413,-188.95066 -463.7879,-283.426 -1031.8669,-282.19905 -1526.3288,1.22695 -3629.3252,782.79559 -3879.6235,1440.44211 -42.9434,112.8796 -22.0851,207.3549 67.4823,295.6955 268.7027,271.1565 1149.6545,304.2842 2318.9401,87.1136 94.4754,-17.1773 173.0003,-28.2198 176.6812,-25.766 7.3617,8.5887 -11.0426,13.4965 -260.1139,68.7094 -677.2777,149.6882 -1110.3919,195.0854 -1619.5771,171.7733 z"
            id="path9"
            fill={fillColor}
          />

          <path
            d="m 5120.3521,2073.4767 c 0,-13.4965 3.6808,-17.1773 7.3616,-7.3617 3.6809,8.5887 2.4539,19.6312 -1.2269,23.312 -3.6809,4.9079 -7.3617,-2.4538 -6.1347,-15.9503 z"
            id="path10"
            fill={fillColor}
          />

          <path
            d="m 5108.0825,2024.3986 c 0,-13.4965 3.6808,-17.1773 7.3617,-7.3617 3.6809,8.5887 2.4539,19.6312 -1.2269,23.3121 -3.6809,4.9078 -7.3617,-2.4539 -6.1348,-15.9504 z"
            id="path11"
            fill={fillColor}
          />
        </g>
      </svg>
    )
  }
}

Wine.propTypes = {
  idWine: PropTypes.number.isRequired, // numero obligatorio
  invested: PropTypes.bool, // booleano
}

export default Wine