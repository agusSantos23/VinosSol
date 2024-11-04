import {  BrowserRouter as Router, Routes, Route} from "react-router-dom"
import LadingPage from "./pages/LadingPage.jsx"
import Auth from "./pages/Auth.jsx"

function App() {

  return (
    <Router>
      <Routes>
        <Route path="/" element={<LadingPage />} />
        <Route path="/auth" element={<Auth />} />


      </Routes>

    </Router>
  )
}

export default App
