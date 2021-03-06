import React, { Component } from "react";
import Sidebar from "../components/Nav/SideBar/SideBar";
import PageTabs from "../components/AdvocacyPage/PageTabs";
import Styled from "styled-components";
import BottomNav from "../components/Nav/BottomNav";
import Typography from "@material-ui/core/Typography";
import SubmitModal from "../components/SubmitModal/SubmitModal";
import CardContent from "@material-ui/core/CardContent";
import thumbtackRed from "../components/Card/assets/thumbtackred.png";



const ImageWrapper = Styled.div`
  display: grid;
  grid-template-columns: repeat(1,1fr);
  justify-items: center;
  align-items: center;
  max-width: 100%;
`;

const IntroItem = Styled.div`
grid-column-start: col-2;
grid-column-end: col-2;
grid-row-start: row-1;
grid-row-end: row-1;
margin: 10px 0 10px 0;
background-color: white;
width: 99%;
border-radius: 10px;
border-style: solid;
border-width: 1px;
border-color: #c9c9c9;
`;

const Grid = Styled.div`
  display: grid;
  grid-template-columns: [col-1] 20% [col-2] 80% ;
  grid-template-rows: [row-1] auto [row-2] auto [row-3] auto [row-4] auto;
  justify-content: start;
`;

const NavWrapperDiv = Styled.div`
  margin-bottom: 100px;
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

const TabItem = Styled.div`
  grid-column-start: col-2;
  grid-column-end: span col-2;
  grid-row-start: row-2;
  grid-row-end: row-4;
`;

const SubmitItem = Styled.div`
  margin: 200pt 0 30pt 10pt;
  padding-top: 15pt;
  border: 1px dashed #66bb6a;
  background-color: white;
`;

const SubmitTextWrapper = Styled.div`
  margin-left: 15px;
`;

const BottomNavSpacer = Styled.div`
  margin-top: 20px;
`;

class Community extends Component {
  state = {
    id: "",
    location: "",
    name: "",
    posts: [],
  };

  componentDidMount() {
    // Get session cookie and update posts
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
          const { user, loc, name } = result.data;
          console.log(result);
          this.setState({
            id: user,
            location: loc,
            name: name,
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
          const filteredPosts = result.filter(post => {
            return post.category === "Advocacy";
          });
          this.setState({
            posts: filteredPosts,
          });
        },
        error => {
          console.log(error);
        }
      );
  };

  render() {
    return (
      <main>
        <NavWrapperDiv>
          <Sidebar />
        </NavWrapperDiv>
        <Grid>
          
          <SideBarItem style={{ textAlign: "center" }}>
            <SubmitItem>
              <SubmitTextWrapper>
              <ImageWrapper>
            <img
              alt=""
              src={thumbtackRed}
              width="20%"
            />
          </ImageWrapper>
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
            <div style={{ height: "10%" }} />
          </SideBarItem>


          <IntroItem>
          <ImageWrapper>
            <img
              alt=""
              src={thumbtackRed}
              width="4%"
            />
          </ImageWrapper>

            <CardContent>
            
            <p>Welcome to Special Needs United! The purpose of our site is to assist children with
additional needs and their families in order to ensure that families and children are living their best life possible.  The "Advocacy" 
forum discussion is intended to connect members of our community who require (or offer) professional services.  Reach out to professionals in
your community with knowledge and expertise in depth on the issues that can make a difference!</p>
            </CardContent>
          </IntroItem>

          <TabItem>
            {/* <Typography color="black">
            Connect here for Professional Services.
          </Typography> */}
            <PageTabs
              category="Advocacy"
              posts={this.state.posts}
              updatePosts={this.updatePosts}
            />
          </TabItem>
        </Grid>
        <BottomNavSpacer />
        <BottomNav />
      </main>
    );
  }
}

export default Community;
