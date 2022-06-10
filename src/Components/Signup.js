import { Component } from "react";
import { ContainerForm, InputForm, H1Form, ButtonForm } from "../Styles";
import Swal from "sweetalert2";

class Signup extends Component {
  constructor() {
    super();
    this.state = {
      name: "",
      email: "",
      password: "",
      isSent: false,
    };
  }

  onSubmitHandler = (e) => {
    e.preventDefault(); //prevenimos que la pagina se recargue
    let name = this.state.name;
    let email = this.state.email;
    let password = this.state.password;
    console.log(name, email, password);
    let value = {
      name,
      email,
      password,
    };
    if (name === "" || email === "" || password === "") {
      Swal.fire({
        icon: "error",
        title: "Oops...",
        text: "Fill in all the fields!",
      });
    } else {
      this.setState({ isSent: true });
      this.props.userRegistry(value);
      e.target.reset();
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
        title: "Successfully registered",
      });
    }
  };

  render() {
    return (
      <div>
        <H1Form>Sign up</H1Form>
        <ContainerForm onSubmit={(e) => this.onSubmitHandler(e)}>
          <InputForm
            placeholder="Name"
            type="text"
            onChange={(e) => this.setState({ name: e.target.value })}
          />
          <InputForm
            placeholder="Email"
            type="email"
            onChange={(e) => this.setState({ email: e.target.value })}
          />
          <InputForm
            placeholder="Password"
            type="password"
            onChange={(e) => this.setState({ password: e.target.value })}
          />
          <ButtonForm type="submit">
            {this.state.isSent ? "info Submitted" : "Send"}
          </ButtonForm>
        </ContainerForm>
      </div>
    );
  }
}

export default Signup;
