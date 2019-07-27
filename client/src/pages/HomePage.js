import React, { Component } from "react";
import LpNav from "../components/LandingPage/LpNav";
// import SimpleSlide from "../components/LandingPage/Jumbotron";
import Wrapper from "../components/LandingPage/Wrapper";
import Button from "../components/LandingPage/LpButton";
import Styled from "styled-components";
//import Image from "../assets/jacquie_in_car.jpeg";
import BottomNav from "../components/Nav/BottomNav";
import SignInModal from "../components/LandingPage/SignIn/SignInModal";
import SignUpModal from "../components/LandingPage/SignUp/SignUpModal";
import thumbtackRed from "../components/Card/assets/thumbtackred.png";

const ImageWrapper = Styled.div`
  display: grid;
  grid-template-columns: repeat(1,1fr);
  justify-items: center;
  align-items: center;
  max-width: 100%;
`;

const Background = Styled.main`
  background-size: cover;
  height: 100%;
  overflow: hidden;
`;

const Spacer = Styled.div`
    height: 150px;
`;

const ButtonLink = Styled.button`
  background:none!important;
  color:#4665af;
  border:none; 
  padding:0!important;
  font: inherit; 
  cursor: pointer;
`;

class HomePage extends Component {
  state = {
    SIopen: false,
    SUOpen: false,
    email: "",
  };

  handleOpen = () => {
    this.setState({ SIopen: true });
  };

  handleClose = () => {
    this.setState({ SIopen: false });
  };

  SUOpen = () => {
    this.setState({ SUOpen: true });
  };

  SUClose = () => {
    this.setState({ SUOpen: false });
  };

  changeSISU = () => {
    this.setState({
      SUOpen: false,
      SIopen: true,
    });
  };

  saveEmail = data => {
    this.setState({
      email: data,
    });
  };

  render() {
    return (
      <Background>

      
        <div>
          <LpNav />
          <Wrapper>
          <ImageWrapper>
            <img
              alt=""
              src={thumbtackRed}
              width="10%"
            />
          </ImageWrapper>
          Resources that turn helpless to hopeful. Find support and unity when dealing with children with special needs.
           We're there when you need us.

            <h1>Special Needs United.</h1>
            <Button SUOpen={this.SUOpen} />
            <span>
              <p>
                Have an account?{" "}
                <ButtonLink  onClick={this.handleOpen}>
                  Sign In
                </ButtonLink>
              </p>
            </span>
            <SignInModal
              open={this.state.SIopen}
              email={this.state.email}
              onClose={this.handleClose}
            />
            <SignUpModal
              SUOpen={this.state.SUOpen}
              changeSISU={this.changeSISU}
              email={this.state.email}
              SUClose={this.SUClose}
              saveEmail={this.saveEmail}
            />
          </Wrapper>
          <Spacer />
        </div>
        <BottomNav />
      </Background>
    );
  }
}

export default HomePage;
