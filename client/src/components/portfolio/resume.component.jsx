import React, { Component } from 'react';
import { Grid, Cell } from 'react-mdl';
import Education from './education.component';
import Experience from './experience.component';
import Skills from './skills.component';


class Resume extends Component {
  render() {
    return(
      <div>
        <Grid>
          <Cell col={4}>
            <div style={{textAlign: 'center'}}>
              <img
                src="https://avatars1.githubusercontent.com/u/49142525?v=4"
                alt="avatar"
                style={{height: '200px'}}
                 />
            </div>

            <h2 style={{paddingTop: '2em'}}>Himanshu R Agarwal</h2>
            <h4 style={{color: 'grey'}}>Programmer</h4>
            <hr style={{borderTop: '3px solid #833fb2', width: '50%'}}/>
            <p>I am a tech enthusiast and very much interested in development of technology. I believe in working by practical implementation and also growing my tech skills by experience.</p>
            <hr style={{borderTop: '3px solid #833fb2', width: '50%'}}/>
            <h3>Address</h3>
            <p>Hyderabad,India</p>
            <h3>Phone</h3>
            <p>(+91) 9655563318</p>
            <h3>Email</h3>
            <p>himanshu.tech1221@gmail.com</p>
  
            <hr style={{borderTop: '3px solid #833fb2', width: '50%'}}/>
          </Cell>
          <Cell className="resume-right-col" col={8}>
            <h2>Education</h2>


            <Education
              startYear={2018}
              endYear={2022}
              schoolName="Vellore Institute Of Technology"
              schoolDescription="Vellore Institute of Technology is a private university located in Vellore, Tamil Nadu, India. Founded in 1984, as Vellore Engineering College, by G. Viswanathan, the institution offers 20 undergraduate, 34 postgraduate, four integrated and four research programs."
               />

               {/* <Education
                 startYear={2007}
                 endYear={2009}
                 schoolName="My 2nd University"
                 schoolDescription="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s"
                  />
                <hr style={{borderTop: '3px solid #e22947'}} /> */}

              <h2>Experience</h2>

            <Experience
              startYear={2020}
              endYear={""}
              jobName="Software Developer"
              jobDescription="I have been working as a software engineer for the company. My team had built a product Athena device for blind people which converts text to speech. I am really passionate about working and enhancing my skills to be productive."
              />

              <Experience
                startYear={2020}
                endYear={2020}
                jobName="Web Developer Intern"
                jobDescription="I have worked for the organisation and responsible for the technical integration of their educational platform. I have made a website-connecTechh which allows people to get connected globally, collaborate and develop their skills."
                />
              <hr style={{borderTop: '3px solid #e22947'}} />
              <h2>Skills</h2>
              <Skills
                skill="Javascript"
                progress={100}
                />
                <Skills
                  skill="HTML/CSS"
                  progress={80}
                  />
                  <Skills
                    skill="NodeJS"
                    progress={50}
                    />
                    <Skills
                      skill="React"
                      progress={25}
                      />
          </Cell>
        </Grid>
      </div>
    )
  }
}

export default Resume;
