import type { NextPage } from 'next'
import { useContext, useEffect, useState } from 'react'
import { MainContext } from '../context/MainContext'

const Home: NextPage = () => {
  const [isGood, setIsGood] = useState<Boolean>(false);
  const [message, setMessage] = useState<string>('');

  const [value, setValue] = useState<string>('');
  const [isTrue, setIsTrue] = useState<boolean>(false);

  const { soket } = useContext(MainContext);

  useEffect(() => {
    if (soket) {
      soket.on('connected', (isOk: boolean) => {
        setIsGood(isOk);
      })
      soket.on('message', (data: string) => {
        setMessage(data);
      })
      
    }
  }, [soket])
  const sendMessage = () => {
    if (value && isGood) {
      soket.emit(isTrue ? 'announcment' : 'message', value);
    }
  }
  return (
    <div style={{ display: 'flex', flexDirection: 'column' }}>
      {isGood ? 'You are connected' : 'You are Offline'}
      <div style={{ display: 'flex', flexDirection: 'row' }}>
        <input type="text" value={value} onChange={(e) => setValue(e.target.value)} />
        <button onClick={sendMessage}>{`Click to send ${isTrue ? 'announcment' : 'message'}`}</button>
        <input type="checkbox" checked={isTrue} onChange={()=>setIsTrue(!isTrue)} />
      </div>
      <p>{message ? message : null}</p>
    </div>
  )
}

export default Home
