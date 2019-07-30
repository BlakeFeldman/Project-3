import React from "react";
import SideBar from "../components/Nav/SideBar/SideBar";
import Styled from "styled-components";
import Image from "../assets/jacquie_in_tutu.jpg";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import { withStyles } from "@material-ui/core/styles";
import BottomNav from "../components/Nav/BottomNav";
import Button from "@material-ui/core/Button";
import thumbtackRed from "../components/Card/assets/thumbtackred.png";

const ImageWrapper = Styled.div`
  display: grid;
  grid-template-columns: repeat(1,1fr);
  justify-items: center;
  align-items: center;
  max-width: 100%;
`;

const styles = {
  card: {
    minWidth: 300,
    width: "640px",
    padding: 15,
  },
  bullet: {
    display: "inline-block",
    margin: "0 2px",
    transform: "scale(0.8)",
  },
  title: {
    fontSize: 14,
  },
  pos: {
    marginBottom: 12,
  },
};

const Background = Styled.main`
  background-size: cover;
  height: 100%;
  overflow: hidden;
`;

const NavWrapperDiv = Styled.div`
  margin-bottom: 100px;
`;

const Grid = Styled.div`
  display: grid;
  grid-template-columns: [main] auto;
  grid-template-rows: [main] auto;
  justify-content: center;
  align-items: center; 
  align-content: center;
`;

const MainItem = Styled.div`
  grid-column-start: main;
  grid-column-end: main;
  grid-row-start: main;
  grid-row-end: main;
`;

const BottomNavSpacer = Styled.div`
  margin-top: 100px;
`;

const TermsOfService = props => {
  console.log(props);
  const { classes } = props;

  return (
    <Background>
      <NavWrapperDiv>
        <SideBar />
      </NavWrapperDiv>
      <Grid>
        <MainItem>
          <Card className={classes.card} square>
            <CardContent>
              <ImageWrapper>
                <img
                  className={classes.tack}
                  alt=""
                  src={thumbtackRed}
                  width="10%"
                />
              </ImageWrapper>

              <h3>Terms and Conditions</h3>

              <p>Last updated: 7/28/2019</p>

              <h3>Special Needs United Privacy Policy</h3>

              <p>
                  Protecting your privacy is very important to us. We’re telling
                you about our privacy policy so you know what information we
                collect, why we collect it, and what we do with it. This privacy
                notice is for SpecialNeedsUnited.com and is referred to as
                "Special Needs United" throughout the rest of this notificaton.  As
                a general matter, we encourage you to be engaged with the Special Needs
                United community while safeguarding personal information and private 
                medical information for you and your loved ones.  Always verify the identity 
                of any person before sharing your private information!
              </p>

              <p>
                  Special Needs United does not collect name, contact information,
                social security number or other similar information unless you
                choose to provide it. We do collect other limited information
                automatically from visitors who read, browse, and/or download
                information from our site. We do this so we can understand how
                the site is being used and how we can make it more helpful. See
                the "Types of Information We Collect" section below for a more
                detailed explanation.
              </p>

              <p>
                  Personally identifiable information (PII), as defined by the United
                States Government Office of Management and Budget (OMB), refers to
                information which can be used to distinguish or trace an
                individual's identity, such as their name, social security
                number, biometric records, and other relevant data.  PII may consist of 
                a single pience of data, or a compilation of other personal or identifying 
                information which is linked or where linkages may be inferred, to a specific individual, 
                such as date and place of birth, mother’s maiden name, and other personally identifiable information. 
                </p>
                <p>
                  If you create a user account and use other tools on the site, Special
                Needs United may collect personally identifiable information
                that you have voluntarily provided. This information is
                collected in order to provide the services Special Needs United
                is designed to offer – to connect service providers with those
                in need.
              </p>

              <p>
                  Special Needs United does not sell any information entered into
                SpecialNeedsUnited.com. Moreover, Special Needs United has never
                and will never sell advertising on the SpecialNeedsUnited.com
                website and will not use any user data of any kind to be
                leveraged for marketing or other purposes outside of the scope of the 
                Special Needs United Mission - To improve the lives of Special Needs children,
                their families, friends, and allies.
              </p>

              <h3>Types of Information We Collect</h3>
              
              <p>Information which is automatically collected:</p>
              
              <p>When you browse:</p>

              <p>Certain information about your visit can be collected when you browse websites. When you browse SpecialNeedsUnited.com, we, and in some cases our third-party service providers, can collect the following types of information about your visit, including: </p>
              <p>1.  Domain (for example, comcast.com, if you are using a Comcast account) from which you accessed the Internet.</p>
              <p>2.  IP address (an IP or internet protocol address is a number that is automatically assigned to a device connected to the web).</p>
              <p>3.  Approximate geographic location based on the IP address of the user’s local system.</p>
              <p>4.  Operating system (which is software that directs a computer’s basic functions such as executing programs and managing storage) for the device that you are using and information about the browser you used when visiting the site.</p>
              <p>5.  Date and time of your visit.</p>
              <p>6.  Pages you visited</p>
              <p>7.  Address of the website that connected you to SpecialNeedsUnited.com (such as google.com or bing.com)</p>
              <p>8.  Device type (desktop computer, tablet, or type of mobile device).</p>
              <p>9.  Screen resolution.</p>
              <p>10. Browser language.</p>
              <p>11. Geographic location.</p>
              <p>12. Time spent on page.</p>
              <p>12. Scroll depth – The measure of how much of a web page was viewed.</p>
              <p>13. User events (e.g. clicking a button).</p>              

              <p>
                Please read these Terms and Conditions carefully before using
                the https://kued-project3.herokuapp.com/ website operated by
                Special Needs United. Your access to the Special Needs United community 
                is conditioned on your acceptance of and compliance with these Terms and Conditions. 
                These Terms and Conditions apply to all visitors, users and others who access or use 
                Special Needs United. By accessing or using Special Needs United you agree to be bound 
                by these Terms and Conditions. If you disagree with any part of the Terms and Conditions 
                you will be denied access to the Special Needs United community.
              </p>

              <h3>Content</h3>

              <p>
                Special Needs United allows you to post, link, store, share and
                otherwise make available certain information, text, graphics,
                videos, or other material ("Content").{" "}
              </p>

              <h3>Links To Other Web Sites</h3>

              <p>
                Special Needs United may contain links to third-party web sites
                or services that are not owned or controlled by Special Needs
                United. Special Needs United has no control over, and assumes no
                responsibility for, the content, privacy policies, or practices
                of any third party web sites or services. You further
                acknowledge and agree that Special Needs United shall not be
                responsible or liable, directly or indirectly, for any damage or
                loss caused or alleged to be caused by or in connection with use
                of or reliance on any such content, goods or services available
                on or through any such web sites or services.
              </p>

              <h3>Changes</h3>
              <p>
                {" "}
                We reserve the right, at our sole discretion, to modify or
                replace these Terms at any time. If a revision is material we
                will try to provide at least 30 days' notice prior
                to any new terms taking effect. What constitutes a material
                change will be determined at our sole discretion.
              </p>

              <h3>Contact Us</h3>
              <p>
                If you have any questions about these Terms, please contact us.
              </p>

              <form
                action="#"
                onsubmit="if(document.getElementById('agree').checked) { return true; } else { alert('Please indicate that you have read and agree to the Terms and Conditions and Privacy Policy'); return false; }"
              >
                <input
                  type="checkbox"
                  name="checkbox"
                  value="check"
                  id="agree"
                />{" "}
                I have read and agree to the Terms and Conditions and Privacy
                Policy
                <br />
                <br />
                <Button
                  type="submit"
                  name="submit"
                  value="submit"
                  variant="outlined"
                  color="primary"
                  size="small"
                >
                  Submit
                </Button>
              </form>
            </CardContent>
          </Card>
        </MainItem>
      </Grid>
      <BottomNavSpacer />
      <BottomNav />
    </Background>
  );
};

export default withStyles(styles)(TermsOfService);
