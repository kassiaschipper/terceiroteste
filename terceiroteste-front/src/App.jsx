import { useState } from 'react'
import Home from './components/Home'
import GlobalStyle from "../src/assets/styles/GlobalStyle";
import { BrowserRouter, Routes, Route } from "react-router-dom";


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <GlobalStyle />
      <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home />} />
      </Routes>
      </BrowserRouter>
      
    </>
  )
}

export default App
