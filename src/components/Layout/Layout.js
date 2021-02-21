import React from 'react';
import { Switch , Route  } from 'react-router-dom';
import Home from '../container/Home/Home';
import About from '../container/About/About';
import Products from '../container/Products/Products';
import Contact from '../container/Contact/Contact';
import Shop from '../container/Shop/Shop';
import { Navbar } from '../Navbar/Navbar';
import Footer from '../Footer/Footer';
import  './main.css';
import  './reset.css';
import './responsive.css';


const Layout = () => {

  

    return (
        <React.Fragment>
            <Navbar />


          

            <Switch>
                <Route path="/" exact component={Home} ></Route>
                <Route path="/about" exact component={About} ></Route>
                <Route path="/products" exact component={Products} ></Route>
                <Route path="/contact" exact component={Contact} ></Route>
                <Route path="/shop" exact component={Shop} ></Route>
            </Switch>

            <Footer />

        </React.Fragment>
    )
}

export default Layout;
