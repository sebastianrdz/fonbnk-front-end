import { SideNavbar, BalanceCard, Buttons, Movments } from "../components"

const Dashboard = () =>{
  return (
    <div className="h-screen w-screen border-2 border-green-400">
      <SideNavbar/>
      <BalanceCard/>
      <Buttons/>
      <Movments/>
    </div>
  )
}

export default Dashboard