import React from "react";
import SideBar from "../components/Nav/SideBar/SideBar";
import Nav from "../components/Nav/Nav";
import BottomNav from "../components/Nav/BottomNav";
import FormControl from '@material-ui/core/FormControl';
import Wrapper from "../components/LandingPage/Wrapper";
import { withStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import Button from '../components/ContactUs/SubmitButton'
import Styled from "styled-components";
import thumbtackRed from "../components/Card/assets/thumbtackred.png";

const ImageWrapper = Styled.div`
  display: grid;
  grid-template-columns: repeat(1,1fr);
  justify-items: center;
  align-items: center;
  max-width: 100%;
`;

const styles = theme => ({
    container: {
        display: 'flex',
        flexWrap: 'wrap',
    },
    textField: {
        marginLeft: theme.spacing.unit,
        marginRight: theme.spacing.unit,
    },
    messageField:{
        marginLeft: theme.spacing.unit,
        marginRight: theme.spacing.unit,
        width:"92%",
    },
    dense: {
        marginTop: 16,
    },
    menu: {
        width: 200,
    },
});

const Background = Styled.main`
  background-size: cover;
  height: 100%;
  overflow: hidden;
`;

class OutlinedTextFields extends React.Component {
    state = {
        name: '',
        age: '',
        multiline: '',
    };

    handleChange = name => event => {
        this.setState({
            [name]: event.target.value,
        });
    };

    render() {
        const { classes } = this.props;

        return (
            <Background>
                <Nav />
                <SideBar />
                <Wrapper>
                <ImageWrapper>
            <img
              className={classes.tack}
              alt=""
              src={thumbtackRed}
              width="10%"
              top="20px"
            />
          </ImageWrapper> 

                    <h1>Contact Us</h1>
                    <FormControl>
                        <form className={classes.container} noValidate autoComplete="off">
                            <TextField
                                id="outlined-name"
                                label="Name"
                                className={classes.textField}
                                value={this.state.name}
                                onChange={this.handleChange('name')}
                                margin="normal"
                                variant="outlined"
                            />

                            <TextField
                                id="outlined-email-input"
                                label="Email"
                                className={classes.textField}
                                type="email"
                                name="email"
                                autoComplete="email"
                                margin="normal"
                                variant="outlined"
                            />

                            <TextField
                                id="outlined-multiline-flexible"
                                label="Message"
                                multiline
                                rowsMax="4"
                                value={this.state.multiline}
                                onChange={this.handleChange('multiline')}
                                className={classes.messageField}
                                margin="normal"
                                variant="outlined"
                                width="100%"
                            />
                            <Button />
                        </form>
                    </FormControl>
                </Wrapper>
                <BottomNav />
            </Background>
        )
    }
    
    
};

export default withStyles(styles)(OutlinedTextFields);
