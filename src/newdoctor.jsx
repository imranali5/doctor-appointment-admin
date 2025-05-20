import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './output.css'
import Nav from './nav.jsx'
import Aside from './aside.jsx'
import AddDoctor from './AddDoctor.jsx'
createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Nav></Nav>
    <div className='flex'>
      <Aside></Aside>
    <AddDoctor></AddDoctor>
    </div>
    
  </StrictMode>,
)
