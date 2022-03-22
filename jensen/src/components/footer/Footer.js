import React from 'react'
import "./Footer.css"
import Facebook from './Facebook';
import Instagram from './Instagram';
import Twitter from './Twitter';

function Footer() {
    return (
        <div className='footer'>
            <ul>
                <li class="footer-text">
                    08-111 111 11
                </li>
                <li class="footer-text">
                    Isafjordsgatan 30A, 164 40 Kista
                </li>
                <li class="footer-text">
                    <a href="mailto:example@example.com" class="button">example@example.com</a>
                </li>
            </ul>



            <ul>
                <li class="footer-text">
                    <a class="footer-link" href="https://www.Instagram.com/"><Instagram width={20} /></a>
                </li>
                <li class="footer-text">
                    <a class="footer-link" href="https://twitter.com/"><Twitter width={20} /></a>
                </li>
                <li class="footer-text">
                    <a class="footer-link" href="https://www.Facebook.com/"><Facebook width={20} /> </a>
                </li>
            </ul>
        </div>
    )
}

export default Footer;