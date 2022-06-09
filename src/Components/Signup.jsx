import { Component } from "react";

class Signup extends Component {
    constructor() {
        super();
        this.state = {
            name: "",
            email: "",
            password: "",
            isSent: false
        }
    }

    onSubmitHandler = (e) => {
      e.preventDefault(); //prevenimos que la pagina se recargue
      this.setState({isSent: true});
      let name = this.state.name;
      let email = this.state.email;
      let password = this.state.password;
      console.log(name, email, password);
      let value = {
        name,
        email,
        password
      };
      this.props.userRegistry(value);
      e.target.reset()
    }

    render() {
        return (
          <form onSubmit={(e)=> this.onSubmitHandler(e)}>
          <input
              placeholder='Name'
              type="text"
              onChange={(e)=> this.setState({name: e.target.value})}
          />
          <input
              placeholder='Email'
              type="email"
              onChange={(e)=> this.setState({email: e.target.value})}
          />
          <input 
              placeholder='Password' 
              type="password"
              onChange={(e)=> this.setState({password: e.target.value})}
          />
          <button type="submit">{this.state.isSent ? "info Submitted" : "Send"}</button>
    </form>
        )
    }
}

export default Signup
