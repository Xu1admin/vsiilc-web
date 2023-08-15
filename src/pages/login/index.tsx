import React,{ FC, useEffect, useState } from 'react';
import { useNavigate,useParams } from 'react-router-dom';
import { useDispatch } from 'react-redux'
import { Icons } from '../../assets/image'
import './index.scss'

const Login:FC<any> = () => {
  const dispatch = useDispatch()
  const navigate = useNavigate()
  
  const onFinish = (values:any) => {
    navigate('/')
  }
  // 发送验证码
  const requestCode = () => {
  }
  return (
    <div className='login-master-page'>
      <div className='con'>
        <div className='logo-header'>VSIIC LOGIN</div>
        <div className='form'>
          <div className='item'>
            <span>Username</span>
            <div className='input'>
              <i className='input-prefix'><Icons.user /></i>
              <input type="text" value="2323" />
            </div>
          </div>
          <div className='item'>
            <span>Password</span>
            <div className='input'>
              <i className='input-prefix'><Icons.lock /></i>
              <input type="password" value="2323" />
            </div>
          </div>
          <div className='submit'>
            <button type="button" onClick={onFinish} className="submit-bu">
              Sign In
              <Icons.logout />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}


export default Login
