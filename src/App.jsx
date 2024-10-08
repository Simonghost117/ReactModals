import { Routes,Route, Navigate } from "react-router-dom"
import Modal from "./pages/Modal"

function App() {

  return (
    <>
    
    <Routes>
      
      <Route path="/" element={<Modal/>}/>

      <Route path='*' element={<Navigate to="/" />} />
    </Routes>
    </>
  )
}

export default App
