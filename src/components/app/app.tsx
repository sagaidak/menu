import React, { useState } from 'react'
import './app.scss';
import SVGIcon from '../svg-icon/svg-icon';
import logo from './logo.svg'
import img from './img.svg'
import ava from './avatar.svg'

type MenuItem = { name: string, badge?: string, quantity?: string }

const App = () => {
  const menu: MenuItem[] = [
    { name: 'Users' },
    { name: 'Sessions', quantity: '85' },
    { name: 'Analytics', badge: 'Soon' },
    { name: 'Messages', badge: 'Soon' },
    { name: 'Chats', badge: 'Soon' },
    { name: 'Help center', badge: 'Soon' },
    { name: 'Settings' }
  ]

  const [ active, setActive ] = useState('')
  const [ hovered, setHovered ] = useState('')

  return (
    <div className='main'>
      <div className='sidebar'>
        
        <div className='menu'>
          <div className='logo'>
            <img src={logo} alt='logo' />
          </div>
          {
            menu.map((x: MenuItem) => {
              const act = x.name === active ? true : false
              const hov = hovered === x.name ? true : false

              return <div 
                  className={`menu_item ${act ? 'active' : ''}`} 
                  key={x.name}
                  onMouseEnter={() => setHovered(x.name)}
                  onMouseLeave={() => setHovered('')}
                >
                  <SVGIcon name={x.name} stroke={`${act || hov ? '#2361FF' : '#4D586D'}`} className='icon' />
                  <div className='menu_name' onClick={() => setActive(x.name)}>{x.name}</div>
                  <div className={`menu_badge ${x.badge ? '' : 'empty'}`}>{x.badge}</div>
                  {x.quantity && <div className={`menu_badge quantity`}>{x.quantity}</div>}
                </div>
              }
            )
          }
        </div>

        <div className='human'>
          <img src={ava} alt='ava' />
          <div>Peterson Jacksonmom</div>
        </div>
      </div>
      <div className='content_wrapper'>
        <div className='content'>
          <img src={img} alt='img' />
          <div className='line1'>We’re working on this page now!</div>
          <div className='line2'>You will definetely know when it will be ready</div>
        </div>
      </div>
    </div>
  );
};

export default App;