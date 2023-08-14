import React,{ memo,useState,useEffect } from 'react'
import { Link, useLocation, useNavigate } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { LoginOut } from '@/store/action/user'
import { useRequest } from 'ahooks'
import './index.scss'


function BasicLayout(props: {
  children: React.ReactNode;
  pathname: string;
}) {
  
  return (
    <div>框架</div>
  )
}

export default memo(BasicLayout)