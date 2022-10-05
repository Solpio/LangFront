import { Route, Routes } from 'react-router-dom'
import MainPage from '../pages/Main'
import Auth from '../pages/Auth'
import BooksPage from '../pages/Books'
import NotFound from '../pages/NotFound'
import React from 'react'
import GroupPage from '../pages/Group'

export const AppRoutes = () => {
  return (
    <Routes>
      <Route path={'/'} element={<MainPage />}></Route>
      <Route path={'/auth/login'} element={<Auth type={'login'} />}></Route>
      <Route
        path={'/auth/registration'}
        element={<Auth type={'registration'} />}
      ></Route>
      <Route path={'/auth/login'} element={<Auth type={'login'} />}></Route>
      <Route path={'/books'} element={<BooksPage />}></Route>
      <Route path={'/books/:id/page'} element={<GroupPage />}></Route>
      <Route path={'*'} element={<NotFound />}></Route>
    </Routes>
  )
}
