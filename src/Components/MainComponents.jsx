import { Route, Routes } from "react-router-dom"
import ChatPage from "./ChatPage"
import Home from "./Home"
import Login from "./login"




const MainComponents = () => {

  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/login" element={<Login />} />
      <Route path="/chatpage" element={<ChatPage />} />


    </Routes>
  )


}

export default MainComponents