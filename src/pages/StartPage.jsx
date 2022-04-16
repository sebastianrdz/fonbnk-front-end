import React , { useState } from "react"
import { LoginModal, SignUpModal, TransferModal } from "../components"

const StartPage = () =>{
  const [toggleLogin, setToggleLogin] = useState(true);

  return (
    <div className="h-screen w-screen border-2 border-green-500 flex justify-center duration-200">
      {toggleLogin ? <LoginModal setToggleLogin={setToggleLogin}/> : <SignUpModal setToggleLogin={setToggleLogin}/>}
    </div>
  )
}

export default StartPage