import React from 'react'
import Header from './Header';
import '../styles/page.sass'

const Page = ({ children }) => (
  <div className="page-container">
    <Header />
	{children}
  </div>
);

export default Page;