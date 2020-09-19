import React, { Component } from 'react';
import './contact.css';
import { Layout, Header, Navigation, Content } from 'react-mdl';
import Main from '../../components/portfolio/main.component';
import { Link } from 'react-router-dom';
import { ReactComponent as Logo } from '../../assets/crwn.svg';

class ContactPage extends Component {
  render() {
    return (
      <div className="demo-big-content">
    <Layout> 
        <Header className="header-color" title={ <Link to='/'>
          <Logo className='logo' />
       </Link> } scroll>
       
       <Link style={{textDecoration: 'none', color: 'white'}} to="/contact"><h4>MyPortfolio</h4></Link>
    <Navigation>
                <Link to="/contact/resume"><h4>Resume</h4></Link>
                <Link to="/contact/aboutme"><h4>About Me</h4></Link>
                <Link to="/contact/projects"><h4>Projects</h4></Link>
                <Link to="/contact/contacts"><h4>Contact</h4></Link>
            </Navigation>
        </Header>
        {/* <Drawer title={<Link style={{textDecoration: 'none', color: 'black'}} to="/contact">MyPortfolio</Link>}>
            <Navigation>
              <Link to="/contact/resume">Resume</Link>
              <Link to="/contact/aboutme">About Me</Link>
              <Link to="/contact/projects">Projects</Link>
              <Link to="/contact/contacts">Contact</Link>
            </Navigation>
        </Drawer> */}
        <Content>
        <Main/>
            <div className="page-content" />
            
        </Content>
    </Layout>
</div>

    );
  }
}

export default ContactPage;