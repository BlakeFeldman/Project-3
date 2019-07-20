import React from 'react';
import AppBar from '@material-ui/core/AppBar';
// import Button from '@material-ui/core/Button';
import CameraIcon from '@material-ui/icons/PhotoCamera';
import Card from '@material-ui/core/Card';
// import CardActions from '@material-ui/core/CardActions';
// import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import CssBaseline from '@material-ui/core/CssBaseline';
import Grid from '@material-ui/core/Grid';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
// import Link from '@material-ui/core/Link';
import jacquie_in_tub from '../assets/jacquie_in_tub.jpg';
import jacquie_donut_face from '../assets/jacquie_donut_face.jpg';
import jacquie_chewbacca from '../assets/jacquie_chewbacca.jpg';
import jacquie_daddy_hospital from '../assets/jacquie_daddy_hospital.jpg';
import jacquie_2nd_bday from '../assets/jacquie_2nd_bday.jpg';
import jacquie_bubble_beard from '../assets/jacquie_bubble_beard.jpg';
import jacquie_laundry_basket from '../assets/jacquie_laundry_basket.jpg';
import jacquie_pink_chair from '../assets/jacquie_pink_chair.jpg';
import jacquie_turtle_hat from '../assets/jacquie_turtle_hat.jpg';
import jacquie_in_fridge from '../assets/jacquie_in_fridge.jpg';
import jacquie_mommy_hospital from '../assets/jacquie_mommy_hospital.jpg';
import jacquie_potty from '../assets/jacquie_potty.jpg';
import jacquie_sleep from '../assets/jacquie_sleep.jpeg';
import jacquie_mommy from '../assets/jacquie_mommy.jpg';
import jacquie_bday from '../assets/jacquie_bday.jpg';
import jacquie_bob_ross from '../assets/jacquie_bob_ross.jpg';
import jacquie_daddy2 from '../assets/jacquie_daddy2.jpg';
import jacquie_hospital from '../assets/jacquie_hospital.jpeg';
import just_jacquie from '../assets/just_jacquie.jpg';
import jacquie_halloween from '../assets/jacquie_halloween.jpg';
import jacquie_heart_glasses from '../assets/jacquie_heart_glasses.jpg';
import jacquie_foot from '../assets/jacquie_foot.jpg';
import jacquie_gangster from '../assets/jacquie_gangster.jpg';
import jacquie_cupcake from '../assets/jacquie_cupcake.jpg';
import jacquie_sleep2 from '../assets/jacquie_sleep2.jpg';
import jacquie_monkey from '../assets/jacquie_monkey.jpg';
import jacquie_sassy from '../assets/jacquie_sassy.jpg';
import jacquie_smile from '../assets/jacquie_smile.jpg';
import little_jacquie_big_jacquie from '../assets/little_jacquie_big_jacquie.jpg';
import jacquie_cupcake2 from '../assets/jacquie_cupcake2.jpg';
import jacquie_glasses from '../assets/jacquie_glasses.jpg';
import jacquie_jordan from '../assets/jacquie_jordan.jpeg';
import jacquie_hospital2 from '../assets/jacquie_hospital2.jpg';
import jacquie_messy from '../assets/jacquie_messy.jpg';

// function MadeWithLove() {
//   return (
//     <Typography variant="body2" color="textSecondary" align="center">
//       {'Built with love by the '}
//       <Link color="inherit" href="https://material-ui.com/">
//         Material-UI
//       </Link>
//       {' team.'}
//     </Typography>
//   );
// }
const useStyles = makeStyles(theme => ({
  icon: {
    marginRight: theme.spacing(2),
  },
  heroContent: {
    backgroundColor: theme.palette.background.paper,
    padding: theme.spacing(8, 0, 6),
  },
  heroButtons: {
    marginTop: theme.spacing(4),
  },
  cardGrid: {
    paddingTop: theme.spacing(8),
    paddingBottom: theme.spacing(8),
  },
  card: {
    height: '100%',
    display: 'flex',
    flexDirection: 'column',
  },
  cardMedia: {
    paddingTop: '56.25%', // 16:9
  },
  cardContent: {
    flexGrow: 1,
  },
  footer: {
    backgroundColor: theme.palette.background.paper,
    padding: theme.spacing(6),
  },
}));

const cards = [1];

export default function Gallery() {
  const classes = useStyles();

  return (
    <React.Fragment>
      <CssBaseline />
      <AppBar position="relative">
        <Toolbar>
          <CameraIcon className={classes.icon} />
          <Typography variant="h6" color="inherit" noWrap>
            Gallery
          </Typography>
        </Toolbar>
      </AppBar>
      <main>
        {/* Hero unit */}
        <div className={classes.heroContent}>
          <Container maxWidth="sm">
            <Typography component="h1" variant="h2" align="center" color="textPrimary" gutterBottom>
              Special Needs United
            </Typography>
            <Typography variant="h5" align="center" color="textSecondary" paragraph>
             Here is the inspiration behind our project, Nate's daughter Jacquie!!
            </Typography>
            {/* <div className={classes.heroButtons}>
              <Grid container spacing={2} justify="center">
                <Grid item>
                  <Button variant="contained" color="primary">
                    Main call to action
                  </Button>
                </Grid>
                <Grid item>
                  <Button variant="outlined" color="primary">
                    Secondary action
                  </Button>
                </Grid>
              </Grid>
            </div> */}
          </Container>
        </div>
        <Container className={classes.cardGrid} maxWidth="md">
          {/* End hero unit */}
          <Grid container spacing={4}>

            {/* image 1 */}
            {cards.map(card => (
              <Grid item key={card} xs={12} sm={7} md={5}>
                <Card className={classes.card}>
                  <CardMedia
                    className={classes.cardMedia}
                    image={jacquie_in_tub}
                    title="Jacquie in smiling in the bathtub"
                  />
                  {/* <CardContent className={classes.cardContent}>
                    <Typography gutterBottom variant="h5" component="h2">
                      Heading
                    </Typography>
                    <Typography>
                      This is a media card. You can use this section to describe the content.
                    </Typography>
                  </CardContent>

                  <CardActions>
                    <Button size="small" color="primary">
                      View
                    </Button>
                    <Button size="small" color="primary">
                      Edit
                    </Button>
                  </CardActions> */}
                </Card>
              </Grid>
            ))}

            {/* image 2 */}
            {cards.map(card => (
              <Grid item key={card} xs={12} sm={7} md={5}>
                <Card className={classes.card}>
                  <CardMedia
                    className={classes.cardMedia}
                    image={jacquie_donut_face}
                    title="Jacquie after she got caught eating her dads donuts"
                  />
                  {/* <CardContent className={classes.cardContent}>
                    <Typography gutterBottom variant="h5" component="h2">
                      Heading
                    </Typography>
                    <Typography>
                      This is a media card. You can use this section to describe the content.
                    </Typography>
                  </CardContent>

                  <CardActions>
                    <Button size="small" color="primary">
                      View
                    </Button>
                    <Button size="small" color="primary">
                      Edit
                    </Button>
                  </CardActions> */}
                </Card>
              </Grid>
            ))}

            {/* image 3 */}
            {cards.map(card => (
              <Grid item key={card} xs={12} sm={7} md={5}>
                <Card className={classes.card}>
                  <CardMedia
                    className={classes.cardMedia}
                    image={jacquie_chewbacca}
                    title="Jacquie in her chewbacca onsie"
                  />
                  {/* <CardContent className={classes.cardContent}>
                    <Typography gutterBottom variant="h5" component="h2">
                      Heading
                    </Typography>
                    <Typography>
                      This is a media card. You can use this section to describe the content.
                    </Typography>
                  </CardContent>

                  <CardActions>
                    <Button size="small" color="primary">
                      View
                    </Button>
                    <Button size="small" color="primary">
                      Edit
                    </Button>
                  </CardActions> */}
                </Card>
              </Grid>
            ))}

            {/* image 4 */}
            {cards.map(card => (
              <Grid item key={card} xs={12} sm={7} md={5}>
                <Card className={classes.card}>
                  <CardMedia
                    className={classes.cardMedia}
                    image={jacquie_daddy_hospital}
                    title="Jacquie and her dad sitting with each other in the hospital"
                  />
                  {/* <CardContent className={classes.cardContent}>
                    <Typography gutterBottom variant="h5" component="h2">
                      Heading
                    </Typography>
                    <Typography>
                      This is a media card. You can use this section to describe the content.
                    </Typography>
                  </CardContent>

                  <CardActions>
                    <Button size="small" color="primary">
                      View
                    </Button>
                    <Button size="small" color="primary">
                      Edit
                    </Button>
                  </CardActions> */}
                </Card>
              </Grid>
            ))}

            {/* image 5 */}
            {cards.map(card => (
              <Grid item key={card} s={12} sm={7} md={5}>
                <Card className={classes.card}>
                  <CardMedia
                    className={classes.cardMedia}
                    image={jacquie_2nd_bday}
                    title="Jacquie's second birthday outfit"
                  />
                  {/* <CardContent className={classes.cardContent}>
                    <Typography gutterBottom variant="h5" component="h2">
                      Heading
                    </Typography>
                    <Typography>
                      This is a media card. You can use this section to describe the content.
                    </Typography>
                  </CardContent>

                  <CardActions>
                    <Button size="small" color="primary">
                      View
                    </Button>
                    <Button size="small" color="primary">
                      Edit
                    </Button>
                  </CardActions> */}
                </Card>
              </Grid>
            ))}

              {/* image 6 */}
              {cards.map(card => (
              <Grid item key={card} xs={12} sm={7} md={5}>
                <Card className={classes.card}>
                  <CardMedia
                    className={classes.cardMedia}
                    image={jacquie_bubble_beard}
                    title="Jacquie with a bubble beard in the tub"
                  />
                  {/* <CardContent className={classes.cardContent}>
                    <Typography gutterBottom variant="h5" component="h2">
                      Heading
                    </Typography>
                    <Typography>
                      This is a media card. You can use this section to describe the content.
                    </Typography>
                  </CardContent>

                  <CardActions>
                    <Button size="small" color="primary">
                      View
                    </Button>
                    <Button size="small" color="primary">
                      Edit
                    </Button>
                  </CardActions> */}
                </Card>
              </Grid>
            ))}

              {/* image 7 */}
              {cards.map(card => (
              <Grid item key={card} xs={12} sm={7} md={5}>
                <Card className={classes.card}>
                  <CardMedia
                    className={classes.cardMedia}
                    image={jacquie_in_fridge}
                    title="Jacquie cooling off sitting in the fridge"
                  />
                  {/* <CardContent className={classes.cardContent}>
                    <Typography gutterBottom variant="h5" component="h2">
                      Heading
                    </Typography>
                    <Typography>
                      This is a media card. You can use this section to describe the content.
                    </Typography>
                  </CardContent>

                  <CardActions>
                    <Button size="small" color="primary">
                      View
                    </Button>
                    <Button size="small" color="primary">
                      Edit
                    </Button>
                  </CardActions> */}
                </Card>
              </Grid>
            ))}

              {/* image 8 */}
              {cards.map(card => (
              <Grid item key={card} xs={12} sm={7} md={5}>
                <Card className={classes.card}>
                  <CardMedia
                    className={classes.cardMedia}
                    image={jacquie_laundry_basket}
                    title="Jacquie playing in the laundry basket"
                  />
                  {/* <CardContent className={classes.cardContent}>
                    <Typography gutterBottom variant="h5" component="h2">
                      Heading
                    </Typography>
                    <Typography>
                      This is a media card. You can use this section to describe the content.
                    </Typography>
                  </CardContent>

                  <CardActions>
                    <Button size="small" color="primary">
                      View
                    </Button>
                    <Button size="small" color="primary">
                      Edit
                    </Button>
                  </CardActions> */}
                </Card>
              </Grid>
            ))}

            {/* image 9 */}
            {cards.map(card => (
              <Grid item key={card} xs={12} sm={7} md={5}>
                <Card className={classes.card}>
                  <CardMedia
                    className={classes.cardMedia}
                    image={jacquie_mommy_hospital}
                    title="Jacquie and her mom in the hospital"
                  />
                  {/* <CardContent className={classes.cardContent}>
                    <Typography gutterBottom variant="h5" component="h2">
                      Heading
                    </Typography>
                    <Typography>
                      This is a media card. You can use this section to describe the content.
                    </Typography>
                  </CardContent>

                  <CardActions>
                    <Button size="small" color="primary">
                      View
                    </Button>
                    <Button size="small" color="primary">
                      Edit
                    </Button>
                  </CardActions> */}
                </Card>
              </Grid>
            ))}

            {/* image 10 */}
            {cards.map(card => (
              <Grid item key={card} xs={12} sm={7} md={5}>
                <Card className={classes.card}>
                  <CardMedia
                    className={classes.cardMedia}
                    image={jacquie_pink_chair}
                    title="jjacquie in her pink chair"
                  />
                  {/* <CardContent className={classes.cardContent}>
                    <Typography gutterBottom variant="h5" component="h2">
                      Heading
                    </Typography>
                    <Typography>
                      This is a media card. You can use this section to describe the content.
                    </Typography>
                  </CardContent>

                  <CardActions>
                    <Button size="small" color="primary">
                      View
                    </Button>
                    <Button size="small" color="primary">
                      Edit
                    </Button>
                  </CardActions> */}
                </Card>
              </Grid>
            ))}

            {/* image 11 */}
            {cards.map(card => (
              <Grid item key={card} xs={12} sm={7} md={5}>
                <Card className={classes.card}>
                  <CardMedia
                    className={classes.cardMedia}
                    image={jacquie_potty}
                    title="Jacquie potty training"
                  />
                  {/* <CardContent className={classes.cardContent}>
                    <Typography gutterBottom variant="h5" component="h2">
                      Heading
                    </Typography>
                    <Typography>
                      This is a media card. You can use this section to describe the content.
                    </Typography>
                  </CardContent>

                  <CardActions>
                    <Button size="small" color="primary">
                      View
                    </Button>
                    <Button size="small" color="primary">
                      Edit
                    </Button>
                  </CardActions> */}
                </Card>
              </Grid>
            ))}

            {/* image 12 */}
            {cards.map(card => (
              <Grid item key={card} xs={12} sm={7} md={5}>
                <Card className={classes.card}>
                  <CardMedia
                    className={classes.cardMedia}
                    image={jacquie_sleep}
                    title="Jacquie sleep in her high chair"
                  />
                  {/* <CardContent className={classes.cardContent}>
                    <Typography gutterBottom variant="h5" component="h2">
                      Heading
                    </Typography>
                    <Typography>
                      This is a media card. You can use this section to describe the content.
                    </Typography>
                  </CardContent>

                  <CardActions>
                    <Button size="small" color="primary">
                      View
                    </Button>
                    <Button size="small" color="primary">
                      Edit
                    </Button>
                  </CardActions> */}
                </Card>
              </Grid>
            ))}

            {/* image 13 */}
            {cards.map(card => (
              <Grid item key={card} xs={12} sm={7} md={5}>
                <Card className={classes.card}>
                  <CardMedia
                    className={classes.cardMedia}
                    image={jacquie_mommy}
                    title="Jacquie and her mom"
                  />
                  {/* <CardContent className={classes.cardContent}>
                    <Typography gutterBottom variant="h5" component="h2">
                      Heading
                    </Typography>
                    <Typography>
                      This is a media card. You can use this section to describe the content.
                    </Typography>
                  </CardContent>

                  <CardActions>
                    <Button size="small" color="primary">
                      View
                    </Button>
                    <Button size="small" color="primary">
                      Edit
                    </Button>
                  </CardActions> */}
                </Card>
              </Grid>
            ))}

            {/* image 14 */}
            {cards.map(card => (
              <Grid item key={card} xs={12} sm={7} md={5}>
                <Card className={classes.card}>
                  <CardMedia
                    className={classes.cardMedia}
                    image={jacquie_bday}
                    title="Jacquie's first birthday"
                  />
                  {/* <CardContent className={classes.cardContent}>
                    <Typography gutterBottom variant="h5" component="h2">
                      Heading
                    </Typography>
                    <Typography>
                      This is a media card. You can use this section to describe the content.
                    </Typography>
                  </CardContent>

                  <CardActions>
                    <Button size="small" color="primary">
                      View
                    </Button>
                    <Button size="small" color="primary">
                      Edit
                    </Button>
                  </CardActions> */}
                </Card>
              </Grid>
            ))}

            {/* image 15 */}
            {cards.map(card => (
              <Grid item key={card} xs={12} sm={7} md={5}>
                <Card className={classes.card}>
                  <CardMedia
                    className={classes.cardMedia}
                    image={jacquie_bob_ross}
                    title="Jacquie and Bob Ross"
                  />
                  {/* <CardContent className={classes.cardContent}>
                    <Typography gutterBottom variant="h5" component="h2">
                      Heading
                    </Typography>
                    <Typography>
                      This is a media card. You can use this section to describe the content.
                    </Typography>
                  </CardContent>

                  <CardActions>
                    <Button size="small" color="primary">
                      View
                    </Button>
                    <Button size="small" color="primary">
                      Edit
                    </Button>
                  </CardActions> */}
                </Card>
              </Grid>
            ))}

             {/* image 16 */}
             {cards.map(card => (
              <Grid item key={card} xs={12} sm={7} md={5}>
                <Card className={classes.card}>
                  <CardMedia
                    className={classes.cardMedia}
                    image={jacquie_daddy2}
                    title="Jacquie and her dad doing work"
                  />
                  {/* <CardContent className={classes.cardContent}>
                    <Typography gutterBottom variant="h5" component="h2">
                      Heading
                    </Typography>
                    <Typography>
                      This is a media card. You can use this section to describe the content.
                    </Typography>
                  </CardContent>

                  <CardActions>
                    <Button size="small" color="primary">
                      View
                    </Button>
                    <Button size="small" color="primary">
                      Edit
                    </Button>
                  </CardActions> */}
                </Card>
              </Grid>
            ))}

            {/* image 17 */}
            {cards.map(card => (
              <Grid item key={card} xs={12} sm={7} md={5}>
                <Card className={classes.card}>
                  <CardMedia
                    className={classes.cardMedia}
                    image={jacquie_hospital}
                    title="Jacquie after her facial surgery"
                  />
                  {/* <CardContent className={classes.cardContent}>
                    <Typography gutterBottom variant="h5" component="h2">
                      Heading
                    </Typography>
                    <Typography>
                      This is a media card. You can use this section to describe the content.
                    </Typography>
                  </CardContent>

                  <CardActions>
                    <Button size="small" color="primary">
                      View
                    </Button>
                    <Button size="small" color="primary">
                      Edit
                    </Button>
                  </CardActions> */}
                </Card>
              </Grid>
            ))}

             {/* image 18 */}
             {cards.map(card => (
              <Grid item key={card} xs={12} sm={7} md={5}>
                <Card className={classes.card}>
                  <CardMedia
                    className={classes.cardMedia}
                    image={just_jacquie}
                    title="Jacquie all up in the camera"
                  />
                  {/* <CardContent className={classes.cardContent}>
                    <Typography gutterBottom variant="h5" component="h2">
                      Heading
                    </Typography>
                    <Typography>
                      This is a media card. You can use this section to describe the content.
                    </Typography>
                  </CardContent>

                  <CardActions>
                    <Button size="small" color="primary">
                      View
                    </Button>
                    <Button size="small" color="primary">
                      Edit
                    </Button>
                  </CardActions> */}
                </Card>
              </Grid>
            ))}

             {/* image 19 */}
             {cards.map(card => (
              <Grid item key={card} xs={12} sm={7} md={5}>
                <Card className={classes.card}>
                  <CardMedia
                    className={classes.cardMedia}
                    image={jacquie_monkey}
                    title="Jacquie looking at monkeys at the zoo"
                  />
                  {/* <CardContent className={classes.cardContent}>
                    <Typography gutterBottom variant="h5" component="h2">
                      Heading
                    </Typography>
                    <Typography>
                      This is a media card. You can use this section to describe the content.
                    </Typography>
                  </CardContent>

                  <CardActions>
                    <Button size="small" color="primary">
                      View
                    </Button>
                    <Button size="small" color="primary">
                      Edit
                    </Button>
                  </CardActions> */}
                </Card>
              </Grid>
            ))}

             {/* image 20 */}
             {cards.map(card => (
              <Grid item key={card} xs={12} sm={7} md={5}>
                <Card className={classes.card}>
                  <CardMedia
                    className={classes.cardMedia}
                    image={jacquie_smile}
                    title="Jacquie smilling about something she did"
                  />
                  {/* <CardContent className={classes.cardContent}>
                    <Typography gutterBottom variant="h5" component="h2">
                      Heading
                    </Typography>
                    <Typography>
                      This is a media card. You can use this section to describe the content.
                    </Typography>
                  </CardContent>

                  <CardActions>
                    <Button size="small" color="primary">
                      View
                    </Button>
                    <Button size="small" color="primary">
                      Edit
                    </Button>
                  </CardActions> */}
                </Card>
              </Grid>
            ))}

            {/* image 21 */}
            {cards.map(card => (
              <Grid item key={card} xs={12} sm={7} md={5}>
                <Card className={classes.card}>
                  <CardMedia
                    className={classes.cardMedia}
                    image={jacquie_sassy}
                    title="Jacquie being sassy"
                  />
                  {/* <CardContent className={classes.cardContent}>
                    <Typography gutterBottom variant="h5" component="h2">
                      Heading
                    </Typography>
                    <Typography>
                      This is a media card. You can use this section to describe the content.
                    </Typography>
                  </CardContent>

                  <CardActions>
                    <Button size="small" color="primary">
                      View
                    </Button>
                    <Button size="small" color="primary">
                      Edit
                    </Button>
                  </CardActions> */}
                </Card>
              </Grid>
            ))}

             {/* image 22 */}
             {cards.map(card => (
              <Grid item key={card} xs={12} sm={7} md={5}>
                <Card className={classes.card}>
                  <CardMedia
                    className={classes.cardMedia}
                    image={jacquie_heart_glasses}
                    title="Jacquie with the heart glasses filter"
                  />
                  {/* <CardContent className={classes.cardContent}>
                    <Typography gutterBottom variant="h5" component="h2">
                      Heading
                    </Typography>
                    <Typography>
                      This is a media card. You can use this section to describe the content.
                    </Typography>
                  </CardContent>

                  <CardActions>
                    <Button size="small" color="primary">
                      View
                    </Button>
                    <Button size="small" color="primary">
                      Edit
                    </Button>
                  </CardActions> */}
                </Card>
              </Grid>
            ))}

             {/* image 23 */}
             {cards.map(card => (
              <Grid item key={card} xs={12} sm={7} md={5}>
                <Card className={classes.card}>
                  <CardMedia
                    className={classes.cardMedia}
                    image={jacquie_gangster}
                    title="Gangster Jacquie"
                  />
                  {/* <CardContent className={classes.cardContent}>
                    <Typography gutterBottom variant="h5" component="h2">
                      Heading
                    </Typography>
                    <Typography>
                      This is a media card. You can use this section to describe the content.
                    </Typography>
                  </CardContent>

                  <CardActions>
                    <Button size="small" color="primary">
                      View
                    </Button>
                    <Button size="small" color="primary">
                      Edit
                    </Button>
                  </CardActions> */}
                </Card>
              </Grid>
            ))}

            {/* image 24 */}
            {cards.map(card => (
              <Grid item key={card} xs={12} sm={7} md={5}>
                <Card className={classes.card}>
                  <CardMedia
                    className={classes.cardMedia}
                    image={jacquie_foot}
                    title="Jacquie eating her feet in the hospital"
                  />
                  {/* <CardContent className={classes.cardContent}>
                    <Typography gutterBottom variant="h5" component="h2">
                      Heading
                    </Typography>
                    <Typography>
                      This is a media card. You can use this section to describe the content.
                    </Typography>
                  </CardContent>

                  <CardActions>
                    <Button size="small" color="primary">
                      View
                    </Button>
                    <Button size="small" color="primary">
                      Edit
                    </Button>
                  </CardActions> */}
                </Card>
              </Grid>
            ))}

            {/* image 25 */}
            {cards.map(card => (
              <Grid item key={card} xs={12} sm={7} md={5}>
                <Card className={classes.card}>
                  <CardMedia
                    className={classes.cardMedia}
                    image={jacquie_cupcake}
                    title="Jacquie trying her first cupcake"
                  />
                  {/* <CardContent className={classes.cardContent}>
                    <Typography gutterBottom variant="h5" component="h2">
                      Heading
                    </Typography>
                    <Typography>
                      This is a media card. You can use this section to describe the content.
                    </Typography>
                  </CardContent>

                  <CardActions>
                    <Button size="small" color="primary">
                      View
                    </Button>
                    <Button size="small" color="primary">
                      Edit
                    </Button>
                  </CardActions> */}
                </Card>
              </Grid>
            ))}

            {/* image 26 */}
            {cards.map(card => (
              <Grid item key={card} xs={12} sm={7} md={5}>
                <Card className={classes.card}>
                  <CardMedia
                    className={classes.cardMedia}
                    image={little_jacquie_big_jacquie}
                    title="Jacquie when she can home from the hospital vs. when she got her new car seat"
                  />
                  {/* <CardContent className={classes.cardContent}>
                    <Typography gutterBottom variant="h5" component="h2">
                      Heading
                    </Typography>
                    <Typography>
                      This is a media card. You can use this section to describe the content.
                    </Typography>
                  </CardContent>

                  <CardActions>
                    <Button size="small" color="primary">
                      View
                    </Button>
                    <Button size="small" color="primary">
                      Edit
                    </Button>
                  </CardActions> */}
                </Card>
              </Grid>
            ))}

            {/* image 27 */}
            {cards.map(card => (
              <Grid item key={card} xs={12} sm={7} md={5}>
                <Card className={classes.card}>
                  <CardMedia
                    className={classes.cardMedia}
                    image={jacquie_cupcake2}
                    title="Jacquie smiling after trying her first cupcake"
                  />
                  {/* <CardContent className={classes.cardContent}>
                    <Typography gutterBottom variant="h5" component="h2">
                      Heading
                    </Typography>
                    <Typography>
                      This is a media card. You can use this section to describe the content.
                    </Typography>
                  </CardContent>

                  <CardActions>
                    <Button size="small" color="primary">
                      View
                    </Button>
                    <Button size="small" color="primary">
                      Edit
                    </Button>
                  </CardActions> */}
                </Card>
              </Grid>
            ))}

            {/* image 28 */}
            {cards.map(card => (
              <Grid item key={card} m={12} sm={7} md={5}>
                <Card className={classes.card}>
                  <CardMedia
                    className={classes.cardMedia}
                    image={jacquie_sleep2}
                    title="Jacquie sleep in her bouncer"
                  />
                  {/* <CardContent className={classes.cardContent}>
                    <Typography gutterBottom variant="h5" component="h2">
                      Heading
                    </Typography>
                    <Typography>
                      This is a media card. You can use this section to describe the content.
                    </Typography>
                  </CardContent>

                  <CardActions>
                    <Button size="small" color="primary">
                      View
                    </Button>
                    <Button size="small" color="primary">
                      Edit
                    </Button>
                  </CardActions> */}
                </Card>
              </Grid>
            ))}

            {/* image 29 */}
            {cards.map(card => (
              <Grid item key={card} xs={12} sm={7} md={5}>
                <Card className={classes.card}>
                  <CardMedia
                    className={classes.cardMedia}
                    image={jacquie_halloween}
                    title="Jacquie's first halloween"
                  />
                  {/* <CardContent className={classes.cardContent}>
                    <Typography gutterBottom variant="h5" component="h2">
                      Heading
                    </Typography>
                    <Typography>
                      This is a media card. You can use this section to describe the content.
                    </Typography>
                  </CardContent>

                  <CardActions>
                    <Button size="small" color="primary">
                      View
                    </Button>
                    <Button size="small" color="primary">
                      Edit
                    </Button>
                  </CardActions> */}
                </Card>
              </Grid>
            ))}

            {/* image 30 */}
            {cards.map(card => (
              <Grid item key={card} xs={12} sm={7} md={5}>
                <Card className={classes.card}>
                  <CardMedia
                    className={classes.cardMedia}
                    image={jacquie_hospital2}
                    title="Jacquie on her tablet in the hospital"
                  />
                  {/* <CardContent className={classes.cardContent}>
                    <Typography gutterBottom variant="h5" component="h2">
                      Heading
                    </Typography>
                    <Typography>
                      This is a media card. You can use this section to describe the content.
                    </Typography>
                  </CardContent>

                  <CardActions>
                    <Button size="small" color="primary">
                      View
                    </Button>
                    <Button size="small" color="primary">
                      Edit
                    </Button>
                  </CardActions> */}
                </Card>
              </Grid>
            ))}

            {/* image 31 */}
            {cards.map(card => (
              <Grid item key={card} xs={12} sm={7} md={5}>
                <Card className={classes.card}>
                  <CardMedia
                    className={classes.cardMedia}
                    image={jacquie_glasses}
                    title="Jacquie in her glasses"
                  />
                  {/* <CardContent className={classes.cardContent}>
                    <Typography gutterBottom variant="h5" component="h2">
                      Heading
                    </Typography>
                    <Typography>
                      This is a media card. You can use this section to describe the content.
                    </Typography>
                  </CardContent>

                  <CardActions>
                    <Button size="small" color="primary">
                      View
                    </Button>
                    <Button size="small" color="primary">
                      Edit
                    </Button>
                  </CardActions> */}
                </Card>
              </Grid>
            ))}

            {/* image 32 */}
            {cards.map(card => (
              <Grid item key={card} xs={12} sm={7} md={5}>
                <Card className={classes.card}>
                  <CardMedia
                    className={classes.cardMedia}
                    image={jacquie_jordan}
                    title="Jacquie in her jordan outfit"
                  />
                  {/* <CardContent className={classes.cardContent}>
                    <Typography gutterBottom variant="h5" component="h2">
                      Heading
                    </Typography>
                    <Typography>
                      This is a media card. You can use this section to describe the content.
                    </Typography>
                  </CardContent>

                  <CardActions>
                    <Button size="small" color="primary">
                      View
                    </Button>
                    <Button size="small" color="primary">
                      Edit
                    </Button>
                  </CardActions> */}
                </Card>
              </Grid>
            ))}

            {/* image 34 */}
            {cards.map(card => (
              <Grid item key={card} xs={12} sm={7} md={5}>
                <Card className={classes.card}>
                  <CardMedia
                    className={classes.cardMedia}
                    image={jacquie_messy}
                    title="Jacquie with a messy face"
                  />
                  {/* <CardContent className={classes.cardContent}>
                    <Typography gutterBottom variant="h5" component="h2">
                      Heading
                    </Typography>
                    <Typography>
                      This is a media card. You can use this section to describe the content.
                    </Typography>
                  </CardContent>

                  <CardActions>
                    <Button size="small" color="primary">
                      View
                    </Button>
                    <Button size="small" color="primary">
                      Edit
                    </Button>
                  </CardActions> */}
                </Card>
              </Grid>
            ))}

              {/* image 33 */}
              {cards.map(card => (
              <Grid item key={card} xs={12} sm={7} md={5}>
                <Card className={classes.card}>
                  <CardMedia
                    className={classes.cardMedia}
                    image={jacquie_turtle_hat}
                    title="Jacquie in a ninja turtle hat"
                  />
                  {/* <CardContent className={classes.cardContent}>
                    <Typography gutterBottom variant="h5" component="h2">
                      Heading
                    </Typography>
                    <Typography>
                      This is a media card. You can use this section to describe the content.
                    </Typography>
                  </CardContent>

                  <CardActions>
                    <Button size="small" color="primary">
                      View
                    </Button>
                    <Button size="small" color="primary">
                      Edit
                    </Button>
                  </CardActions> */}
                </Card>
              </Grid>
            ))}
          </Grid>
        </Container>
      </main>

    </React.Fragment>
  );
}