import React from "react";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import ExpansionPanel from "@material-ui/core/ExpansionPanel";
import ExpansionPanelDetails from "@material-ui/core/ExpansionPanelDetails";
import ExpansionPanelSummary from "@material-ui/core/ExpansionPanelSummary";
import Typography from "@material-ui/core/Typography";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import SimpleCard from "./SimpleCard";

const styles = theme => ({
  root: {
    width: "80%",
  },
  heading: {
    fontSize: theme.typography.pxToRem(15),
    flexBasis: "33.33%",
    flexShrink: 0,
  },
  secondaryHeading: {
    fontSize: theme.typography.pxToRem(15),
    color: theme.palette.text.secondary,
  },
});

class Panel extends React.Component {
  state = {
    expanded: null,
    id: "",
    location: "",
  };

  componentDidMount = () => {
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
          console.log(result);
          console.log(result.data);
          this.setState({
            id: result.data.user,
            location: result.data.loc,
          });
        },
        error => {
          console.log(error);
        }
      );
  };

  handleChange = panel => (event, expanded) => {
    this.setState({
      expanded: expanded ? panel : false,
    });
  };

  renderPanels = () => {
    const { classes } = this.props;
    const { expanded } = this.state;

    return this.props.posts
      .filter(post => post.category === "Community Needs")
      .slice(0, 9)
      .map((panel, index) => {
        return (
          <ExpansionPanel
            expanded={expanded === `panel${index}`}
            onChange={this.handleChange(`panel${index}`)}
            key={index}
          >
            <ExpansionPanelSummary expandIcon={<ExpandMoreIcon />}>
              <Typography className={classes.heading}>{panel.title}</Typography>
              <Typography className={classes.secondaryHeading}>
                {panel.name}
              </Typography>
            </ExpansionPanelSummary>
            <ExpansionPanelDetails>
              <Typography>{panel.content}</Typography>
            </ExpansionPanelDetails>
          </ExpansionPanel>
        );
      });
  };

  render() {
    const { classes } = this.props;
    
    return (
      <div className={classes.root}>
        <SimpleCard
          posts={this.props.posts}
          category={this.props.category}
          renderPanels={this.renderPanels}
          updatePosts={this.props.updatePosts}
        />
      </div>
    );
  }
}

Panel.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Panel);
