import React, { Component } from "react";
import "./App.css";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Bulletin from "./pages/Bulletin";
import Dashboard from "./pages/Dashboard";
import HomePage from "./pages/HomePage";
import InboxPage from "./pages/InboxPage";
import NoMatch from "./pages/NoMatch";
import MuiThemeProvider from "@material-ui/core/styles/MuiThemeProvider";
import { createMuiTheme } from "@material-ui/core/styles";
import TermsOfService from "./pages/TermsOfService";
import ContactUs from "./pages/ContactUs";
import ThankYou from "./pages/ThankYou";
import HowToHelp from "./pages/HowToHelp";
import AboutUs from "./pages/AboutUs";
import Advocacy from "./pages/Advocacy";
import Services from "./pages/Services";
import Community from "./pages/Community";
import Education from "./pages/Education";
import GoFundMe from "./pages/GoFundMe";
import Gallery from "./pages/gallery";

const theme = createMuiTheme({
  palette: {
    primary: {
      light: "#e8f5e9",
      main: "#66bb6a",
    },
    secondary: {
      light: "white",
      main: "#DC143C",
      dark: "#e0e0e0",
    },
  },
});

class App extends Component {
  state = {
    user: "",
    location: "",
    name: "",
  };
  componentDidUpdate() {
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
        },
        error => {
          console.log(error);
        }
      );
  }

  updateAuth = user => {
    this.setState({
      user: user,
    });
  };

  render() {
    return (
      <MuiThemeProvider theme={theme}>
        <div>
          <Router>
            <div>
              <Switch>
                {/* login page */}
                <Route exact path="/" component={HomePage} />

                <Route exact path="/profile" component={Dashboard} />
                {/* discard^ */}

                {/* true homepage */}
                <Route exact path="/bulletin" component={Bulletin} />
                
                <Route exact path="/inbox" component={InboxPage} />
                {/* discard^ */}

                <Route exact path="/howtohelp" component={HowToHelp} />
                <Route exact path="/advocacy" component={Advocacy} />
                <Route exact path="/community" component={Community} />
                <Route exact path="/services" component={Services} />
                <Route exact path="/education" component={Education} />
                <Route exact path="/termsofservice" component={TermsOfService} />
                <Route exact path="/contact-us" component={ContactUs} />
                <Route exact path="/thank-you" component={ThankYou} />
                <Route exact path="/aboutus" component={AboutUs} />
                <Route exact path="/how-to-help" component={GoFundMe} />
                <Route exact path="/gallery" component={Gallery} />
                <Route component={NoMatch} />
              </Switch>
            </div>
          </Router>
        </div>
      </MuiThemeProvider>
    );
  }
}

export default App;
