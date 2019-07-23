import React from "react";
import SideBar from "../components/Nav/SideBar/SideBar";
import Styled from "styled-components";
import Image from "../assets/afro_jacquie.jpeg";
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Wrapper from "../components/LandingPage/Wrapper";
import { withStyles } from "@material-ui/core/styles";

const NavWrapperDiv = Styled.div`
  margin-bottom: 100px;
`;

const styles = {
  card: {
    minWidth: 275,
    width: "500px"
  },
  bullet: {
    display: 'inline-block',
    margin: '0 2px',
    transform: 'scale(0.8)',
  },
  title: {
    fontSize: 14,
  },
  pos: {
    marginBottom: 12,
  },
};


const Background = Styled.main`
  background: url(${Image}) no-repeat center center fixed;
  background-size: cover;
  height: 100%;
  overflow: hidden;
`;

const AboutUs = (props) => {
  console.log(props);
  const { classes } = props;

  return (
    <Background>
      <NavWrapperDiv>
        <SideBar />
      </NavWrapperDiv>
      <Wrapper>
        <Card className={classes.card}>
          <CardContent>

            <h3>Our Inspiration</h3>

            <p>
              Everybody is born different and because of those differences, sad to say, some children
              are isolated, shunned, bullied and made fun of through no fault of their own and it's not ok.
              Special Needs United is a web application aimed to help parents
              with special needs children. By scraping news articles on various
              special needs, parents, grandparents, friends, the general public, and even the children
              dealing with their differences can get a better understanding of their
              condition and learn the skills needed to live a normal everyday life.
              Special needs united, resources that turn helpless to hopeful.
              Find support and unity when dealing with children with special needs. We're there when you need us.
          </p>
            <br></br>
            <h3>The Brains Behind Special Needs United.</h3>


            <p>Blake Feldman -</p>
            <br></br>
            <p>Sydney Weaver - </p>
            <br></br>
            <p>Nathan Pearson - </p>
            <br></br>
          </CardContent>
        </Card>
      </Wrapper>
    </Background>
  )
}

export default withStyles(styles)(AboutUs);