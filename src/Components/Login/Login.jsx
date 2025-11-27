import './Login.css';
import { useState } from 'react';


function Login({show,onClose}) {
    const handleLogin = (event) => {
        event.preventDefault();
        // alert("Login clicked");
    }


    return (
        <>
            <div className={`log-card ${show ? 'show' : ''}`}>
                <div className='login-page'>
                    <button className='close-btn' onClick={onClose}>X</button>
                     <center><img style={{width:"50px",borderRadius:"50%"}} src='https://i.ibb.co/xQjvDNQ/Whats-App-Image-2025-10-03-at-15-49-53-c4a392fa.jpg'/>
                   <h3>Sign in</h3></center>
                    <form onSubmit={handleLogin}>
                <p>E-mail :</p>
                <input type='email' />
                <p>Password :</p>
                    <input type='password' />
                  <p><a href='#'>ForgotPassword?</a></p>
                        <input id='log-submit' type='Submit' />
                        </form>
               
                  
            </div>
            </div>
           
</>

    )
}
export default Login;



// import './Login.css';
// import { useState } from 'react';

// function Login({ show, onClose }) {
//   const handleLogin = (event) => {
//     event.preventDefault();
//     alert("Login clicked");
//   };

//   return (
//     <div className={`login-overlay ${show ? 'show' : ''}`}>
//       <div className='login-page'>
//         <button className="close-btn" onClick={onClose}>X</button>
//         <center><h3>Sign in</h3></center>
//         <form onSubmit={handleLogin}>
//           <p>E-mail :</p>
//           <input type='email' />
//           <p>Password :</p>
//           <input type='password' />
//           <input id='log-submit' type='submit' />
//         </form>
//         <div className='log-footer'>
//           <p>ForgotPassword?</p>
//           <p>Sign Up</p>
//         </div>
//       </div>
//     </div>
//   );
// }

// export default Login;
