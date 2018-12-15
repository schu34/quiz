import React from 'react'
import Header from './Header';

const Page = ({ children }) => (
  <div className="page-container">
    <Header />
	{children}
  </div>
);

export default Page;