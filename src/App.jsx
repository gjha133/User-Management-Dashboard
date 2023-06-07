import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import User from "./components/User/User"
import Sidebar from "./components/Sidebar"
import Header from "./components/Header"
import CreateUser from "./components/User/CreateUser"
import EditUser from "./components/User/EditUser"
import Album from './components/User/Album'
import { Toaster } from "react-hot-toast"
import { useEffect } from "react"
import { getAllUsers } from "./features/userDetailSlice"
import { useDispatch } from "react-redux"

function App() {
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(getAllUsers())    
  }, [])
  

  return (
    <Router>
      <div className="w-screen h-screen">
        <Sidebar />
        <div className="ml-52">
          <Header />
          <div className="pt-14 p-2">
            <Routes>
              <Route path="/" element={<User />} />
              <Route path='/create' element={<CreateUser />} />
              <Route path='/edit/:id' element={<EditUser />} />
              <Route path='/album/:id' element={<Album />} />
            </Routes>
          </div>
        </div>
      </div>
      <Toaster />
    </Router>
  )
}

export default App
