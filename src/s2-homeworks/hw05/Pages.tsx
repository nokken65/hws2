import React from 'react'
import { Navigate, Route, Routes } from 'react-router-dom'

import Error404 from './pages/Error404'
import Junior from './pages/Junior'
import JuniorPlus from './pages/JuniorPlus'
import PreJunior from './pages/PreJunior'

export const PATH = {
  PRE_JUNIOR: '/pre-junior',
  JUNIOR: '/junior',
  JUNIOR_PLUS: '/junior-plus'
}

function Pages() {
  return (
    <div>
      <Routes>
        <Route
          index
          element={<Navigate to={'/pre-junior'} />}
        />

        <Route
          path="/pre-junior"
          element={<PreJunior />}
        />
        <Route
          path="/junior"
          element={<Junior />}
        />
        <Route
          path="/junior-plus"
          element={<JuniorPlus />}
        />

        <Route
          path={'/404'}
          element={<Error404 />}
        />
      </Routes>
    </div>
  )
}

export default Pages
