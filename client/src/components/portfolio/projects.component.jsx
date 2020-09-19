import React, { Component } from 'react';
import { Tabs, Tab, Grid, Cell, Card, CardTitle, CardText, CardActions, Button, CardMenu, IconButton } from 'react-mdl';


class Projects extends Component {
  constructor(props) {
    super(props);
    this.state = { activeTab: 0 };
  }

  toggleCategories() {

    if(this.state.activeTab === 0){
      return(
        <div className="projects-grid">
          {/* Project 1 */}
          <Card shadow={5} style={{minWidth: '450', margin: 'auto'}}>
            <CardTitle style={{color: '#fff', height: '176px', background: 'url(https://wallpaperaccess.com/full/26174.png) center / cover'}} >Developer Platform</CardTitle>
            <CardText>
            This is a platform where people can communicate with experts, employers and also could collaborate with people of similar domains. It allows the beginners to get to know about several contests and also expand their knowledge.
            </CardText>
            <CardActions border>
            <Button colored><a href="https://connectechh.herokuapp.com/">Visit Site</a></Button>
            </CardActions>
            <CardMenu style={{color: '#fff'}}>
              <IconButton name="share" />
            </CardMenu>
          </Card>

          {/* Project 2 */}
          <Card shadow={5} style={{minWidth: '450', margin: 'auto'}}>
            <CardTitle style={{color: '', height: '176px', background: 'url(https://www.userlike.com/api/proxy/resize/benefits-of-live-chat/chat-benefits.png?height=720) center / cover'}} >
LetsChat</CardTitle>
            <CardText>
            This is a platform for chatting with other people. It provides an option for creating rooms and then chatting with a group of people.

            </CardText>
            <CardActions border>
            <Button colored><a href="https://chatt12.herokuapp.com/">Visit Site</a></Button>

            </CardActions>
            <CardMenu style={{color: '#fff'}}>
              <IconButton name="share" />
            </CardMenu>
          </Card>

          {/* Project 3 */}
          <Card shadow={5} style={{minWidth: '450', margin: 'auto'}}>
            <CardTitle style={{color: 'red', height: '176px', background: 'url(https://www.elegantthemes.com/blog/wp-content/uploads/2017/03/design-a-successful-client-meeting.jpg) center / cover'}} >Client Panel</CardTitle>
            <CardText>
            This application allows people to store information regarding their clients which helps them to analyze the details and take proper actions by maintaining the balance sheets which can be changed as per the needs.
            </CardText>
            <CardActions border>
            <Button colored><a href="https://reactclientpanel-720f1.web.app/login?redirect=%2F">Visit Site</a></Button>
            </CardActions>
            <CardMenu style={{color: '#fff'}}>
              <IconButton name="share" />
            </CardMenu>
          </Card>
          <Card shadow={5} style={{minWidth: '450', margin: 'auto'}}>
            <CardTitle style={{color: 'orange', height: '176px', background: 'url(https://inteng-storage.s3.amazonaws.com/img/iea/MRw4y5ABO1/sizes/camping-tech-trends_md.jpg) center / cover'}} >CampGuide-A guide for tourists</CardTitle>
            <CardText>
            This is an application that provides information about several camping locations and also people can share their reviews which can help others choosing wonderful locations for their schedule.
            </CardText>
            <CardActions border>
            <Button colored><a href="https://pure-shelf-57291.herokuapp.com/">Visit Site</a></Button>
            </CardActions>
            <CardMenu style={{color: '#fff'}}>
              <IconButton name="share" />
            </CardMenu>
          </Card>
        </div>


      )
    } else if(this.state.activeTab === 1) {
      return (
        <div><h1>This is Node JS</h1></div>
      )
    } else if(this.state.activeTab === 2) {
      return (
        <div><h1>This is VueJS</h1></div>
      )
    } else if(this.state.activeTab === 3) {
      return (
        <div><h1>This is MongoDB</h1></div>
      )
    }

  }
  render() {
    return(
      <div>
        <Tabs activeTab={this.state.activeTab} onChange={(tabId) => this.setState({ activeTab: tabId })} ripple>
          <Tab>ReactJS</Tab>
          <Tab>NodeJS</Tab>
          <Tab>VueJS</Tab>
          <Tab>MongoDB</Tab>
        </Tabs>


          <Grid>
            <Cell col={12}>
              <div className="content">{this.toggleCategories()}</div>
            </Cell>
          </Grid>


      </div>
    )
  }
}

export default Projects;
