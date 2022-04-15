import { LoginModal, SignUpModal } from "../components"

const StartPage = () =>{
  return (
    <div className="h-screen w-screen border-2 border-green-500 flex justify-center">
      <LoginModal/>
      <SignUpModal/>
    </div>
  )
}

export default StartPage