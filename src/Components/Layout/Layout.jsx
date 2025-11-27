import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import {Outlet} from 'react-router-dom'




function Layout() {
    return (
        <>
            <Header />
            <div className="container">
                <Outlet />
            </div>
            <Footer />
        </>
    );
}
export default Layout;