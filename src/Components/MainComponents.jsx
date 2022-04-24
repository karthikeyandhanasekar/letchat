import { Route, Routes } from "react-router-dom"
import Home from "./Home"
import Login from "./login"




const MainComponents = () => {

  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/login" element={<Login />} />

    </Routes>
  )


}

export default MainComponents