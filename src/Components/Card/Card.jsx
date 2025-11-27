import './Card.css'
import React,{useEffect,useRef} from 'react'
import Grid from '@mui/material/Grid'



function Card() {


     const cardWrapperRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          const cards = cardWrapperRef.current.querySelectorAll('.choose-card');
          cards.forEach((card, index) => {
            setTimeout(() => {
              card.classList.add('visible');
            }, index * 200); // staggered animation
          });
        }
      },
      { threshold: 0.1 }
    );

    if (cardWrapperRef.current) {
      observer.observe(cardWrapperRef.current);
    }

    return () => {
      if (cardWrapperRef.current) {
        observer.unobserve(cardWrapperRef.current);
      }
    };
  }, []);

  

    return (
        <>
            <div className='slide-up' ref={cardWrapperRef}>
               
               
                    <h2 id='card-h1'>💡 Why Trust Neo Gyaan?</h2> 
                    <p id='card-para'>Building careers with trust, affordability, and real-world tech skills.</p>
                    <Grid container spacing={4} justifyContent="center">
                     <Grid size={{ xs: 12,sm:6,md:5 }} className='choose-card'>
                        <div className='choose-img'>
                            <img id='lap' src='https://tse1.mm.bing.net/th/id/OIP.MQt5ks6D_2UU_8ZgZ1cu0QHaHa?cb=12&rs=1&pid=ImgDetMain&o=7&rm=3'/>
                            </div>
                            <div className='choose-box'>
                                <h3>Coding & AI Tracks</h3>
                                <p>Comprehensive coding and AI learningprograms<br/> designed for beginners to advanced learners.</p></div>
                            </Grid>
                                   <Grid size={{ xs: 12,sm:6,md:5 }} className='choose-card'>
                        <div className='choose-img1'>
                             <img  id="money"src='https://tse3.mm.bing.net/th/id/OIP.SGLBjDjtoXWPOjyqT56cvAAAAA?cb=12&w=450&h=450&rs=1&pid=ImgDetMain&o=7&rm=3'/>
                            
                            </div>
                            <div className='choose-box1'>
                                <h3>Affordable Pricing</h3>
                            <p>Flexible subscription plans from 1 to 24 months,<br /> making quality tech education pocket-friendly</p>
                        </div>
                        </Grid>
                
                     <Grid size={{ xs: 12,sm:6,md:5 }} className='choose-card'>
                        <div className='choose-img2'>
                              <img  id="graduate"src="https://static.vecteezy.com/system/resources/previews/015/109/665/original/study-graduation-hat-icon-simple-college-diploma-vector.jpg"/>
                        </div>
                        <div className='choose-box2'>
                            <h3>Industry-Ready Curriculum</h3>
                           <p>Hands-on coding, real-world projects, <br/>and up-to-date courses to prepare you for jobs.</p>


                          </div>
                       </Grid>
                         <Grid size={{ xs: 12,sm:6,md:5 }} className='choose-card'>
                        <div className='choose-img3'>
                             <img id="job" src='https://static.vecteezy.com/system/resources/previews/002/194/992/non_2x/shield-logo-template-design-shield-icon-free-vector.jpg'/>
                        </div>
                        <div className='choose-box3'>
                            <h3>Job Guarantee</h3>
                           <p>From 18 months onwards, students are guaranteed <br/>job opportunities with our partner network.</p>

                        </div>
                          </Grid>
                  
                     <Grid size={{ xs: 12,sm:6,md:5 }} className='choose-card'>
                        <div className='choose-img4'>
                            <img id='career' src="https://static.vecteezy.com/system/resources/previews/019/434/172/non_2x/unique-design-icon-of-career-path-vector.jpg"/>

                        </div>
                        <div className='choose-box4'>
                            <h3>Career-Focused</h3>
                               <p>Perfect for students seeking high-value,affordable <br/> career opportunities in tech.</p>

                              
                             </div>
                                  </Grid>
                                 <Grid size={{ xs: 12,sm:6,md:5 }} className='choose-card'>
                        <div className='choose-img5'>
                            <img id='highlight' src='https://tse3.mm.bing.net/th/id/OIP.uHg9sCIUCaJEYqLdIJBmEQHaHa?cb=12&rs=1&pid=ImgDetMain&o=7&rm=3'/>
                             
                        </div>
                        <div className='choose-box5'>
                               <h3>Subscription Highlights</h3>
                            <p>Choose from multiple tracks:<br/> Full-Stack, Data Science, AI/ML,Cybersecurity,<br/> UI/UX, and more.</p>

                        </div>
                    </Grid>
                    </Grid>
                   
                
            </div>
        </>
    )
}
export default Card;