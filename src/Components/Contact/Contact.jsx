import './Contact.css'
import img from './image.jpg'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook,faInstagram,faTwitter,faLinkedin,faWhatsapp } from '@fortawesome/free-brands-svg-icons';
import Footer from '../Footer/Footer';


function Contact() {
    return (
        <>
            <div>
                <div>
                    <img id='contact-img' src={img} />
                    <div className='contact-section'>

                        <div className='contact-us'>
                            <h2>Contact Us</h2>
                            <p>At NEO GYAAN, we make your<br/> learning journey easy and <br/>fun-if you have any questions, <br/>feel free to contact us!"</p>
                            <p >📍Chromepet,Chennai</p>
                            <p >📞+91 86370 49785</p>
                            <p >📩neogyaanofficial@gmail.com</p>
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
                        </div>
                        <div className='contact-form'>
                          <p><input type='text' placeholder='Name' /></p>
                             <p><input type='email' placeholder='E-mail' /></p>
                            <p><textarea id='msg' placeholder='Message'>Message</textarea></p>
                            
                        </div>
                        
                    </div>
                   
                </div>


            </div>
            <div style={{paddingTop:"30%"}}>
                <Footer />
                </div>
        </>
    )
}
export default Contact;
{/* <h2>☎️Contact Us</h2>
                    <p id='foot'>📍<span>No.9,vinayagarkoil st,Aminjikarai,Chennai-29</span></p>
                    <p id='foot'>📞<span>+91 9600632892, 9345749209</span></p>
                    <p id='foot'>📩<span>kavishenterprises25@gmail.com</span></p> */}