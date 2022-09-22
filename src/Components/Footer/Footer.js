import React from 'react'
import PropTypes from 'prop-types'
import './Footer.css';

const Footer = props => {
  return (
    <div className='footer'>
        <span className='name'>
            Inshorts clone made by -{" "}
            <a href='https://www.linkedin.com/in/liza-patra-8b3907216/' target="_blank">
                Liza Patra
            </a>
        </span>
        <hr style={{width:"95%"}} />
        <div className='iconscontainer'>
            <a href ="" target ="_blank">
                <i className="fa-brands fa-square-instagram fa-2x"></i>
            </a>
             <a href ="https://www.linkedin.com/in/liza-patra-8b3907216/" target ="_blank">
                <i className='fa-brands fa-linkedin fa-2x'></i>
            </a>
            <a href ="https://github.com/lizapatra220" target ="_blank">
                <i className='fa-brands fa-square-github fa-2x'></i>
            </a>
        </div>



      
    </div>
  );
};




export default Footer
