import { SideNavbar, BalanceCard, Buttons, Movments } from "../components"

const Dashboard = () =>{
  return (
    <div className="h-screen w-screen flex flex-col md:flex-row">
      <div className="flex flex-row z-10">
        <SideNavbar/>
        <h1 className="mt-3 mb-2 font-bold text-2xl md:text-3xl duration-200 md:hidden">Dashboard</h1>
      </div>

      <div className="p-4 w-screen flex flex-col max-w-6xl">
        <h1 className="mt-3 mb-4 font-bold text-2xl md:text-3xl text-gray-bnk-200 duration-200 hidden md:flex">Dashboard</h1>
        <p className="mb-2 ml-4 font-regular text-xl md:text-2xl text-gray-bnk-200 duration-200 flex">Balance</p>
        <div className="flex flex-col lg:flex-row mb-8">
          <BalanceCard />
          <Buttons/>
        </div>
        <Movments/>
      </div>

      
      
    </div>
  )
}

export default Dashboard