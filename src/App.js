import {Component} from 'react';
import './App.css';
import Signin from './Components/Signin';
import Signup from './Components/Signup';
import {Navigation, ContainerNavigation, TitleNavigation ,ContainerHome, H1Home } from './Styles';

class Home extends Component {
  render() {
    return (
      <ContainerHome>
        <H1Home>Welcome</H1Home>
        <p>Welcome to our site.</p>
        <p>Please, sign in to see all our events.</p>
        <p>Sign up if you don't have an account.</p>
      </ContainerHome>
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
            <ContainerNavigation>
                <TitleNavigation>Formularios</TitleNavigation>
                <Navigation onClick={()=> this.setState({view: <Home/>})}>Home</Navigation>
                <Navigation onClick={()=> this.handlerView("sign_up")}>Sign Up</Navigation>
                <Navigation onClick={()=> this.handlerView("sign_in")}>Sign In</Navigation>
            </ContainerNavigation>
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
