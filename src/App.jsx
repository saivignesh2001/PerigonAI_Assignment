import { useState } from 'react'
import {
  BrowserRouter,
  Route,
  Routes,
} from "react-router-dom";
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './index.css'
import {UsersDashboard} from './pages/UsersDashboard'
import {UserEdit} from './pages/UserEdit'
import { UsersContextProvider } from './context/UsersContext';


function App() {
  const [count, setCount] = useState(0)

  
    return (
      <div>
        
        <UsersContextProvider>
        <Routes>

          <Route path="/" element={<UsersDashboard />} />
          <Route path="/edit" element={<UserEdit />} />
          
        </Routes>
        </UsersContextProvider>

      </div>
     
    )
  
}

export default App
