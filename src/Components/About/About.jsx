import './About.css'
import about from './aboutimage.png'
import React,{useEffect,useRef} from 'react';
import Footer from '../Footer/Footer';
import { Grid } from '@mui/material';
function About() {

     const footerRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
      }
    }, { threshold: 0.1 });

    if (footerRef.current) {
      observer.observe(footerRef.current);
    }

    return () => {
      if (footerRef.current) {
        observer.unobserve(footerRef.current);
      }
    };
  }, []);


    return (
        <>
            <div className='about-section'>
                <div  className='about-img'>
                    <img style={{ width: "100%" }} src={ about} />
                    <div className='about'>
                        <h2>At NEO GYAAN, we are committed to providing affordable, trusted, and <br/>innovative education solutions, empowering every learner to reach their full potential..!</h2>
                        
                      </div>

                </div>
                <div className='about-content'>
                   <center>
                        <h2>  🚀 The Future is Yours with <strong>NEO GYYAN  🎓</strong></h2>
                                       
                    <p>At Neo Gyaan, we believe every learner deserves access to world-class tech education-without the burden of high fees or complicated jargon. Our academy is built for students and freshers who want to master coding, AI, and career-ready skills through hands-on learning, DIYs, and expert-designed tracks. Whether you're just starting out or leveling up, Neo Gyaan is your launchpad to a brighter future.</p></center>
                 </div> 
               
          <div className='about-footer' ref={footerRef}>
            <Grid container spacing={4} justifyContent="center">

                    <Grid  size={{ xs: 12,sm:6,md:5 }}className='about-vision'>
                        <h2>🌟Our Vision</h2>
                        <p>To make world-class tech education accessible to every learner, regardless of background or budget. We envision a future where students and freshers across <br></br>India launch successful careers without financial barriers.</p>
                    </Grid>
                    <Grid  size={{ xs: 12,sm:6,md:5 }}className='about-vision'>
                        <h2>🎯Mission</h2>
                        <p>Neo Gyaan delivers affordable, career-focused learning in coding, AI, and emerging technologies. Through hands-on tracks, DIYs, and expert guidance, we empower <br/>learners to build real skills and unlock real opportunities.</p>

                    </Grid>
              </Grid>
                </div>
        </div>
        
      <Footer/>
        
        
        </>
    )
}
export default About;