import React from 'react'
import TopBar from './component/TopBar'
import SideBar from './component/SideBar'
import Contacts from './component/Contact'
import ContactForm from './component/ContactForm'
const App = () => {
  return (
    <div className='relative flex flex-auto flex-col w-full overflow-y-auto overflow-hidden h-full'>
      <TopBar/>
      <div className="flex flex-auto w-full h-full">
        <SideBar/>
        <Contacts/>
      <ContactForm />
      </div>
    </div>
  )
}

export default App