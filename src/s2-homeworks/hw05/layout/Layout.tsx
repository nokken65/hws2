import React from 'react'

import { Header } from '../header/Header'
import { Sidebar } from '../sidebar/Sidebar'

type PropsType = {
  children: React.ReactNode
}

export const Layout: React.FC<PropsType> = ({ children }) => {
  const [open, setOpen] = React.useState(false)
  const handleClose = () => setOpen(false)
  const handleOpen = () => setOpen(true)

  React.useEffect(() => {
    open && (document.body.style.overflow = 'hidden')
    !open && (document.body.style.overflow = 'unset')
  }, [open]) // отключает прокрутку при открытом меню

  return (
    <>
      <Sidebar
        open={open}
        handleClose={handleClose}
      />
      <Header handleOpen={handleOpen} />
      <div>
        {/*страницы*/}
        {children}
      </div>
    </>
  )
}
