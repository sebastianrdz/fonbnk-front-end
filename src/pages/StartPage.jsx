import { LoginModal, SignUpModal } from "../components"

const StartPage = () =>{
  return (
    <div className="h-screen w-screen border-2 border-green-400 flex justify-center">
      <LoginModal/>
      <SignUpModal/>
    </div>
  )
}

export default StartPage