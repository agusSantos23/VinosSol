import { Link } from "react-router-dom"

import SVGarrowToLeft from '../assets/svg/common/arrowToLeft.svg'


const PrivacyPolicy = () => {

  return (
    <main className="flex justify-center items-center  bg-primary h-screen">
      <Link to="/">
        <img 
          src={SVGarrowToLeft} 
          alt="arrow" 
          className='absolute top-8 left-8 size-10 hover:scale-110 cursor-pointer'
        />
      </Link>
      

      <div className='w-4/6 p-5 bg-third rounded-md'>

        <h1>Documentacion de la politica de privacidad</h1>
        <p>
          En Vinos del Sol ,nos comprometemos a proteger y respetar su privacidad en lo que se refiere a sus datos personales .Esta es nuestra Política de Privacidad donde se detallarán como se recopilan ,gestionan y protegen sus datos cuando accede a nuestra página web y hace compra del mejor vino.
        </p>

        <section>
          <h2>Responsable del Tratamiento de Datos</h2>

          <p>
            El responsable del tratamiento de sus datos personales es Vinos del Sol ,con domicilio en Calle de la Vina, 12, 28004 Madrid, España , y correo electrónico de contacto: <b>vinosSol2024@gmail.com</b>
          </p>

        </section>

        <section>
          <h2>Datos que Recopilamos</h2>
          <h3>Recopilamos los siguientes datos personales:</h3>
          <ul>
            <li>
              <b>Informacion de contact:</b> Nombre, apellidos, dirección de correo electrónico y número de teléfono.
            </li>
            <li>
              <b>Datos de envío:</b> Dirección postal, instrucciones de entrega, etc.
            </li>
            <li>
              <b>Información bancaria:</b> Información necesaria para procesar sus pedidos, como detalles de tarjetas de crédito/débito (a través de plataformas seguras), dirección de facturación, etc.
            </li>
            <li>
              <b>Información sobre cuenta:</b> Nombre de usuario ,contraseña y fecha de nacimiento(verificar que es mayor de edad).
            </li>
          </ul>

        </section>
        
        <section>
          <h2>Finalidades del Tratamiento</h2>
          <h3>Sus datos personales se usarán con la finalidad de:</h3>
          <ul>
            <li>
              <b>Gestión de pedidos:</b> Procesar y gestionar sus compras, incluyendo la entrega de productos y la facturación.
            </li>
            <li>
              <b>Atención al cliente:</b> Ofrecer un soporte siempre que se necesite.
            </li>
            <li>
              <b>Mejora del servicio:</b> Analizar su comportamiento en el sitio web para mejorar nuestros servicios y la experiencia del usuario.
            </li>
          </ul>

          <p>
            Todos sus datos se asignarán a los credenciales de acceso de su cuenta personal para llevar a cabo los usos mencionados en un futuro.
          </p>
          
        </section>

        <section>
          <h2>Seguridad de los datos</h2>
          <p>
            Implementamos medidas de seguridad técnicas y organizativas adecuadas para proteger sus datos personales contra el acceso no autorizado, la pérdida o el uso indebido. Toda la información recogida será encriptada para garantizar su confidencialidad y seguridad.
          </p>
        </section>

        <section>
          <h2>Derechos de los usuarios</h2>
          <h3>El usuario tiene derecho a:</h3>
          <ul>
            <li>Acceder a sus datos personales.</li>
            <li>Rectificar datos inexactos o incompletos.</li>
            <li>Suprimir sus datos cuando ya no sean necesarios.</li>
            <li>Limitar el tratamiento de sus datos en determinadas circunstancias.</li>
            <li>Oponerse al tratamiento de sus datos con fines de marketing.</li>
            <li>Solicitar la portabilidad de sus datos a otro responsable.</li>
          </ul>
          <p>
            Para ejercer estos derechos, puede ponerse en contacto con nosotros a través del correo electrónico vinosSol2024@gmail.com.
          </p>

        </section>

        <section>
          <h2>Transferencia de Datos</h2>
          <p>
            No realizamos transferencias de sus datos a ningún tercero ,salvo para brindar información a gestores de envío o si contamos con tu consentimiento.
          </p>
        </section>
        <section>
          <h2>Uso de Cookies</h2>
          <p>
            Nuestro sitio web utiliza cookies para mejorar su experiencia de navegación. Para más información sobre las cookies que utilizamos y cómo gestionarlas, consulte nuestra Política de Cookies.
          </p>
        </section>
        <section>
          <h2>Derecho de modificación de la Política de Privacidad</h2>
          <p>
            Nuestra Política de Privacidad podrá estar sujeta a cambios en cualquier momento y se notificará al usuario cualquiera de estos.
          </p>
        </section>

        <section>
          <h2>Información de Contacto</h2>
          <p>Si resulta tener alguna duda sobre nosotros o sobre esta política de privacidad no dude en ponerse en contacto con nosotros mediante los siguientes medios:</p>
          <ul>
            <li><b>Correo Electrónico:</b> vinosSol2024@gmail.com</li>
            <li><b>Teléfono:</b> 91 123 45 67</li>
            <li><b>Dirección:</b> Calle de la Vina, 12, 28004 Madrid, España</li>
            <li><b>Instagram:</b> @vinos_del_sol</li>
            <li><b>Twitter:</b> @VinosDelSol2024</li>
            <li><b>TikTok:</b> @vinosdelsol</li>
            <li><b>YouTube:</b> @VinosDelSol</li>
          </ul>
        </section>

      </div>
      
    </main>
  )
}

export default PrivacyPolicy
