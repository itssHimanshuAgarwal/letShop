import React from 'react';
import { Switch, Route } from 'react-router-dom';

import LandingPage from './landingpage.component';
import AboutMe from './aboutme.component';
import Contact from './contact.component';
import Projects from './projects.component';
import Resume from './resume.component';

const Main = () => (
  <Switch>
    <Route exact path='/contact' component={LandingPage} />
    <Route path='/contact/resume' component={Resume} />
    <Route path='/contact/aboutme' component={AboutMe} />
    <Route path='/contact/projects' component={Projects} />
    <Route path='/contact/contacts' component={Contact} />
  </Switch>
);

export default Main;
