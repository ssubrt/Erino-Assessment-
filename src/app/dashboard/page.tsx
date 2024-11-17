



import Appbar from '@/components/Appbar'
import React from 'react'
import ContactsPage from '../contacts/page'



const page = () => {
  return (
    <div>
        <Appbar />
        <div>
           <ContactsPage />
        </div>
    </div>
  )
}

export default page