import {  BrowserRouter as Router, Routes, Route} from "react-router-dom"
import LandingPage from "./pages/LandingPage.jsx"
import Auth from "./pages/Auth.jsx"

function App() {

  return (
    <Router>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/auth" element={<Auth />} />


      </Routes>

    </Router>
  )
}

export default App
