import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Container from '../../components/dashboard/Container'
import MyEvents from './pages/events/MyEvents'
import CreateEvents from './pages/events/CreateEvents'
import "./dashboard.css"

const Dashboard = () => {
  return (
    <div className='dashboardContainer'>
        <Container>
            <Routes>
                <Route path='/' element={<MyEvents/>} />
                <Route path='/create-events' element={<CreateEvents/>} />
            </Routes>
        </Container>
    </div>
  )
}

export default Dashboard