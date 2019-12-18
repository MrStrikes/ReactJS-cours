import React from "react";
import axios from "axios";
import { connect } from 'react-redux';

class LoginPage extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      email: null,
      password: null
    };

    this.handleEmail = this.handleEmail.bind(this);
    this.handlePassword = this.handlePassword.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleEmail(ev) {
    this.setState({
      email: ev.target.value
    });
  }

  handlePassword(ev) {
    this.setState({
      password: ev.target.value
    });
  }

  handleSubmit(ev) {
    ev.preventDefault();
    const { email, password } = this.state;
    axios
      .post("http://edu2.shareyourtime.fr/api/auth", {
        email,
        password
      })
      .then(res => {
        console.log(res.data.status);
        if (res.data.status === 200) {
            this.props.dispatch({ type: "LOGIN_USER" })
        }
      })
      .catch(err => {
        console.log(err);
      });
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <label>Email :</label>
        <input
          type="text"
          value={this.state.email}
          onChange={this.handleEmail}
        />
        <br />

        <label>Mot de passe :</label>
        <input
          type="password"
          value={this.state.password}
          onChange={this.handlePassword}
        />
        <br />

        <input type="submit" value="Envoyer" />
      </form>
    );
  }
}

let mapStateToProps = (state) => {
    return {}
}

let dispatchToProps = (dispatch) => {
    return {
        dispatch: dispatch
    }
}

export default connect(mapStateToProps, dispatchToProps)(LoginPage);
