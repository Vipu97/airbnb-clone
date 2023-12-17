import { useEffect, useState } from 'react'
import Header from './components/Header'
import { Outlet } from 'react-router-dom'
import axios from 'axios'
import { UserProvider } from './context/UserContext'
import {ToastContainer} from 'react-toastify'

axios.defaults.withCredentials = true

const SERVER_URL = import.meta.env.VITE_SERVER_URL

function App() {
  const [user, setUser] = useState(null);
  
  useEffect(() => {
    async function fetchUser() {
      if (!user) {
        const res = await axios.get(`${SERVER_URL}/api/profile`)
        setUser(res.data)
      }
    }
    fetchUser()
  }, [])

  return (
    <UserProvider value={{ user, setUser }}>
      <ToastContainer />
      <main className="py-4 px-8 flex flex-col min-h-screen">
        <Header />
        <Outlet />
      </main>
    </UserProvider>
  )
}

export default App
