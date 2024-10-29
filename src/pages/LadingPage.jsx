
import Wine from "../components/common/Wine.jsx"

const LadingPage = () => {

  return (
    <div>
      <Wine color="#6b033b" text="Tinto" invested={true}/>
      <Wine color="#cc711d" text="Generoso" invested={false}/>


      <Wine color="#4f073e"/>
    </div>
  )
}

export default LadingPage
