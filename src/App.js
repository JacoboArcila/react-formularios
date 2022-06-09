import {Component} from 'react';
import './App.css';
import Signin from './Components/Signin';
import Signup from './Components/Signup';

class Home extends Component {
  render() {
    return (
      <div>
        <h1>Welcome</h1>
        <p>Welcome to our site.</p>
        <p>Please, sign in to see all our events.</p>
        <p>Sign up if you don't have an account.</p>
      </div>
    )
  }
}

class App extends Component {
  constructor() {
    super();
    this.state = {
      userInfo: {
        name: "",
        email: "",
        password: "",
      },
      view: <Home />,
    }
  }
  handlerUserRegistry = ({ name, email, password }) => {
    this.setState({userInfo: {name: name, email:email, password: password}})
}

  handlerView = (arg) => {
    if (arg === "sign_up") {
        this.setState({view: <Signup userRegistry={this.handlerUserRegistry}/>})
    } else if (arg === "sign_in") {
        this.setState({view: <Signin userInfo={this.state.userInfo}/>})
    }
  }

  render() {
    return (
      <div>
            <div>
                <button onClick={()=> this.setState({view: <Home/>})}>Home</button>
                <button onClick={()=> this.handlerView("sign_up")}>Sign Up</button>
                <button onClick={()=> this.handlerView("sign_in")}>Sign In</button>
            </div>
            <div>
                {
                    this.state.view
                }
            </div>
        </div>
    )
  }
}

export default App;
