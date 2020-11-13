import React, { useContext, Suspense } from 'react'
import { GlobalStyles } from './styles/GlobalStyles'
import { Logo } from './components/Logo'
import { Router, Redirect } from '@reach/router'
import { NavBar } from './components/NavBar'
/* import { Home } from './pages/Home'

import { Detail } from './pages/Detail'
' */
// import { Favs } from './pages/Favs'
/* import { User } from './pages/User' */
/* import { NotRegisteredUser } from './pages/NotRegisteredUser' */
import { Context } from './Context'
/* import { NotFound } from './pages/NotFound' */
import { Spinner } from './styles/Spinner'

const Favs = React.lazy(() => import('./pages/Favs'))
const Home = React.lazy(() => import('./pages/Home'))
const Detail = React.lazy(() => import('./pages/Detail'))
const User = React.lazy(() => import('./pages/User'))
const NotRegisteredUser = React.lazy(() => import('./pages/NotRegisteredUser'))
const NotFound = React.lazy(() => import('./pages/NotFound'))

export const App = () => {
  const { isAuth } = useContext(Context)
  return (
    <Suspense fallback={<Spinner />}>
      <GlobalStyles />
      <Logo />
      <Router>
        <NotFound default />
        <Home path='/' />
        <Home path='/pet/:categoryId' />
        <Detail path='/detail/:detailId' />
        {!isAuth && <NotRegisteredUser path='/login' />}
        {!isAuth && <Redirect from='/favs' to='/login' />}
        {!isAuth && <Redirect from='/user' to='/login' />}
        {isAuth && <Redirect from='/login' to='/' />}
        <Favs path='/favs' />
        <User path='/user' />
      </Router>

      <NavBar />
    </Suspense>
  )
}
