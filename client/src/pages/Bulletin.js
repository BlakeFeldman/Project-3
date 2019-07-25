import React, { Component } from "react";
import SideBar from "../components/Nav/SideBar/SideBar";
import { withStyles } from "@material-ui/core/styles";
import Styled from "styled-components";
import BaseGalleryCard from "../components/GalleryCard/BaseGalleryCard";
import BaseCommunityCard from "../components/CommunityCard/BaseCommunityCard";
import BaseEducationCard from "../components/EducationCard/BaseEducationCard";
import BaseHowToHelpCard from "../components/HowToHelpCard/BaseHowToHelpCard";
import BaseServicesCard from "../components/ServicesCard/BaseServicesCard.js";
import BaseAdvocacyCard from "../components/AdvocacyCard/BaseAdvocacyCard";
import BottomNav from "../components/Nav/BottomNav";
import SubmitModal from "../components/SubmitModal/SubmitModal";
import Typography from "@material-ui/core/Typography";
import Divider from "@material-ui/core/Divider";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import Modal from "@material-ui/core/Modal";
import SnackBar from "../components/SnackBar/SnackBar";
import Card from "@material-ui/core/Card";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import world_tree from '../assets/world_tree.png';


function getModalStyle() {
  const top = 50;
  const left = 50;

  return {
    top: `${top}%`,
    left: `${left}%`,
    transform: `translate(-${top}%, -${left}%)`,
  };
}

const NavWrapperDiv = Styled.div`
  margin-bottom: 100px;
`;

const Grid = Styled.div`
  display: grid;
  grid-template-columns: [col-1] 20% [col-2] 40% [col-3] 40%;
  grid-template-rows: [row-1] auto [row-2] auto [row-3] auto [row-4] auto;
  justify-content: start;
`;

const SideBarItem = Styled.div`
  grid-column-start: col-1;
  grid-column-end: col-1;
  grid-row-start: row-1
  grid-row-end: span row-4
  margin-right: 10px;
  padding-right: 20px;
  border-right: solid rgba(189, 195, 199, 0.7) 1px;
`;

const SubmitItem = Styled.div`
  margin: 200pt 0 30pt 10pt;
  padding-top: 15pt;
  border: 1px dashed #66bb6a;
  background-color: white;
`;

const SubmitTextWrapper = Styled.div`
  margin-left: 15px;
  background-color: white;
`;

const BottomNavSpacer = Styled.div`
  margin-top: 100px;
`;

const IntroItem = Styled.div`
grid-column-start: col-2;
grid-column-end: col-3;
grid-row-start: row-1;
grid-row-end: row-1;
margin: 10px 0 10px 0;
background-color: white;
width: 199%;
border-radius: 10px;
border-style: solid;
border-width: 1px;
border-color: #c9c9c9;
font-family: 'StyreneB', 'sans-Serif';
font-size: 40px; 
`;

const CommunityItem = Styled.div`
  grid-column-start: col-2;
  grid-column-end: col-2;
  grid-row-start: row-2;
  grid-row-end: row-2;
  margin: 0 5px 10px 0;
`;

const AdvocacyItem = Styled.div`
  grid-column-start: col-3;
  grid-column-end: col-3;
  grid-row-start: row-2;
  grid-row-end: row-2;
  margin: 0 0 10px 5px;
`;

const HowToHelpItem = Styled.div`
  grid-column-start: col-2;
  grid-column-end: span col-3;
  grid-row-start: row-3;
  grid-row-end: row-3;
  margin: 10px 0 10px 0;
  width: 199%;
`;

const EducationItem = Styled.div`
  grid-column-start: col-2;
  grid-column-end: col-2;
  grid-row-start: row-4;
  grid-row-end: row-4;
  margin: 0 5px 10px 0;
`;

const ServicesItem = Styled.div`
  grid-column-start: col-3;
  grid-column-end: col-3;
  grid-row-start: row-4;
  grid-row-end: row-4;
  margin: 0 0 10px 5px;
`;

const GalleryItem = Styled.div`
  grid-column-start: col-2;
  grid-column-end: span col-2;
  grid-row-start: row-5;
  grid-row-end: row-5;
  margin: 10px 0 10px 0;
  width: 100%;
`;

const ButtonWrapper = Styled.div`
  display: grid;
  grid-template-columns: 120px 120px;
  justify-content: end;
  justify-items: center;
  margin-top: 20px;
  
`;



const styles = theme => ({
  paper: {
    position: "absolute",
    width: "40%",
    backgroundColor: theme.palette.background.paper,
    boxShadow: theme.shadows[5],
    padding: theme.spacing.unit * 4,
    outline: "none",
  },
  divider: {
    marginTop: "30px",
    marginBottom: "30px",
  },
  textField: {
    marginLeft: theme.spacing.unit,
    marginRight: theme.spacing.unit,
    marginTop: "10px",
    width: "90%",
  },
});

class Bulletin extends Component {

  state = {
    posts: [],
    id: "",
    location: "",
    name: "",
    interests: "",
    services: "",
    snackBar: false,
    open: false,
    recipientName: "",
    recipientId: "",
    replyContent: "",
    replySubject: "",
    avatar: ""
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
          const { user, loc, name, interests, services, avatar } = result.data;
          console.log(result);
          this.setState({
            id: user,
            location: loc,
            name: name,
            interests: interests,
            services: services,
            avatar: avatar
          });
          this.updatePosts();
        },
        error => {
          console.log(error);
        }
      );
  }

  updatePosts = () => {
    fetch(`/api/posts/50/${this.state.location}`, {
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
          console.log(result);
          this.setState({
            posts: result,
          });
        },
        error => {
          console.log(error);
        }
      );
  };

  handleOpen = () => {
    this.setState({ open: true });
  };

  handleClose = () => {
    this.setState({ open: false });
  };

  sendMessage = () => {
    const message = {
      senderId: this.state.id,
      senderName: this.state.name,
      recipientId: this.state.recipientId,
      recipientName: this.state.recipientName,
      subject: this.state.replySubject,
      content: this.state.replyContent,
    };

    // Send a message to another user through the api
    fetch("/api/messages", {
      method: "POST",
      mode: "same-origin",
      cache: "no-cache",
      credentials: "include",
      headers: {
        "Content-Type": "application/json",
      },

      redirect: "follow",
      referrer: "client",
      body: JSON.stringify(message),
    }).then(
      result => {
        if (result.ok) {
          this.openSnackBar();
        }
      },
      error => {
        console.log(error);
      }
    );
  };

  updateReply = (name, id) => {
    this.setState({
      recipientName: name,
      recipientId: id,
    });
  };

  handleInputChange = event => {
    const { name, value } = event.target;
    this.setState({
      [name]: value,
    });
  };

  openSnackBar = () => {
    this.setState({ snackBar: true });
  };

  closeSnackBar = (event, reason) => {
    if (reason === "clickaway") {
      return;
    }

    this.setState({ snackBar: false });
  };

  render() {
    const { classes } = this.props;
    return (
      <main>
        <NavWrapperDiv>
          <SideBar />
        </NavWrapperDiv>

        <Grid>
          <SideBarItem style={{ textAlign: "center", paddingLeft: "13px" }}>
            <Card className={classes.card}>
              <CardMedia
                component="img"
                alt="Avatar"
                height="100"
                image={this.state.avatar}
                title={this.state.name}
              />
              <CardContent>
                <Typography gutterBottom variant="h5" component="h2">
                  Hello, {this.state.name}
                </Typography>
                <Typography gutterBottom variant="h5" component="h2">
                  {this.state.interests}
                </Typography>
                <Typography
                  variant="body2"
                  color="textSecondary"
                  component="p"
                >{this.state.services}

                </Typography>
              </CardContent>

            </Card>
          </SideBarItem>
          <SideBarItem style={{ textAlign: "center" }}>
            <SubmitItem>
              <SubmitTextWrapper>
                <Typography color="black">
                  Want to contribute? Just click the button to create your own
                  post.
                </Typography>
              </SubmitTextWrapper>
              <SubmitModal
                posts={this.state.posts}
                updatePosts={this.updatePosts}
                id={this.state.id}
                name={this.state.name}
                location={this.state.location}
              />
            </SubmitItem>
          </SideBarItem>


<IntroItem>
  
  <CardContent> 
    <p>Welcome to Special Needs United!</p>  
    <p2>Think Globally.  </p2>  
    <p3> Act Locally.  </p3>  
    <p4> Get Involved!</p4>
  </CardContent>
  <CardMedia 
          component="img"
          alt="World Tree"
          height="360"
          image={world_tree}
          title="World Tree"
        />
</IntroItem>


          <CommunityItem>
            <BaseCommunityCard
              category="Community"
              posts={this.state.posts}
              updatePosts={this.updatePosts}
              updateReply={this.updateReply}
              openModal={this.handleOpen}
              style={{ borderRadius: "30px" }}
            />
          </CommunityItem>
          <AdvocacyItem>
            <BaseAdvocacyCard
              category="Advocacy"
              posts={this.state.posts}
              updatePosts={this.updatePosts}
              updateReply={this.updateReply}
              openModal={this.handleOpen}
            />
          </AdvocacyItem>
          <HowToHelpItem>
            <BaseHowToHelpCard
              category="How To Help"
              posts={this.state.posts}
              updatePosts={this.updatePosts}
              updateReply={this.updateReply}
              openModal={this.handleOpen}
            />
          </HowToHelpItem>
          <EducationItem>
            <BaseEducationCard
              category="Education"
              posts={this.state.posts}
              updatePosts={this.updatePosts}
              updateReply={this.updateReply}
              openModal={this.handleOpen}
            />
          </EducationItem>
          <ServicesItem>
            <BaseServicesCard
              category="Services"
              posts={this.state.posts}
              updatePosts={this.updatePosts}
              updateReply={this.updateReply}
              openModal={this.handleOpen}
            />
          </ServicesItem>
          <GalleryItem>
            <BaseGalleryCard
              category="Gallery"
              posts={this.state.posts}
              updatePosts={this.updatePosts}
              updateReply={this.updateReply}
              openModal={this.handleOpen}
            />
          </GalleryItem>
        </Grid>
        <Modal
          aria-labelledby="simple-modal-title"
          aria-describedby="simple-modal-description"
          open={this.state.open}
          onClose={this.handleClose}
        >
          <div style={getModalStyle()} className={classes.paper}>
            <Typography gutterBottom variant="h5" id="modal-title">
              Message
            </Typography>
            <Divider variant="fullWidth" />
            <Typography variant="subtitle1" id="modal-title">
              <b>To:</b> {this.state.recipientName}
            </Typography>
            <TextField
              id="standard-name"
              label="Subject"
              name="replySubject"
              className={classes.textField}
              value={this.state.replySubject}
              onChange={this.handleInputChange}
              margin="normal"
              variant="outlined"
            />
            <TextField
              id="standard-multiline-flexible"
              multiline
              rowsMax="6"
              label="Message"
              className={classes.textField}
              name="replyContent"
              value={this.state.replyContent}
              onChange={this.handleInputChange}
              margin="normal"
              variant="outlined"
            />
            <ButtonWrapper>
              <Button
                variant="outlined"
                color="secondary"
                onClick={this.handleClose}
              >
                Cancel
              </Button>

              <Button
                variant="outlined"
                color="primary"
                onClick={this.sendMessage}
              >
                Send
              </Button>
            </ButtonWrapper>
          </div>
        </Modal>
        <SnackBar
          open={this.state.snackBar}
          openSnackBar={this.openSnackBar}
          closeSnackBar={this.closeSnackBar}
        />
        <BottomNavSpacer />
        <BottomNav />
      </main>
    );
  }
}

export default withStyles(styles)(Bulletin);
