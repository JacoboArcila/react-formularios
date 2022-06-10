import { Component } from "react";
import { ContainerForm, InputForm, H1Form, ButtonForm } from "../Styles";
import Swal from "sweetalert2";
class Signin extends Component {
  constructor() {
    super();
    this.state = {
      sigIn: {
        email: "l",
        password: "l",
      },
      show: false,
    };
  }

  onSubmitHandler = (e) => {
    console.log(e);
    e.preventDefault();
    console.log(this.state);
    if (
      this.state.sigIn.email === this.props.userInfo.email &&
      this.state.sigIn.password === this.props.userInfo.password
    ) {
      this.setState({ show: true });
      const Toast = Swal.mixin({
        toast: true,
        position: "bottom-end",
        showConfirmButton: false,
        timer: 3000,
        timerProgressBar: true,
        didOpen: (toast) => {
          toast.addEventListener("mouseenter", Swal.stopTimer);
          toast.addEventListener("mouseleave", Swal.resumeTimer);
        },
      });

      Toast.fire({
        icon: "success",
        title: "Signed in successfully",
      });
    } else {
      Swal.fire({
        icon: "error",
        title: "Oops...",
        text: "Failed to login!",
      });
    }
  };

  render() {
    return (
      <div>
        <div>
          <H1Form>Sign in</H1Form>
          <ContainerForm onSubmit={(e) => this.onSubmitHandler(e)}>
            <InputForm
              placeholder="email"
              type="email"
              onChange={(e) =>
                this.setState({
                  sigIn: { ...this.state.sigIn, email: e.target.value },
                })
              }
            />
            <InputForm
              placeholder="password"
              type="password"
              onChange={(e) =>
                this.setState({
                  sigIn: { ...this.state.sigIn, password: e.target.value },
                })
              }
            />
            <ButtonForm type="submit">Send</ButtonForm>
          </ContainerForm>
        </div>
      </div>
    );
  }
}

export default Signin;
