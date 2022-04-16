import React , { useCallback } from 'react';

const BalanceCard = () =>{
  return (
    <div className="flex flex-col p-4 w-full z-0 bg-green-bnk-gr text-white drop-shadow-md rounded-2xl m-auto relative">
      <p className="flex  font-bold text-xs my-1 sm:my-2 sm:text-sm">A.N. A8A09820S9A0</p>
      <p className="flex  font-bold text-2xl my-1 sm:my-2 sm:text-4xl">0.39345 ETH</p>
      <p className="flex  font-bold text-md my-1 sm:my-2 sm:text-lg">$1,176.91 USD</p>
    </div>
  )
}

export default BalanceCard