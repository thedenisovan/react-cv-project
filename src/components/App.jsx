import '../styles/index.css'
import PersonalInfo from './PersonalInfo.jsx'
import Footer from './Footer.jsx'

// To move between pages set state to obj of keys corresponding to page keys
// Or set each page id to idx 0-4 and on button press go to next idx or previous
export default function App() {
  return (
    <div className='font-[sans-serif]'>
      <PersonalInfo/>
      <Footer />
    </div>
  )
}

