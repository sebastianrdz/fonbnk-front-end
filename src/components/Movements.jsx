
const Box = ({accountNumber = 'N/A', date = 'N/A', amount= 'N/A', total= 'N/A'}) =>(
  <>
    <div className="rounded-xl drop-shadow-lg bg-white p-4 my-2 flex flex-row text-gray-bnk-100">
      <div className="flex flex-col m-auto sm:flex-row">
        <p className="mr-8 font-bold text-gray-bnk-200">{accountNumber}</p>
        <p className="">{date}</p>
      </div>
      <div className="flex flex-col m-auto sm:flex-row">
        <p className="mr-8 font-bold text-green-bnk-200">{amount}</p>
        <p className="">{total}</p>
      </div>

    </div>
  </>
)

const Movements = () =>{
  return (
    <div className="border-2 flex flex-col scroll-smooth overscroll-contain">
      <p className="ml-4 font-regular text-xl md:text-2xl text-gray-bnk-200 duration-200 flex">Movements</p>
      <Box accountNumber='X632A743E8C14' date='14/04/22' amount='+ 0.32542 ETH' total='0.71877 ETH'/>
      <Box accountNumber='X632A743E8C15' date='14/04/23' amount='- 0.32542 ETH' total='0.71877 ETH'/>
      <Box/>
      <Box accountNumber='X632A743E8C16' date='14/04/23' amount='+ 0.32542 ETH' total='0.71877 ETH'/>
      <Box accountNumber='X632A743E8C17' date='14/04/23' amount='- 0.32542 ETH' total='0.71877 ETH'/>
      <Box accountNumber='X632A743E8C17' date='14/04/23' amount='- 0.32542 ETH' total='0.71877 ETH'/>
      <Box accountNumber='X632A743E8C17' date='14/04/23' amount='- 0.32542 ETH' total='0.71877 ETH'/>
    </div>
  )
}

export default Movements