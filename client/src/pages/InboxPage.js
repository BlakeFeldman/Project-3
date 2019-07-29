import React from "react";
import BaseInboxCard from "../components/Inbox/BaseInboxCard";
import Sidebar from "../components/Nav/SideBar/SideBar";
import BottomNav from "../components/Nav/BottomNav";
import Styled from "styled-components";
import { withStyles } from "@material-ui/core/styles";
import thumbtackRed from "../components/Card/assets/thumbtackred.png";
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

const ImageWrapper = Styled.div`
  display: grid;
  grid-template-columns: repeat(1,1fr);
  justify-items: center;
  align-items: center;
  max-width: 100%;
  position: relative;
  z-index: 9999;
  top: 160px;
`;


const InboxWrapper = Styled.div`
  display: grid;
  grid-template-columns: repeat(1,1fr);
  justify-items: center;
  align-items: center;
  max-width: 100%;
  padding-bottom: 320px;
`;

const Background = Styled.main`
  
`;

// class InboxPage extends Component {
  const InboxPage = (props) => {
    console.log(props);
    const { classes } = props;

  // render() {
    return (


      <Background>
        <Sidebar />
        <InboxWrapper>
        
        

          <ImageWrapper>
            <img
              className={classes.tack}
              alt=""
              src={thumbtackRed}
              width="10%"
              top="20px"
            />
          </ImageWrapper> 
          <BaseInboxCard />
          

        </InboxWrapper>
        

        <BottomNav />
      </Background>
    );
  }
// }

export default withStyles(styles)(InboxPage);
