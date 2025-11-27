import './Footer.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook,faInstagram,faTwitter,faLinkedin,faWhatsapp } from '@fortawesome/free-brands-svg-icons';
import { Grid } from '@mui/material';
function Footer() {
    return (
        <>
            <div style={{paddingTop:"30px"}}>

            
                <Grid container spacing={1} className="footer-section">
                    
                <Grid size={{ xs: 12,sm:6,md:4 ,lg:3}} className="footer-heading">
                   
                    <h2>🌐NEO GYYAN</h2>
                    <p>We make tech learning easy and affordable.<br/>
                    Learn coding, AI, and career skills with <br/>hands-on practice.
                    Built for students and <br/>freshers across India.
                    Your future starts<br /> here—with Neo Gyaan.</p>
                        <div className="footer-icons">
                            <a href='https://www.facebook.com/share/1DRmBDErwa/'>
                                <FontAwesomeIcon id='icons' icon={faFacebook} /></a>
                            <a href='https://www.instagram.com/neogyaanofficial'>
                                <FontAwesomeIcon id='icons' icon={faInstagram} /></a>
                            <a href='https://www.linkedin.com/company/neo-gyaan/'>
                                <FontAwesomeIcon id='icons' icon={faLinkedin} /></a>
                            <a href='https://x.com/NeoGyaan'>
                                <FontAwesomeIcon id='icons' icon={faTwitter} /></a>
                            <a href='https://whatsapp.com/channel/0029VbBa0tNKLaHwRrUraz1q '>
                                <FontAwesomeIcon id='icons' icon={faWhatsapp}/></a>
                     </div>
                </Grid>
                 <Grid size={{ xs: 12,sm:6,md:4 ,lg:3 }} >
                    <h2>🔗Usefull Links</h2>
                    <p id='foot'>Home</p>
                    <p id='foot'>Services &Features</p>
                    <p id='foot'>Accordions and tabs</p>
                    <p id='foot'>Menu ideas</p>
                </Grid>
                <Grid size={{ xs: 12,sm:6,md:4 ,lg:2}}>
                    <h2>☎️Contact Us</h2>
                    <p id='foot'>📍Chromepet,Chennai</p>
                    <p id='foot'>📞+91 86370 49785</p>
                    <p id='foot'>📩neogyaanofficial@gmail.com</p>
              </Grid>
               

                
                </Grid>
                <Grid container spacing={2}>
             <Grid size={{ xs: 12}} className='footer'>
                    <p>Copyright ©2025  All rights reserved | This are made with NEO</p>
               </Grid>
             </Grid>
           
        </div>
        
        </>
    )
}
export default Footer;