import React,{ memo,useState,useEffect } from 'react'
import { Link, useLocation, useNavigate } from 'react-router-dom'
import { Icons, Image } from '../../assets/image'
import { useDispatch, useSelector } from 'react-redux'
import { LoginOut } from '@/store/action/user'
import { useRequest } from 'ahooks'
import './index.scss'


function BasicLayout(props: {
  children: React.ReactNode;
  title: string;
  pathname: string;
}) {
  
  const { children, title, pathname } = props;
  return (
    <div className='layout'>
      <div className='header'>
        <div className='left'>
          <div className='logo'><img src={Image.logo} alt="logo" /></div>
          <div className='link'>
            <Link to="/" className={pathname == '/' ? 'active' : ''}><Icons.home /></Link>
          </div>
          <div className='link'>
            <Link to="/alarm" className={pathname == '/alarm' ? 'active' : ''}><Icons.notice /></Link>
          </div>
        </div>
        <div className='title'>
          <div className='info gradient-title'>{ title }</div>
        </div>
        <div className='right'>
          <div className='link'>
            <Link to="/dataLog" className={pathname == '/dataLog' ? 'active' : ''}><Icons.alarm /></Link>
          </div>
          <div className='link'>
            <Link to="/configuration" className={pathname == '/configuration' ? 'active' : ''}><Icons.Configuration /></Link>
          </div>
          <div className='link'>
            <Link to="/firmware" className={pathname == '/firmware' ? 'active' : ''}><Icons.edit /></Link>
          </div>
          <div className='link'>
            <div className='clickLock'><Icons.unlocks /></div>
          </div>
          <div className='link'>
            <Link to="/"><Icons.in /></Link>
          </div>
        </div>
      </div>
      <div className='site-layout-content'>{children}</div>
      
    </div>
  )
}

export default memo(BasicLayout)