import Logo from '../assets/Group_17.png'

const SideNavbar = () =>{
  return (
    <div className="h-screen border-2 border-green-500 w-1/4 rounded-r-2xl hidden flex-col md:flex">
      <div className='nav__bg rounded-tr-2xl duration-200 h-44 xl:h-64'>
        <img src={Logo} alt="logo" className="w-32 duration-200 xl:w-44 m-10"/>
      </div>
      <div>
      Links
      </div>
    </div>
  )
}

export default SideNavbar