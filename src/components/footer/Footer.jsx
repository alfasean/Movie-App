import React from 'react';

import './footer.css';


import bg from './../../Assets/footer-bg.jpg';
import logo from './../../Assets/logo.png';

const Footer = () => {
return (
<>
    <footer>
        <div class="footer" style={{backgroundImage: `url(${bg})`}}>
            <div class="row d-flex justify-content-center align-items-center">
               Copyright © 2023 A-Tvision - All rights reserved || Develop By: Alfa Sean
            </div>
        </div>
    </footer>
</>
);
}

export default Footer;