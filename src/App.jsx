import {  BrowserRouter as Router, Routes, Route} from "react-router-dom"
import LandingPage from "./pages/LandingPage.jsx"
import Auth from "./pages/Auth.jsx"
import TermsConditions from "./pages/TermsConditions.jsx"

function App() {

  return (
    <Router>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/auth" element={<Auth />} />
        <Route path="/termsconditions" element={<TermsConditions />} />

      </Routes>

    </Router>
  )
}

export default App
