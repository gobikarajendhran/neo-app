import './Header.css';

import { HashLink as Link } from 'react-router-hash-link';
import { Grid} from "@mui/material";

function Header({onLoginClick}) {
    return (
        <div className='header-card'>
            <div className='logo'>
                <img style={{height:"25px"}} src="https://i.ibb.co/xQjvDNQ/Whats-App-Image-2025-10-03-at-15-49-53-c4a392fa.jpg" />
                <h2><Link style={{color:"inherit"}} to = "/">NEO GYYAN</Link></h2>
            </div>
            <div className='menu'>
                <Link style={{color:"inherit"}} to ="/" >Home</Link>
                <Link style={{color:"inherit"}} to ="/about" >About Us</Link>
               <p> <Link style={{color:"inherit"}} to ="/contact" >Contact Us</Link></p>
                <p><Link style={{color:"inherit"}}  smooth to = '/#courses'>Courses</Link></p>
                
            </div>
            <div className='header-lnik'>
                
                <button id='log-btn' onClick={onLoginClick} >Log In</button>
            </div>
        </div>
    )
}
export default Header;

// import './Header.css';
// import React, { useState } from 'react';
// import { HashLink as Link } from 'react-router-hash-link';
// import { AppBar, Toolbar, IconButton, Drawer, List, ListItem, ListItemText, Box, Button } from '@mui/material';
// import MenuIcon from '@mui/icons-material/Menu';
// import CloseIcon from '@mui/icons-material/Close';

// function Header({ onLoginClick }) {
//   const [open, setOpen] = useState(false);

//   const toggleDrawer = (state) => () => {
//     setOpen(state);
//   };

//   const menuItems = [
//     { text: 'Home', path: '/' },
//     { text: 'About Us', path: '/about' },
//     { text: 'Contact Us', path: '/contact' },
//     { text: 'Courses', path: '/#courses' },
//   ];

//   return (
//     <AppBar position="fixed" color="transparent" elevation={1}>
//       <Toolbar className="header-card">
//         <div className="logo">
//           <img
//             style={{ height: '25px' }}
//             src="https://i.ibb.co/xQjvDNQ/Whats-App-Image-2025-10-03-at-15-49-53-c4a392fa.jpg"
//             alt="logo"
//           />
//           <h2>
//             <Link style={{ color: 'inherit' }} to="/">NEO GYYAN</Link>
//           </h2>
//         </div>

//         {/* Desktop Menu */}
//         <Box className="menu" sx={{ display: { xs: 'none', md: 'flex' } }}>
//           {menuItems.map((item) => (
//             <Link key={item.text} style={{ color: 'inherit' }} smooth to={item.path}>
//               {item.text}
//             </Link>
//           ))}
//         </Box>

//         {/* Log In button (always visible) */}
//         <Button id="log-btn" onClick={onLoginClick}>
//           Log In
//         </Button>

//         {/* Hamburger Icon (Mobile) */}
//         <IconButton
//           edge="end"
//           color="inherit"
//           aria-label="menu"
//           onClick={toggleDrawer(true)}
//           sx={{ display: { xs: 'flex', md: 'none' } }}
//         >
//           <MenuIcon />
//         </IconButton>

//         {/* Drawer (Mobile Menu) */}
//         <Drawer anchor="right" open={open} onClose={toggleDrawer(false)}>
//           <Box sx={{ width: 250, p: 2 }}>
//             <IconButton onClick={toggleDrawer(false)}>
//               <CloseIcon />
//             </IconButton>
//             <List>
//               {menuItems.map((item) => (
//                 <ListItem button key={item.text} onClick={toggleDrawer(false)}>
//                   <Link style={{ color: 'inherit', textDecoration: 'none' }} smooth to={item.path}>
//                     <ListItemText primary={item.text} />
//                   </Link>
//                 </ListItem>
//               ))}
//               <ListItem>
//                 <Button id="log-btn" onClick={onLoginClick}>Log In</Button>
//               </ListItem>
//             </List>
//           </Box>
//         </Drawer>
//       </Toolbar>
//     </AppBar>
//   );
// }

// export default Header;
