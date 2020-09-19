import React, { Component } from 'react';
import { Grid, Cell, List, ListItem, ListItemContent } from 'react-mdl';


class Contact extends Component {
  render() {
    return(
      <div className="contact-body">
        <Grid className="contact-grid">
          <Cell col={6}>
            <h2>Himanshu Agarwal</h2>
            <img
              src="https://avatars1.githubusercontent.com/u/49142525?v=4"
              alt="avatar"
              style={{height: '250px'}}
               />
             <p style={{ width: '75%', margin: 'auto', paddingTop: '1em'}}>I am a tech enthusiast and very much interested in development of technology. I believe in working by practical implementation and also growing my tech skills by experience.</p>

          </Cell>
          <Cell col={6}>
            <h2>Contact Me</h2>
            <hr/>

            <div className="contact-list">
              <List>
          
                <ListItem>
                  <ListItemContent style={{fontSize: '30px', fontFamily: 'Anton',margin: '10%'}}>
                    <i className="fa fa-envelope" aria-hidden="true"/>
                    himanshu.tech1221@gmail.com
                  </ListItemContent>
                </ListItem>

              </List>
            </div>
          </Cell>
        </Grid>
      </div>
    )
  }
}

export default Contact;
