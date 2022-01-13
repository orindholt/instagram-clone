/** @jsxImportSource @emotion/react */
//imported libraries
import { css } from '@emotion/react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'

//reset styling
import './reset.css'

//style
import { colors } from './Components/Theme'

//components/templates
import Home from './Pages/Home'
import Profile from './Pages/Profile'
import NotFound from './Pages/NotFound'
import UserProposal from './Components/UserProposal'

const App = () => {
  return (
    <div className="App" css={css`color: ${colors.black}`}>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      <UserProposal />
      </BrowserRouter>
    </div>
  )
}

export default App
