import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './styles/index.css'
import PersonalInfo from './components/PersonalInfo'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <PersonalInfo key='personalInfoPage' />
  </StrictMode>
)
