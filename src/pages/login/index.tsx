import React,{ FC, useEffect, useState } from 'react';
import { useNavigate,useParams } from 'react-router-dom';
import { useDispatch } from 'react-redux'
import './index.scss'

const Login:FC<any> = () => {
  const dispatch = useDispatch()

  const onFinish = (values:any) => {

  }
  // 发送验证码
  const requestCode = () => {
  }
  return (
    <div className='login-master-page'>
      
    </div>
  );
}


export default Login
