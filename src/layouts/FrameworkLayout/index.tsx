import React,{ memo,Suspense, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom';
import BasicLayout from '../basicLayout';
import UserLayout from '../UserLayout';

function FrameworkLayout(props: {
  component: any;
  title: string;
  pathname: string;
}) {
  const token = useSelector((state:any) => state.Login.token)
  const dispatch = useDispatch()
  const { pathname, title, component:Component } = props;
  const navigate = useNavigate()
  const Layout = pathname === '/login' ? UserLayout : BasicLayout;

  useEffect(() => {
    dispatch({type:'NAVIGATE_CHANGE',payload: navigate});
    // if(!token){
    //   navigate('/login')
    // }
  }, [pathname]);

  return (
    <Layout pathname={pathname} title={title} >
      <Component />
    </Layout>
  );
}

export default FrameworkLayout