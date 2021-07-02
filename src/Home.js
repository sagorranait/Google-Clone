import React from 'react'
import './Home.css'
import {Link} from 'react-router-dom'
import AppsIcon from '@material-ui/icons/Apps'
import { Avatar } from '@material-ui/core'
import Search from './components/Search'

const Home = () => {
  return (
    <div className="home">
      <div className="home__header">
        <div className="home_headerLeft">
          <Link to='/about'>About</Link>
          <Link to='/store'>Store</Link>
        </div>
        <div className="home_headerRight">
        <Link to='/gmail'>Gmail</Link>
        <Link to='/images'>Images</Link>
        <AppsIcon />
        <Avatar src="https://lh3.googleusercontent.com/ogw/ADGmqu_J1L2wp36KOW8zf5H_nfbPZw9Wy28HeqUqvEcr=s32-c-mo" />
        </div>
      </div>
      <div className="home__body">
        <img src="https://i.ibb.co/mzf5SzR/google-PNG19644.png" alt="Google Logo" />
        <div className="home_searchBox">
          <Search />
        </div>
      </div>
    </div>
  )
}

export default Home
