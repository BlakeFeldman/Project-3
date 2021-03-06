import React, { Component } from "react";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import Button from "@material-ui/core/Button";
import GalleryCard from "./GalleryCard";
import thumbtackRed from "../Card/assets/thumbtackred.png";
import Styled from "styled-components";
import LoadingCircle from "../LoadingCircle/LoadingCircle";
import { Link } from "react-router-dom";
import jacquie_chair from "../../assets/jacquie_chair.jpg";

const styles = {
  card: {
    minWidth: 275,
    width: "100%",
    backgroundColor: "pink",
    borderRadius: "10px",
  },
  bullet: {
    display: "inline-block",
    margin: "0 2px",
    transform: "scale(0.8)",
  },
  pos: {
    marginBottom: 12,
  },
};

const linkStyle = {
  textDecoration: "none",
  backgroundColor: "white",
  borderRadius: "10px",
  marginBottom: "10px",
};

const ImageWrapper = Styled.div`
  display: grid;
  grid-template-columns: repeat(1,1fr);
  justify-items: center;
  align-items: center;
  max-width: 100%;
`;

class BaseGalleryCard extends Component {
  renderCards = () => {
    const posts = this.props.posts;
    return posts
      .filter(post => post.category === "Gallery")
      .slice(0, 9)
      .map((post, index) => {
        return (
          <GalleryCard
            key={index}
            id={post.userId}
            name={post.name}
            title={post.title}
            content={post.content}
            updateReply={this.props.updateReply}
            openModal={this.props.openModal}
          />
        );
      });
  };

  render() {
    const { classes } = this.props;
    
    return (
      <Card className={classes.card} square>
        <CardContent>
          <ImageWrapper>
            <img
              className={classes.tack}
              alt=""
              src={thumbtackRed}
              width="50px"
            />
          </ImageWrapper>
          <ImageWrapper>
            <Link to="/gallery" style={linkStyle}>
              <Button color="default" className={classes.button} size="large">
                {this.props.category}
              </Button>
            </Link>
          </ImageWrapper>
          <ImageWrapper>
            <img
              className={classes.jacquie_chair}
              alt=""
              src={jacquie_chair}
              width="20%"
              align-items="left"
            />
          </ImageWrapper>
          
          {/* {this.props.posts.length ? this.renderCards() : <LoadingCircle />} */}
        </CardContent>
        <CardActions />
      </Card>
    );
  }
}

BaseGalleryCard.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(BaseGalleryCard);
