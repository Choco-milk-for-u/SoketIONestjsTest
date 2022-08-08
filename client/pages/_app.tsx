import type { AppProps } from 'next/app'
import { useEffect, useState } from 'react'
import { io } from 'socket.io-client';
import { IContext, MainContext } from '../context/MainContext'

function MyApp({ Component, pageProps }: AppProps) {
  const [soket, setSoket] = useState<any>(null!);

  const initial: IContext = {
    soket: soket,
    setSoket: setSoket,
  }
  useEffect(()=>{
    const soket = io('http://localhost:5000');
    soket.emit('connection');
  
    setSoket(soket);
    soket.on('announcment', (data)=>{
      alert(data);
    })
  },[])
  return (
    <MainContext.Provider value={initial}>
      <Component {...pageProps} />
    </MainContext.Provider>
  )

}

export default MyApp
