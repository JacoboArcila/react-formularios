import { Component } from "react";

class Signin extends Component {
    constructor() {
        super();
        this.state = {
            sigIn: {
                email: "",
                password: ""
            },
            show: false
        }
    }

    onSubmitHandler = (e) => {
        console.log(e);
        e.preventDefault();
        console.log(this.state)
        if (this.state.signIn.email === this.props.userInfo.email && this.state.signIn.password === this.props.userInfo.password) {
            this.setState({show: true});
        }
    }

    render() {
        return (
            <div>
            {
                this.state.show ?
                    <div>
                        <h1>Usuario Registrado</h1>
                    </div>
                    :
                    <form onSubmit={(e)=> this.onSubmitHandler(e)}>
                        <input
                        placeholder='email'
                        type="email"
                        onChange={(e)=> this.setState({signIn: { email: e.target.value}})}
                        />
                        <input
                        placeholder='password'
                        type="password"
                        onChange={(e)=> this.setState({signIn: { password: e.target.value}})}
                        />
                            <button type="submit">Send</button>
                    </form>
                } 
        
            </div>
        )
    }
}

export default Signin;
