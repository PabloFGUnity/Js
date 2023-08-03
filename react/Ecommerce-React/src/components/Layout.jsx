// Aquí va el outlet y el navbar
import Nav from './Nav'
import Footer from './Footer'
import {Outlet} from 'react-router-dom'
import Header from './Header'
function Layout({withUser}) {
  return (
    <>
    <Header/>
    <Nav withUser ={withUser}/>
    <Outlet/>
    <Footer/>

    </>
  )
}

export default Layout