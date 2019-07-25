import React, { Component } from "react";


// import Button from "@material-ui/core/Button";
// import Typography from "@material-ui/core/Typography";
// import withStyles from "@material-ui/core/styles/withStyles";
// // import "../../src/App.css";
// // import "../components/ProfInfo/NameForm";
// import NameForm from "../components/ProfInfo/NameForm";
// import ZipForm from "../components/ProfInfo/ZipForm";
// import SideBar from "../components/Nav/SideBar/SideBar";
// import Styled from "styled-components";
// import BottomNav from "../components/Nav/BottomNav";
// import Card from "@material-ui/core/Card";
// import CardActions from "@material-ui/core/CardActions";
// import CardContent from "@material-ui/core/CardContent";
//import Image from "../assets/pexels-photo-688835.jpeg";

// const styles = theme => ({
//   card: {
//     minWidth: 275,
//     maxWidth: 675,
//   },
//   bullet: {
//     display: "inline-block",
//     margin: "0 2px",
//     transform: "scale(0.8)",
//   },
//   title: {
//     fontSize: 14,
//   },
//   pos: {
//     marginBottom: 12,
//   },
// });

// const BackgroundImage = Styled.main`
// background: url(${Image}) no-repeat center center fixed;
// background-size: cover;
// height: 100%;
// overflow: hidden;
// `;

// const Grid = Styled.div`
//   display: grid;
//   grid-template-columns: [col-1] 80%;
//   grid-template-rows: [title] 10% [row-1] 10% [row-2] 10% [row-3] 10% [row-4] 10%;
//   justify-content: start;
//   justify-items: start;
//   align-items: start:
// `;

// const NameItem = Styled.div`
//   grid-column-start: col-1;
//   grid-column-end: col-1;
//   grid-row-start: row-1;
//   grid-row-end: span row-1;
//   margin: 40px 15px 20px 15px;
// `;

// const ZipItem = Styled.div`
//   grid-column-start: col-1;
//   grid-column-end: col-1;
//   grid-row-start: row-2;
//   grid-row-end: span row-2;
//   margin: 15px;
// `;

// const FordItem = Styled.div`
//   grid-column-start: col-1;
//   grid-column-end: col-1;
//   grid-row-start: row-3;
//   grid-row-end: span row-3;
//   margin: 15px;
// `;

// const ButtonItem = Styled.div`
//   grid-column-start: col-1;
//   grid-column-end: col-1;
//   grid-row-start: row-4;
//   grid-row-end: row-4;
//   margin: 25px 50px;
//   width: 120px;
// `;

class Profile extends Component {
  state = {
    notName: "",
    id: "",
    location: "",
    email: "",
    password: "",
    nameDisabled: true,
    locationDisabled: true,
    passDisabled: true,
    emailDisabled: true,
    prevnotName: "",
    prevLocation: "",
    prevPass: "",
    prevEmail: "",
    interests: "",
    services: ""
  };

  componentDidMount() {
    console.log(this.props);

    fetch("/api/users/" + this.props.match.params.userId, {
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
          });
        },
        error => {
          console.log(error);
        }
      );
  }

  render () {
    return (<div>
      {this.state.interests}
      {this.state.services}
      </div>)
  }
}

//   handleChange = event => {
//     const { name, value } = event.target;
//     this.setState({
//       [name]: value,
//     });
//   };

//   handleClick = name => {
//     this.setState({
//       [name + "Disabled"]: !this.state[name + "Disabled"],
//     });
//     console.log(this.state[name + "Disabled"]);
//   };

//   updateProfile = event => {
//     event.preventDefault();
//     let name = this.state.notName;
//     if(!name){
//       name = this.state.prevnotName;
//     }
//     let location = this.state.location
//     if(!location){
//       location = this.state.prevLocation;
//     }
//     console.log(name)
//     console.log(location)
    
//   };

//   render() {
//     const { classes } = this.props;
//     return (
//       <BackgroundImage>
//         <SideBar />
//         <Card className={classes.card} style={{ margin: "100px auto" }}>
//           <CardContent>
//             <Typography component="h1" variant="h5" align="center">
//               Keep your account up to date here!
//             </Typography>
//             <Grid>
//               <form className="formGrid" onSubmit={this.updateProfile}>
//                 <NameItem>
//                   <NameForm
//                     name={this.state.prevnotName}
//                     nameDisabled={this.state.nameDisabled}
//                     handleClick={this.handleClick}
//                     handleChange={this.handleChange}
//                     className="nameForm"
//                   />
//                 </NameItem>
//                 <ZipItem>
//                   <ZipForm
//                     zip={this.state.prevLocation}
//                     nameDisabled={this.state.locationDisabled}
//                     handleClick={this.handleClick}
//                     handleChange={this.handleChange}
//                     className="zipInput"
//                   />
//                 </ZipItem>
//                 <FordItem />
//                 <CardActions>
//                   <ButtonItem>
//                     <Button
//                       className="submitButton"
//                       type="submit"
//                       fullWidth
//                       variant="outlined"
//                       color="primary"
//                     >
//                       Submit
//                     </Button>
//                   </ButtonItem>
//                 </CardActions>
//               </form>
//             </Grid>
//           </CardContent>
//         </Card>
//         <div style={{ marginTop: "14%" }} />
//         <BottomNav />
//       </BackgroundImage>
//     );
//   }
// }

export default Profile;
// export default withStyles(styles)(Dashboard);