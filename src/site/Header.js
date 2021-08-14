import React from "react";
import { Container, Row, Col } from 'reactstrap';
import { Parallax, Background } from 'react-parallax';
import '../App.css';
import creature from '../Assets/creature.jpg';
import studio from '../Assets/studio.PNG';
import resume from '../Assets/resume.png';
import car from '../Assets/car.jpg';
import html from '../Assets/html.png';
import react from '../Assets/react3.png';
import node from '../Assets/node.png';
import angular from '../Assets/angular.png';
import bootstrap from '../Assets/Bootstrap.png';
import materialize from '../Assets/materialize.png';
import Link from '@material-ui/core/Link';
import Button from '@material-ui/core/Button';
import background from '../Assets/background.PNG';
import cars from '../Assets/cars.PNG';
import erecruit from '../Assets/erecruit.PNG';
import travel from '../Assets/travel.PNG';


const Header = () => (

<div>


        <Parallax
            blur={{ min: -15, max: 15 }}
            bgImage={require('../Assets/darksky.jpg')}
            strength={700}
            width={100}
            
        >
            <div style={{ height: '600px'}} />

        <div class='links'>
        <Link href="https://docs.google.com/document/d/1CtYurfHacP9rQKLBXitvgNVR0u0K3hdWh2cJelzdpe0/edit?usp=sharing" target="_blank" color="inherit">
    {'Resume'}
  </Link>
          &nbsp;&nbsp;&nbsp;
          &nbsp;&nbsp;&nbsp;
          <Link href="https://www.linkedin.com/in/shiraz-ahmed-966055191/" target="_blank" color="inherit">
    {'LinkedIn'}
  </Link>
          &nbsp;&nbsp;&nbsp;
          &nbsp;&nbsp;&nbsp;
          <Link href="https://github.com/ahmedsha77/" target="_blank" color="inherit">
    {'GitHub'}
  </Link>
</div>


            <div class='centered'>
    Shiraz Ahmed
    <h1>Front-End Web Developer</h1>
  </div>
        </Parallax>

<br />
<br />
<br />
<h2>About Me:</h2>
<h5>Hi! My name is Shiraz Ahmed and I'm a Front-end Web Developer. My background in this field would include programming with HTML, CSS, and Javascript.

I am originally from the state of Indiana, I always lived here and one way I can give back to the state is by becoming a developer and helping other succeed. I have started my technical goals about two years ago when i took my first web design class and ever since i took it, I was absolutely immersed in it!

One thing that I enjoy about front-end web development is being able to design it any way you want, you get to use your creative side and see how everything comes together. React.js has really allowed me to make use of this creativity the most and it allowed me to create components with all kinds of functions and styles that help the user understand and use the webpage in the best way possible.

I hope you enjoy the various design aspects in my portfolio website made with React Js!</h5>
<br/>
<br/>
<br/>
<br/>
<br/>
<Parallax
            blur={{ min: -15, max: 15 }}
            bgImage={require('../Assets/background.PNG')}
            strength={700}
            width={100}
            >

<div class="projectone">
  <h4>Project One</h4>
  <h3>Studio Ghibli API Website</h3>
  <p>A website created with JavaScript, HTML5, and CSS3. The data in the website is taken from
     the Studio Ghibli API and displayed on the website. Deployed with Firebase.</p>
  <div class="stbutton">
  <Button a href="https://studioghibliapi.firebaseapp.com" target="_blank" variant="contained" color="secondary">
  Enter Website
  </Button>
  <br/>
  <br/>
  </div>
  <img src={studio} height='400px' width='900px'/>
  </div>
</Parallax>
<br/>
<br/>
<br/>
<br/>
<Parallax
            blur={{ min: -15, max: 15 }}
            bgImage={require('../Assets/background.PNG')}
            strength={700}
            width={100}
            
        >
<div class="projecttwo">
  <h4>Project Two</h4>
  <h3>Travel Planner</h3>
  <p>An application created with Mongo DB, Express, React, and Node js. A full MERN Stack application that allows
     users to log their travel plans. Deployed with Heroku and Netlify.
  </p>
  <div class="stbutton">
  <Button a href="https://travelplannerapp.netlify.app" target="_blank" variant="contained" color="secondary">
  Enter Website
  </Button>
  <br/>
  <br/>
  </div>
  <img src={travel} height='400px' width='900px'/>
  <br />
<br />
  </div>
</Parallax>

<Parallax
            blur={{ min: -15, max: 15 }}
            bgImage={require('../Assets/background.PNG')}
            strength={700}
            width={100}
            
        >
<div class="projectthree">
  <h4>Project Three</h4>
  <h3>Imported Cars Website</h3>
  <p>A mock car rental website made with React.js and styled with Material UI.
     Users can select cars from the display and add it to the cart, as well as
      update the number of cars rented and delete cars from the cart. Deployed with Heroku.</p>
  <div class="stbutton">
  <Button a href="https://importedcarsclient.herokuapp.com" target="_blank" variant="contained" color="secondary">
  Enter Website
  </Button>
  <br/>
  <br/>
  </div>
  <img src={cars} height='400px' width='900px'/>
  <br />
<br />
  </div>
</Parallax>


<div id="hi">
        <Row>
          <Col xs="9"><h1>Web development languages/frameworks I know</h1></Col>
        </Row>
        <Row>
          <Col xs="6" sm="4"><img src={html} height='300px' width='800px'></img></Col>
          <Col xs="6" sm="9"><img src={react} height='330px' width='300px'></img></Col>
          <Col sm="4"><img src={node} height='330px' width='500px'></img></Col>
        </Row>
        <Row>
          <Col sm={{ size: 6, order: 2, offset: 1 }}><img src={angular} height='330px' width='340px'></img></Col>
        </Row>
        <Row>
          <Col sm="12" md={{ size: 6, offset: 3 }}><img src={bootstrap} height='200px' width='300px'></img></Col>
        </Row>
        <Row>
          <Col sm={{ size: 'auto', offset: 1 }}><img src={materialize} height='200px' width='300px'></img></Col>
        </Row>
        <br/>
<br/>
<hr/>
        </div>

    </div>

);

export default Header;
