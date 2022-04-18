import React, { useState, useEffect } from 'react';
import useAuth from '../hooks/useAuth';
import axios from '../api/axios';

const USER_URL = '/users/getUser';

const BalanceCard = () => {
  const { auth } = useAuth();

  const [address, setAddress] = useState('');
  const [ethBalance, setEthBalance] = useState('');
  const [usdBalance, setUsdBalance] = useState('');

  const [userLoaded, setUserLoaded] = useState(false);

  const fetchData = async () => {
    try {
      // console.log(auth.userId);
      // console.log(auth.accessToken);
      const response = await axios.post(USER_URL,
        { userId: auth.userId },
        {
          headers: {
            'Content-Type': 'application/json',
            'x-access-token': auth.accessToken
          }
        }
      );
      console.log(response);
      setAddress(response?.data.address);
      setEthBalance(response?.data.ether);
      setUsdBalance(response?.data.USD);
    } catch (err) {

    }
  }

  useEffect(() => {
    (async () => {
      setUserLoaded(false);
      let res = await fetchData();
      if (res.success) {
        // setUser(res.data.results[0]);
        setUserLoaded(true);
      }
    })();
  }, []);

  // useEffect(async () => {
  //   try {
  //     // console.log(auth.userId);
  //     // console.log(auth.accessToken);
  //     const response = await axios.post(USER_URL, 
  //       { userId: auth.userId},
  //       {
  //         headers: { 'Content-Type':'application/json',
  //         'x-access-token': auth.accessToken}
  //         // 'x-access-token': auth.accessToken
  //       }
  //     );
  //     console.log(response);
  //     setAddress(response?.data.address);
  //     setEthBalance(response?.data.ether);
  //     setUsdBalance(response?.data.USD);
  //   } catch (err) {

  //   }
  // }, []);


  return (
    <div className="flex flex-col p-4 w-full z-0 bg-green-bnk-gr text-white drop-shadow-md rounded-2xl m-auto relative hover:ring-2 ring-green-400">
      <p className="flex  font-bold text-xs my-1 sm:my-2 sm:text-sm">A.N. {address}</p>
      <p className="flex  font-bold text-2xl my-1 sm:my-2 sm:text-4xl">{ethBalance} ETH</p>
      <p className="flex  font-bold text-md my-1 sm:my-2 sm:text-lg">${usdBalance} USD</p>
    </div>
  )
}

export default BalanceCard