import React , { useCallback } from 'react';

const TransferModal = ({setToggleTransfer}) =>{

  const handleChange = useCallback(event => {
    setToggleTransfer(event.target.value)
  }, [setToggleTransfer])

  return (
    <div className="h-screen w-screen bg-gray-bnk-200-t flex justify-center z-20 absolute">
    
      <div className="flex flex-col p-6 bg-white drop-shadow-md rounded-2xl m-auto">
        <p className="flex justify-center font-bold text-2xl">Transfer</p>
        <input type="text" name="anumber" placeholder="Address" className="bg-white rounded-2xl outline-none border-2 duration-200 h-12 w-64 px-6 my-4 hover:drop-shadow-md focus:drop-shadow-md"/>
        <input type="text" name="amount" placeholder="Amount" className="bg-white rounded-2xl outline-none border-2 duration-200 h-12 w-64 px-6 my-4 hover:drop-shadow-md focus:drop-shadow-md"/>
        <div className='flex flex-row my-4'>
          <button onClick={handleChange} className="bg-gray-bnk-100 text-white rounded-2xl outline-none drop-shadow-md duration-200 h-12 w-28 m-auto hover:bg-gray-500">Back</button>
          <button onClick={handleChange} className="bg-green-bnk-200 text-white rounded-2xl outline-none drop-shadow-md duration-200 h-12 w-28 m-auto hover:bg-green-600">Transfer</button>
        </div>
        
      </div>

    </div>
  )
}

export default TransferModal