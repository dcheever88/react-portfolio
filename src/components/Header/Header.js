import React from 'react';
import { BrowserRouter as Router , Route, Redirect } from 'react-router-dom';
import Navigation from '../../components/Navigation/Navigation.js';
import AboutMe from '../../components/AboutMe/AboutMe.js';
import Portfolio from '../../components/Portfolio/Portfolio.js';
import Resume from '../../components/Resume/Resume.js';
import ContactMe from '../../components/ContactMe/ContactMe.js';

const Header = () => {
    return(
        <Router>
        <div>
            <header>
                    <Navigation />
            </header>
          

            <div>
                <Route exact path="/" render={() => <Redirect to="/aboutme" />} />
                <Route path="/aboutme" component={AboutMe} />
                <Route path="/portfolio" component={Portfolio} />
                <Route path="/resume" component={Resume} />
                <Route path="/contactme" component={ContactMe} />
            </div>
        </div>
        </Router>
    );
}

export default Header;