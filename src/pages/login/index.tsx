import React,{ FC, useEffect, useState } from 'react';
import { useNavigate,useParams } from 'react-router-dom';
import { useDispatch } from 'react-redux'
import { Icons } from '../../assets/image'
import './index.scss'

const Login:FC<any> = () => {
  const dispatch = useDispatch()
  const navigate = useNavigate()
  const [loading,setLoading] = useState(false)
  const onFinish = (values:any) => {
    setLoading(true)
    setTimeout(() => {
      navigate('/')
    },1000)
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
              <input type="text" defaultValue={"admin"} />
            </div>
          </div>
          <div className='item'>
            <span>Password</span>
            <div className='input'>
              <i className='input-prefix'><Icons.lock /></i>
              <input type="password" defaultValue={"admin"} />
            </div>
          </div>
          <div className={`submit ${loading? 'loading': ''}`}>
            <button type="button" onClick={onFinish} className="submit-bu">
              <span>Sign In</span>
              {loading ? <Icons.refresh /> : <Icons.logout />}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}


export default Login
