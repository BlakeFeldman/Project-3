import React, { Component } from "react";
import axios from "axios";
import AppBar from "@material-ui/core/AppBar";
import Styled from "styled-components";
import CameraIcon from "@material-ui/icons/PhotoCamera";
import SideBar from "../components/Nav/SideBar/SideBar";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import CssBaseline from "@material-ui/core/CssBaseline";
import Grid from "@material-ui/core/Grid";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import { withStyles } from "@material-ui/styles";
import Container from "@material-ui/core/Container";
import LinearProgress from '@material-ui/core/LinearProgress';
import thumbtackRed from "../components/Card/assets/thumbtackred.png"; 

const ImageWrapper = Styled.div`
  display: grid;
  grid-template-columns: repeat(1,1fr);
  justify-items: center;
  align-items: center;
  max-width: 100%;
`;


const NavWrapperDiv = Styled.div`
  margin-bottom: 100px;
`;

const styles = theme => ({
  icon: {
    marginRight: theme.spacing(2),
  },
  heroContent: {
    backgroundColor: theme.palette.background.paper,
    padding: theme.spacing(8, 0, 6),
  },
  heroButtons: {
    marginTop: theme.spacing(4),
  },
  cardGrid: {
    paddingTop: theme.spacing(4),
    paddingBottom: theme.spacing(4),
  },
  card: {
    height: "100%",
    display: "flex",
    flexDirection: "column",
  },
  cardMedia: {
    paddingTop: "56.25%",
  },
  cardContent: {
    flexGrow: 1,
  },

  footer: {
    backgroundColor: theme.palette.background.paper,
    padding: theme.spacing(6),
  },
});

class GoFundMe extends Component {
  state = {
    campaigns: [],
  };

  componentDidMount() {
    axios
      .get("/api/go-fund-me")
      .then(response => {this.setState({ campaigns: response.data }); console.log(response.data)});
  }

  render() {
    const { classes } = this.props;
    // const classes= {};
    // return (
    //     <div className="page">
    //         <section>
    //             <h1>Test</h1>
    //             {this.state.campaigns.map(function (campaign) {
    //             return (
    //                 <>
    //                 <p key={campaign.id}>{campaign.title}</p>
    //                 <a href={campaign.link}><img src= {campaign.image} /></a>
    //                 </>
    //             );
    //         })}
    //         </section>

    //     </div>
    // );

    return (

        <React.Fragment>
          <NavWrapperDiv>
            <SideBar />
          </NavWrapperDiv>
    

      {/* <React.Fragment>
        <CssBaseline />
        <AppBar position="relative">
          <Toolbar>
            <CameraIcon className={classes.icon} />
            <Typography variant="h6" color="inherit" noWrap>
              Donate
            </Typography>
          </Toolbar>
        </AppBar> */}
        <main>
          {/* Hero unit */}
          <div className={classes.heroContent}>
            <Container maxWidth="sm">
            <ImageWrapper>
            <img
              className={classes.tack}
              alt=""
              src={thumbtackRed}
              width="10%"
            />
          </ImageWrapper>         

              <Typography
                component="h1"
                variant="h2"
                align="center"
                color="textPrimary"
                gutterBottom
              >
                Special Needs United
              </Typography>
              <Typography
                variant="h5"
                align="center"
                color="textSecondary"
                paragraph
              >
                Donate to a Special Needs Campaign by clicking the images below.
              </Typography>
            </Container>
          </div>
          <Container className={classes.cardGrid} maxWidth="lg">
            {/* End hero unit */}
            <Grid container spacing={4}>
              {this.state.campaigns.map(campaign => (
                <Grid item key={campaign.id} lg={6} md={12} sm={12}>
                  <Card className={classes.card}>
                  <ImageWrapper>
            <img
              className={classes.tack}
              alt=""
              src={thumbtackRed}
              width="10%"
            />
          </ImageWrapper>          

                    <a href={campaign.link} target="_blank">
                      <CardMedia
                        className={classes.cardMedia}
                        image={campaign.image}
                      />
                    </a>
                    <CardContent className={classes.cardContent}>
                      <Typography>{campaign.title}</Typography>
                      <Typography>${campaign.donationGoal.raised} of ${campaign.donationGoal.total}</Typography>
                    <LinearProgress variant="determinate" color="primary" value={(parseInt(campaign.donationGoal.raised) / parseInt(campaign.donationGoal.total)) * 100} />
                    </CardContent>
                  </Card>
                </Grid>
              ))}
            </Grid>
          </Container>
        </main>
      </React.Fragment>
    );
  }
}

export default withStyles(styles)(GoFundMe);
// export default GoFundMe;
