import React from "react";
import Card from "@material-ui/core/Card";
import CardMedia from "@material-ui/core/CardMedia";
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";
//import { withStyles } from "@material-ui/core/styles";
import thumbtackRed from "../Card/assets/thumbtackred.png";
import Styled from "styled-components";

const ImageWrapper = Styled.div`
  display: grid;
  grid-template-columns: repeat(1,1fr);
  justify-items: center;
  align-items: center;
  max-width: 100%;
`;

export default function Profile(props) {
    console.log("lkasdjf", props)
  return (
    <div>
      {/* <Card className={classes.card}> */}
      <Card>
      <ImageWrapper>
            <img
              alt=""
              src={thumbtackRed}
              width="15%"
            />
          </ImageWrapper>

        <CardMedia
          component="img"
          alt="Avatar"
          height={props.imageHeight}
          image={props.avatar}
          title={props.name}
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
            Hello, {props.name}
          </Typography>
          <Typography gutterBottom variant="h5" component="h2">
            Interests: {props.interests}
          </Typography>
          <Typography variant="h5" color="textPrimary" component="p">
            Services: {props.services}
          </Typography>
        </CardContent>
      </Card>
    </div>
  );
}
