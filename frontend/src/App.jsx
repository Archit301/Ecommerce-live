import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './component/shared/Header'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
     <Router>
        <Header/>
     <Routes>
      </Routes>
      </Router>
    </>
  )
}

export default App
