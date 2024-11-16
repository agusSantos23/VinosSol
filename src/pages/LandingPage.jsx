
import LanguageSwitcher from "../components/common/LanguageSwitcher.jsx"
import Wine from "../components/common/Wine.jsx"
import BtnAuth from "../components/common/BtnAuth.jsx"
import WineDescription from '../components/sections/WineDescription.jsx'

import logoIMG from "../assets/img/logo.png"
import Footer from "../components/layout/Footer.jsx"


const LadingPage = () => {

  return (
    <main className="bg-primary dark:bg-secondary">

      <section className="h-screen relative">
        <header className="h-16 px-7 pt-5 flex justify-between">
          <div className="opacity-0 animate-opacityDelay1 ">
            <LanguageSwitcher />
          </div>
          <div className="opacity-0 animate-opacityDelay1 ">
            <BtnAuth isLogin={true}/>
          </div>         
        </header>

        <div className="absolute right-1/2 translate-x-1/2 top-1/2 -translate-y-1/2 flex flex-col items-center gap-5">
          <img className="w-72 animate-opacity opacity-0" src={logoIMG} alt="Logo" />

          <h1 className="text-4xl font-fire text-secondary dark:text-primary animate-opacity opacity-0">Vinos Del Sol</h1>
        </div>
        
        <div className="absolute left-10 top-1/2 -translate-y-1/2 w-2/6 h-5/6 ">
          <div className="absolute right-0">
            <Wine idWine={1} invested={true}/>
          </div>
          <div className="absolute top-1/2 -translate-y-1/2">
            <Wine idWine={2} invested={true}/>
          </div>
          <div className="absolute right-0 bottom-0">
            <Wine idWine={3} invested={true}/>
          </div>
        </div>

        <div className="absolute right-10 top-1/2 -translate-y-1/2 w-2/6 h-5/6 ">
          <div>
            <Wine idWine={4} invested={false}/>
          </div>
          <div className="absolute right-0 top-1/2 -translate-y-1/2">
            <Wine idWine={5} invested={false}/>
          </div>
          <div className="absolute bottom-0">
            <Wine idWine={6} invested={false}/>
          </div>
        </div>

        <div className="absolute left-1/2 translate-x-[-50%] bottom-10 animate-opacity">
          <svg 
            width="50px"
            height="50px" 
            className="stroke-secondary dark:stroke-primary animate-bounce"
            viewBox="0 0 24 24">
            <path 
              fill="none" 
              strokeLinecap="round" 
              strokeLinejoin="round" 
              strokeWidth="2" 
              d="M12 7v10m0 0l4-4m-4 4l-4-4" 
            />
          </svg>
        </div>


      </section>

      <WineDescription wine={1} />
      <WineDescription wine={2} />
      <WineDescription wine={3} />
      <WineDescription wine={4} />
      <WineDescription wine={5} />
      <WineDescription wine={6} />

      <Footer />
    </main>
    

  )
}

export default LadingPage
