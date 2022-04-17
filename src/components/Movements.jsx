
const Box = ({accountNumber = 'N/A', date = 'N/A', amount= 'N/A', total= 'N/A'}) =>{
  var isNegative = false;
  if(amount[0] == '-') isNegative = true;
  return (
  <>
    <div className="rounded-xl drop-shadow-lg bg-white p-4 my-2 flex flex-row text-gray-bnk-100">
      <div className="flex flex-col m-auto sm:flex-row">
        <p className="sm:mr-6 lg:mr-24 font-bold text-gray-bnk-200">{accountNumber}</p>
        <p className="">{date}</p>
      </div>
      <div className="flex flex-col m-auto sm:flex-row">
        <p className={isNegative ? "sm:mr-6 lg:mr-24 font-bold text-red-400": "sm:mr-8 lg:mr-24 font-bold text-green-bnk-200"}>{amount}</p>
        <p className="">{total}</p>
      </div>
    </div>
  </>
)}

const Movements = () =>{
  return (
    <div>
      <p className="ml-4 font-regular text-xl md:text-2xl text-gray-bnk-200 duration-200 flex">Movements</p>
      <div className="flex flex-col h-1/2 p-2 pt-4 overflow-auto overscroll-contain">
        <Box accountNumber='X632A743E8C14' date='14/04/22' amount='+0.32542ETH' total='0.71877 ETH'/>
        <Box accountNumber='X632A743E8C15' date='14/04/23' amount='- 0.32542 ETH' total='0.71877 ETH'/>
        <Box/>
        <Box accountNumber='X632A743E8C16' date='14/04/23' amount='+ 0.32542 ETH' total='0.71877 ETH'/>
        <Box accountNumber='X632A743E8C17' date='14/04/23' amount='- 0.32542 ETH' total='0.71877 ETH'/>
        <Box accountNumber='X632A743E8C17' date='14/04/23' amount='- 0.32542 ETH' total='0.71877 ETH'/>
        <Box accountNumber='X632A743E8C17' date='14/04/23' amount='- 0.32542 ETH' total='0.71877 ETH'/>
      </div>
    </div>
    
  )
}

export default Movements



{/* <div className="center-col">
      <span>List</span>
      <ul>
        {items.map((item, i) => (<li key={`item_${i}`}>{ item }</li>))}
      </ul>
    </div> */}