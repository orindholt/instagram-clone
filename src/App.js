/** @jsxImportSource @emotion/react */
//imported libraries
import { css } from '@emotion/react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'

//reset styling
import './reset.css'

//style
import { theme } from './Components/Theme'

//components/templates
import Home from './Pages/Home'
import Profile from './Pages/Profile'
import NotFound from './Pages/NotFound'

const App = () => {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
