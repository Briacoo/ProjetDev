import '../App.css'
import '../Styles/variables.css'
import { Outlet } from 'react-router-dom'
import Footer from './Footer'
import Header from './Header'

function Layout () {
  return (
    <>
      <div className='App'>
        <Header />
        <main className='content'>
          <Outlet />
        </main>
        <Footer />
      </div>
    </>
  )
}

export default Layout
