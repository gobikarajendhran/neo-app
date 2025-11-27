
// import './Hero.css';

// import { HashLink as Link } from 'react-router-hash-link';
// import Grid from '@mui/material/Grid';


// function Hero() {
//     return (
//         <>
//             <Grid container spacing={3} className='hero'>
//                <Grid size={{xs:12}}>
//                 <div className='hero-img'>
                 
//                     <img id="img1" src="https://www.click.co.uk/wp-content/uploads/2019/03/Oxford-1536x566.jpg" />
//                     </div>
//                     </Grid>
//                      <Grid size={{xs:12,md:6}} className='hero-card'>
//                     <h2>Empower Your Learning Journey with NEO GYAAN</h2>
//                         <h3>Affordable, trusted, and innovative EdTech solutions designed for every learner.</h3>
//                         <Link smooth to="/#courses">
//                         <button id='hero-btn'>Explore our Courses</button>
//                     </Link>
                
//                 </Grid>
//                 <Grid sixe={{ xs: 12, md: 6 }}></Grid>
                
//                 <Grid container spacing={3} className='hero-floating'>
//                     <Grid size={{xs:12,sm:4}} className="float-box">
//                         <center><img style={{width:"60px"}} src='https://png.pngtree.com/png-clipart/20211017/original/pngtree-live-icon-png-image_6856811.png' /></center>
//                     <p><center><b>Daily Live</b></center>interactive class</p>
                            
//                 </Grid>
               
//                     <Grid className="float-box">
//                          <center><img style={{width:"50px"}} src="https://img.freepik.com/free-icon/task_318-576029.jpg"/></center>
//                         <p ><b><center>10Million+</center></b>Tests,sample papers &notes</p>
//                     </Grid>
                    
//                     <Grid size={{xs:12,sm:4}} className="float-box">
//                         <center><img style={{width:"50px"}} src="https://cdn-icons-png.flaticon.com/512/9527/9527255.png"/></center>
//                         <p><b><center>24x7</center></b>Doubt sloving Session</p>
//                     </Grid>
                   
//                 </Grid>
//             </Grid>

           


//     </>)
// }
import './Hero.css';
import { HashLink as Link } from 'react-router-hash-link';
import Grid from '@mui/material/Grid';
function Hero() {
    return (
        <>
            <div className='hero'>
                <div className='hero-img'>
                    <img id="img1" src="https://www.click.co.uk/wp-content/uploads/2019/03/Oxford-1536x566.jpg" />
                    <div className='hero-card'>
                        <h2>Empower Your Learning Journey with NEO GYAAN</h2>
                        <h3>Affordable, trusted, and innovative EdTech solutions designed for every learner.</h3>
                        <Link smooth to="/#courses"> <button id='hero-btn'>Explore our Courses</button></Link>
                    </div> </div> <div className='hero-floating'>
                    <div>
                        <center>
                        <img style={{ width: "60px" }} src='https://png.pngtree.com/png-clipart/20211017/original/pngtree-live-icon-png-image_6856811.png' /></center> <p>
                            <center><b>Daily Live</b>
                            </center>interactive class</p> </div>
                    <hr />
                    <div> <center>
                        <img style={{ width: "50px" }} src="https://img.freepik.com/free-icon/task_318-576029.jpg" /></center> <p ><
                            b><center>10Million+</center></b>Tests,sample papers &notes</p> </div>
                    <hr /> <div> <center>
                        <img style={{ width: "50px" }} src="https://cdn-icons-png.flaticon.com/512/9527/9527255.png" /></center> <p>
                            <b><center>24x7</center></b>Doubt sloving Session</p>
                    </div>
                </div>
            </div>
        
        </>
    )
}

export default Hero;