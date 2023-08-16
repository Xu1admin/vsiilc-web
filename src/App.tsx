import React,{ FC } from 'react';
import FrameworkLayout from './layouts/FrameworkLayout';
import { useDispatch, useSelector } from 'react-redux'
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
import routers from './routers';
import Login from './pages/login';

const App:FC<any> = () => {
  return (
    <Router basename="/">
      <Routes>
        {/*登录*/}
        <Route path="/login" element={<Login />} />
        {
          routers.map((item) => {
            return <Route 
                    key={item.path}
                    path={item.path}
                    element={
                      <FrameworkLayout
                        pathname={item.path}
                        title={item.title}
                        component={item.component}
                      />
                    }
                  />
          })
        }
        <Route path="/" element={<Navigate to="/index" replace={true}/>} />
      </Routes>
    </Router>
  );
}

export default App;
