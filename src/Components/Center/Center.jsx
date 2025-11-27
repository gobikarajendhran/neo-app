import './center.css'
import React, { useEffect, useRef } from 'react';
import { Grid } from '@mui/material';


function Center() {
       const centerRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
      }
    }, { threshold: 0.1 });

    if (centerRef.current) {
      observer.observe(centerRef.current);
    }

    return () => {
      if (centerRef.current) {
        observer.unobserve(centerRef.current);
      }
    };
  }, []);

return (
    <>
            <div className='slide-up'>
            <div className='card-center' ref={centerRef} id='courses'>
                <center>
                    <h2 id='card-h1'>🚀 Neo Gyaan - Pocket-Friendly Tech Learning</h2>
                    <p id="card-para">Affordable subscription plans for students & freshers across India.  
      Self-contained courses with in-demand tech skills at minimum cost.
                    </p>
          <Grid container spacing={3} justifyContent="center">
            <Grid size={{xs:12,md:4,sm:6}}>
                <div className='card'>
                <p id='card-para'>1 Month</p>
                <p><b>₹799</b></p>
                <p>C/C++/Java,Python basics
                <br/>DSA intro,Git,Linux</p>
                    <button id='join-btn'>Join Now</button>
              </div>
            </Grid>
             <Grid size={{xs:12,md:4,sm:6}}>
                <div className='card'>
                    <p id='card-para'>3 Months</p>
                    <p><b>₹2,159</b></p>
                <p>DSA, CP & Full Web Stack Skills Included</p>
                     <button id='join-btn'>Join Now</button>
            </div>
            </Grid>
             <Grid size={{xs:12,md:4,sm:6}}>
                <div className='card'>
                    <p>6 Months</p>
                    <p><b>₹4,079</b></p>
                    <p>Includes 3M +Advanced <br />DSA&
                        CP Java SpringBoot,<br />Node Js+
                        Express
                    </p>
                     <button id='join-btn'>Join Now</button>
            </div>
            </Grid>
            </Grid>
          <Grid container spacing={3} justifyContent="center" style={{ marginTop: "20px" }}>
            <Grid size={{xs:12,md:4,sm:6}}>
                <div className='card'>
                    <p>9 Months</p>
                    <p><b>₹5,759</b></p>
                    <p>Includes 6M+ React.Js <br/>fundamentals
                    DevOps bascis<br /> (Docker,Jenkins)</p>
                       <button id='join-btn'>Join Now</button>
              </div>
            </Grid>
             <Grid size={{xs:12,md:4,sm:6}}>
                <div className='card'>
                    <p>12 Months</p>
                    <p><b>₹7,199</b></p>
                <p>Tech Bootcamps: Full-Stack to Cybersecurity + Interview & CV Prep</p>
                    <button id='join-btn'>Join Now</button>
              </div>
            </Grid>
             <Grid size={{xs:12,md:4,sm:6}}>
                        <div className='card'>
                            <p>15 Months</p>
                            <p><b>₹8,399</b></p>
                        <p>Includes 12M + System and<br/>Design (LLD/HLD)</p>
                         <button id='join-btn'>Join Now</button>
                        
              </div>
              </Grid>
                       </Grid> 
                       
                        
          <Grid container spacing={3} justifyContent="center" style={{ marginTop: "20px" }}>
                          <Grid size={{xs:12,md:4,sm:6}}>
                            <div className='card'>
                              <p>18 Months</p>
                                <p><b>₹9,359</b></p>
                                <p>Includes 15M + Job Guarantee
                                    <br/>6 Mock Interviews
                                </p>
                                <button id='join-btn'>Join Now</button>
                            </div>
            </Grid>
             <Grid size={{xs:12,md:4,sm:6}}>
                        <div className='card'>
                            <p>24 Months</p>
                            <p><b>₹11,519</b></p>
                            <p>6 Guaranteed Interviews + Personal Interview Support
                            </p>
                            <button id='join-btn'>Join Now</button>
              </div>
              </Grid>
                    </Grid>
            
                </center>

                   

                </div>
                
            </div> 
            
        </>
    )
}
export default Center;