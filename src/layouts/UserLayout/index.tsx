import React,{ memo } from 'react';

function UserLayout({ children, pathname }: {
  children: React.ReactNode;
  pathname?: string;
}) {
  return (
    <div className="user-layout">
      {children}
    </div>
  );
}

export default memo(UserLayout)