import React from 'react'
import { Route, Routes } from 'react-router-dom'
import './main.scss'
import Layout from './components/layout'
import Success from './pages/checkoutSuccess'
import CreateVenue from './pages/createVenue'
import Home from './pages/home'
import Login from './pages/login'
import Register from './pages/register'
import Venue from './pages/venue'

const App = () => {
  return (
    <>
    <Layout>
      <Routes>
        <Route index element={<Home/>}/>
        <Route path="createvenue" element={<CreateVenue/>}/>
        <Route path="success" element={<Success/>}/>
        <Route path="login" element={<Login/>}/>
        <Route path="register" element={<Register/>}/>
        <Route path="venue" element={<Venue/>}/>
      </Routes>
    </Layout>
    </>
  )
}

export default App