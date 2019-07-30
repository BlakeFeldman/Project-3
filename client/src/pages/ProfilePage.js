import React, { Component } from "react";
import { withStyles } from "@material-ui/core/styles";
import Profile from "../components/Profile/Profile";
import SideBar from "../components/Nav/SideBar/SideBar";
import Styled from "styled-components";
//import { withStyles } from "@material-ui/styles";

const NavWrapperDiv = Styled.div`
  margin-bottom: 100px;
`;



const styles = theme => ({
  root: {
    textAlign: "center",
    maxWidth: "40%",
    margin: "10px auto",
    
  },
});

class ProfilePage extends Component {
  state = {
    interests: "",
    services: "",
    avatar: "",
  };

  componentDidMount() {
    fetch("/api/session", {
      method: "Get",
      mode: "cors",
      cache: "no-cache",
      credentials: "include",
      headers: {
        "Content-Type": "application/json",
      },

      redirect: "follow",
      referrer: "client",
    })
      .then(res => res.json())
      .then(
        result => {
          const { user } = result.data;
          return user;
        },
        error => {
          console.log(error);
        }
      )
      .then(userId => {
        const Id = this.props.match.params.userId || userId
        fetch("/api/users/" + Id, {
          method: "Get",
          mode: "cors",
          cache: "no-cache",
          credentials: "include",
          headers: {
            "Content-Type": "application/json",
          },

          redirect: "follow",
          referrer: "client",
        })
          .then(res => res.json())
          .then(
            result => {
              this.setState({
                interests: result.interests,
                services: result.services,
                avatar: result.avatar,
                name: result.name,


              
              });
            },
            error => {
              console.log(error);
            }
          );
      });
  }

  render() {
    const { name, interests, services, avatar } = this.state;
    const { classes } = this.props;
    return (
      <React.Fragment>
      <NavWrapperDiv>
        <SideBar />
      </NavWrapperDiv>
      
      <div className={classes.root}>
        <Profile
          name={name}
          imageHeight="400"
          interests={interests}
          services={services}
          avatar={avatar}
        />
      </div>
      </React.Fragment>
    );
  }
}

export default withStyles(styles)(ProfilePage);
