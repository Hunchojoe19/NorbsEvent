import React from 'react'
import SideNav from './SideNav'
import Header from './Header'

const Container = (props) => {
  return (
    <>
        <SideNav />
        <div className='dashBoardBodyContainer'>
            <Header />
            {props.children}
        </div>
    </>
  )
}

export default Container