import React from 'react';
import {Component} from 'react';
import './App.css';
import { Button, Form, FormGroup, Input, Col } from 'reactstrap';
import fire from './fire';
import Particles from 'react-particles-js';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      Story: [],
      text: ''
    }
    this.logText = this.logText.bind(this);
    this.captureText = this.captureText.bind(this);

  }

  componentWillMount(){
    /* Create reference to messages in Firebase Database */
    let messagesRef = fire.database().ref('text').orderByKey().limitToLast(100);
    messagesRef.on('child_added', snapshot => {
      /* Update React state when message is added at Firebase Database */
      let text = { text: snapshot.val(), id: snapshot.key };
      console.log(text)
      this.setState({ Story: this.state.Story.concat([text]) });
    })
  }

  // Sends this.state.text to database and append to story.
  logText = async (event) => {
    event.preventDefault();
    fire.database().ref('text').push( this.state.text );
    // let messagesRef = fire.database().ref('text').orderByKey();
    // messagesRef.on('child_added', snapshot => {
    //   /* Update React state when message is added at Firebase Database */
    //   let txt = { text: snapshot.val(), id: snapshot.key };
    //   this.setState({ Story: [txt] });
    // })
  }

  // Captures user's text input
  captureText = (event) => {
    event.preventDefault();
    const x = event.target.value;
    this.setState({text: x});
  }

  render() {
    return (
      <div>
        <div class="App">
        <h1 className="display-3" class="title1">What was the last thing that made you smiled?</h1>
        <h1 className="display-5" class="title2">Describe it in a sentence starting with the last word of the last sentence.</h1>
        <Form onSubmit={this.logText}>
          <FormGroup row>
            <Col sm={11}>
              <Input type="textarea" name="text" id="exampleText" size="lg" onChange={this.captureText}/>
            </Col>
            <Button type="submit">Submit</Button>
          </FormGroup>
        </Form>
        <Particles class="particle"
            height="500px"
            params={{
              particles: {
                number: {
                  value: 80,
                  density: {
                    enable: true,
                    value_area: 800
                  }
                },
                color: {
                  value: "#000000"
                },
                shape: {
                  type: "circle",
                  stroke: {
                    width: 0,
                    color: "#000000"
                  },
                  polygon: {
                    nb_sides: 5
                  },
                  image: {
                    src: "img/github.svg",
                    width: 100,
                    height: 100
                  }
                },
                opacity: {
                  value: 0.5,
                  random: false,
                  anim: {
                    enable: false,
                    speed: 1,
                    opacity_min: 0.1,
                    sync: false
                  }
                },
                size: {
                  value: 3,
                  random: true,
                  anim: {
                    enable: false,
                    speed: 40,
                    size_min: 0.1,
                    sync: false
                  }
                },
                line_linked: {
                  enable: true,
                  distance: 150,
                  color: "#000000",
                  opacity: 0.4,
                  width: 1
                },
                move: {
                  enable: true,
                  speed: 6,
                  direction: "none",
                  random: false,
                  straight: false,
                  out_mode: "out",
                  bounce: false,
                  attract: {
                    enable: false,
                    rotateX: 600,
                    rotateY: 1200
                  }
                }
              },
              interactivity: {
                detect_on: "canvas",
                events: {
                  onhover: {
                    enable: true,
                    mode: "repulse"
                  },
                  onclick: {
                    enable: true,
                    mode: "push"
                  },
                  resize: true
                },
                modes: {
                  grab: {
                    distance: 400,
                    line_linked: {
                      opacity: 1
                    }
                  },
                  bubble: {
                    distance: 400,
                    size: 40,
                    duration: 2,
                    opacity: 8,
                    speed: 3
                  },
                  repulse: {
                    distance: 200,
                    duration: 0.4
                  },
                  push: {
                    particles_nb: 4
                  },
                  remove: {
                    particles_nb: 2
                  }
                }
              },
              retina_detect: true
            }}/>
            </div>
        <h1 className="display-3" class="txt">Linking of the Particles</h1>
        <p className="display-3" class="txt">By: Collective Anonomous</p>
        <p class="txt" className="lead">{this.state.Story.map( text => <li class="li" key={text.id}>{text.text}</li> )}</p>
      </div>
    );
  }
}

export default App;
