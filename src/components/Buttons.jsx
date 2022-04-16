import { RiShoppingCartLine, RiBitCoinLine, RiArrowLeftRightLine } from "react-icons/ri";

const Buttons = () =>{
  return (
    <div className="flex flex-row justify-center p-8">
      <button className="p-4 m-auto lg:mx-4 rounded-full drop-shadow-lg bg-green-bnk-gr"><RiShoppingCartLine size={28} className='text-white'/></button>
      <button className="p-4 m-auto lg:mx-4 rounded-full drop-shadow-lg bg-green-bnk-gr"><RiBitCoinLine size={28} className='text-white'/></button>
      <button className="p-4 m-auto lg:mx-4 rounded-full drop-shadow-lg bg-green-bnk-gr"><RiArrowLeftRightLine size={28} className='text-white'/></button>
    </div>
  )
}

export default Buttons