import React, {useRef, useEffect, useContext} from 'react'
import './Header.css'
import {Container, Row, Button} from 'reactstrap'
import {NavLink, Link, useNavigate} from 'react-router-dom'
import logo from '../../assets/images/logo.png'

import { AuthContext } from '../../context/authContext'

const nav_links = [
  {
    path: '/home',
    display: 'home'
  },
  {
    path: '/about',
    display: 'About'
  },
  {
    path: '/tours',
    display: 'Tours'
  },
]

const Header = () => {
  const headerRef = useRef(null)
  const navigate = useNavigate()

  const {user, dispatch} = useContext(AuthContext)

  const logout = () => {
    dispatch({type: 'logout'})
    navigate('/')
  }

  const stickyHeaderFunc = () => {
    window.addEventListener('scroll', () =>{
      if(document.body.scrollTop > 80 || document.documentElement.scrollTop > 80){
        headerRef.current.classList.add('sticky_header')
      }else{
        headerRef.current.classList.remove('sticky_header')
      }
    })
  }

  useEffect(()=>{
    stickyHeaderFunc()

    return window.removeEventListener('scroll', stickyHeaderFunc)
  })
  return (
    <header className="header" ref={headerRef}>
      <Container>
        <Row>
          <div className="nav__wrapper d-flex align-items-center justify-content-between">
            <div className="logo">
              <img src={logo} alt="" />
            </div>
            <div className="navigation">
                <ul className="menu d-flex align-items-center gap-5">
                  {
                    nav_links.map((item, index) =>(
                      <li className="nav__items" key={index}>
                        <NavLink to={item.path}
                        className={navClass => navClass.isActive ? 'active__link' : ""}
                        >{item.display}</NavLink>
                      </li>
                    ))
                  }
                </ul>
              </div>

              <div className="nav__right d-flex align-items-center gap-4">
                <div className="nav__btns d-flex align-items-center gap-4">

                  {
                    user? <>
                    <h5 className='mb-0'>{user.username}</h5>
                    <button className='btn btn-dark' onClick={logout}>Logout</button>
                    </> : <>
                    <Button className="btn secondary__btn"><Link to='/login'>Login</Link></Button>
                  <Button className="btn primary__btn"><Link to='/register'>Register</Link></Button>
                    </>
                  }
                  
                </div>
                <span className="mobile__menu">
                  <i className="ri-menu-line"></i>
                </span>
              </div>
          </div>
        </Row>
      </Container>
    </header>
  )
}

export default Header