import React from 'react'
import {Link} from 'office-ui-fabric-react/lib/Link'
import './Footer.css'

const Footer = () => (
  <div className="footer-container">
    {'Copyrights@2018'}
    {' Developed by '}
    <Link href="">Uzair Patel {'<@uzair>'}</Link>    
  </div>
)

export default Footer
