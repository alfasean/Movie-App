import React from 'react';

import './footer.css';


import bg from './../../Assets/footer-bg.jpg';

const Footer = () => {
return (
<>
    <footer>
        <div class="footer" style={{backgroundImage: `url(${bg})`}}>
            <div class="row d-flex justify-content-center align-items-center">
              <p className='text-center'>Copyright © 2023 Ba-Uni - All rights reserved <br /> Develop By <a href="https://www.instagram.com/alfaseannnnnn/" target='_blank'> Alfa Sean</a></p> 
            </div>
        </div>
    </footer>
</>
);
}

export default Footer;