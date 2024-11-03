
import LanguageSwitcher from "../components/common/LanguageSwitcher.jsx"
import Wine from "../components/common/Wine.jsx"
import logoIMG from "../assets/img/logo.png"


const LadingPage = () => {

  return (
    <main className="bg-primary dark:bg-secondary">

      <section className="h-screen relative">
        <header className="h-16 px-7 pt-5">
          <LanguageSwitcher />

          {/* btn Autentificarse*/}
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

      </section>
    </main>
  )
}

export default LadingPage
