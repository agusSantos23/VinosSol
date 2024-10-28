import {  BrowserRouter as Router, Routes, Route} from "react-router-dom"
import LadingPage from "./pages/LadingPage.jsx"


function App() {

  return (
    <Router>
      <Routes>
        <Route path="/" element={<LadingPage />} />

      </Routes>

    </Router>
  )
}

export default App
