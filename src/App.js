/** @jsxImportSource @emotion/react */
//imported libraries
import { css } from '@emotion/react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Header from './Templates/Header'

//reset styling
import './reset.css'

//style
import { colors } from './Components/Theme'

//components/templates
import Home from './Pages/Home'
import Profile from './Pages/Profile'
import NotFound from './Pages/NotFound'

//app title
document.title = 'Instagram Clone'

const App = () => {
  return (
    <div
      className="App"
      css={css`
        color: ${colors.black};
        padding-top: 60px;
      `}
    >
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App
