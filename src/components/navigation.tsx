import React, {useState} from 'react'
import { Link } from 'react-router-dom'
import { Avatar } from 'antd'

const navLinks = [
  {
    title: 'Home',
    path: '/',
  },
  {
    title: 'Blog',
    path: '/blog',
  },
  {
    title: 'ContactUs',
    path: '/contact-us',
  },
  {
    title: 'Login',
    path: '/login',
  },
]

interface User {
  user: {firstName: string; lastName: string}
}

export default function Navigation({user}: User) {
  const [menuActive, setMenuActive] = useState(false);


  return (
    <nav className='site-navigation'>
      <span className='menu-title'>My React Blog</span>
      <div className={`menu-content-container ${menuActive && 'active'}`}>
        <ul>
          {navLinks.map((link, index) => (
            <li key={index}>
              <Link to={link.path}>{link.title}</Link>
            </li>
          ))}
        </ul>
        <span className="menu-avatar-container">
          <Avatar src='https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png'
                  size={38} />
          <span className="menu-avatar-name">{`${user.firstName} ${user.lastName}`}</span>
        </span>  
      </div>
      <i className="ionicons icon ion-ios-menu" onClick={() => setMenuActive(!menuActive)} />
    </nav>
  )
}
