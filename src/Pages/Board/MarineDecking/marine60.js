import React, { useState } from "react";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import { makeStyles, useTheme, withStyles } from "@material-ui/core/styles";
import useMediaQuery from "@material-ui/core/useMediaQuery";

import Button from "@material-ui/core/Button";
import styled from "styled-components";
import Avatar from "@material-ui/core/Avatar";
import background from "../../../images/home_board/home_board_aa5.jpg";

import GridList from "@material-ui/core/GridList";
import GridListTile from "@material-ui/core/GridListTile";
import Dialog from "@material-ui/core/Dialog";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import IconButton from "@material-ui/core/IconButton";

import Banner from "../../../components/Slider/index";


import InputLabel from "@material-ui/core/InputLabel";
import FormHelperText from "@material-ui/core/FormHelperText";
import FormControl from "@material-ui/core/FormControl";
import Select from "@material-ui/core/Select";

import TextField from "@material-ui/core/TextField";
import phoneIcon from "../../../images/phone.svg";
import emailIcon from "../../../images/email.svg";
import airplane from "../../../images/send.svg";

import MuiAccordion from "@material-ui/core/Accordion";
import MuiAccordionSummary from "@material-ui/core/AccordionSummary";
import MuiAccordionDetails from "@material-ui/core/AccordionDetails";
import AddIcon from "@material-ui/icons/Add";

import Card from "@material-ui/core/Card";

import CardContent from "@material-ui/core/CardContent";

import PlayCircleOutlineIcon from "@material-ui/icons/PlayCircleOutline";
import Divider from "@material-ui/core/Divider";

import { Link } from "react-router-dom";

import SliderBackImg from "../../../images/All Profiles Color/marine60.png";

import ReleatedImg1 from "../../../images/colors/marine_60/Charcoal.png";
import ReleatedImg2 from "../../../images/colors/marine_60/Charcoal.png";
import ReleatedImg3 from "../../../images/colors/marine_60/Charcoal.png";
import ReleatedImg4 from "../../../images/colors/marine_60/Charcoal.png";
import ReleatedImg5 from "../../../images/colors/marine_60/Charcoal.png";

import BorderSurfaceImg from "../../../images/typeimage/Marine.png"

import img3 from "../../../images/balcony/balcony_standard_aa6.jpg";
import img4 from "../../../images/balcony/balcony_standard_aa4.jpg";
import img5 from "../../../images/balcony/balcony_standard_aa3.jpg";
import img6 from "../../../images/balcony/balcony_standard_aa2.jpg";
import img8 from "../../../images/All Profiles Color/Smart Regular Coffee Brown.png";
import img9 from "../../../images/All Profiles Color/Smart Regular Chocolate.png";
import img10 from "../../../images/All Profiles Color/smartclassic.png";
import img11 from "../../../images/Denmark-min.jpg";

const useStyles = makeStyles((theme) => ({
  learnButton: {
    ...theme.typography.learnButton,
    fontSize: "0.7rem",
    height: 35,
    padding: 15,
    borderRadius: 50,
    [theme.breakpoints.down("sm")]: {
      marginBottom: "2em",
    },
  },
  background: {
    backgroundImage: `url(${background})`,
    backgroundPosition: "center",
    backgroundSize: "cover",
    backgroundAttachment: "fixed",
    backgroundRepeat: "no-repeat",
    height: "15em",
    width: "100%",
    [theme.breakpoints.down("md")]: {
      backgroundImage: `url(${background})`,
      backgroundAttachment: "inherit",
    },
  },
  backImg: {
    backgroundImage: `url(${SliderBackImg})`,
    backgroundPosition: "center",
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",
    height: "20em",
    width: "100%",
  },
  backImg1: {
    backgroundImage: `url(${img6})`,
    backgroundPosition: "center",
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",
    height: "20em",
    marginTop: ".1em",
    width: "100%",
  },
  backImg2: {
    backgroundImage: `url(${img4})`,
    backgroundPosition: "center",
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",
    height: "20em",
    marginTop: ".1em",
    width: "100%",
  },
  backImg3: {
    backgroundImage: `url(${BorderSurfaceImg})`,
    backgroundPosition: "center",
    backgroundSize: "contain",
    backgroundRepeat: "no-repeat",
    height: "20em",
    marginTop: "-1.34em",
    width: "100%",
  },
  backImg4: {
    backgroundImage: `url(${img4})`,
    backgroundPosition: "center",
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",
    height: "20em",
    marginTop: "-1.34em",
    width: "100%",
  },
  estimateButton: {
    ...theme.typography.estimate,
    borderRadius: 50,
    height: 60,
    width: 225,
    backgroundColor: theme.palette.common.orange,
    fontSize: "1.5em",
    marginRight: "5em",
    marginLeft: "2em",
    [theme.breakpoints.down("sm")]: {
      marginLeft: 0,
      marginRight: 0,
    },
  },
  margin: {
    margin: theme.spacing(1),
  },
  newButton: {
    paddingTop: ".6em",
    paddingBottom: ".6em",
    paddingRight: "1em",
    paddingLeft: "1em",
    borderRadius: 0,
    fontSize: ".3em",
    borderRadius: ".3em",
  },
  newButton2: {
    paddingTop: ".6em",
    paddingBottom: ".6em",
    paddingRight: "1.7em",
    paddingLeft: "1.7em",
    borderRadius: 0,
    fontSize: ".3em",
    borderRadius: ".3em",
  },
  newButton3: {
    paddingTop: ".7em",
    paddingBottom: ".6em",
    paddingRight: "1em",
    paddingLeft: "1.1em",
    borderRadius: 0,
    fontSize: ".3em",
    borderRadius: ".3em",
  },
  newButton4: {
    paddingTop: ".6em",
    paddingBottom: ".6em",
    paddingRight: "1.8em",
    paddingLeft: "1.8em",
    borderRadius: 0,
    fontSize: ".3em",
    borderRadius: ".3em",
  },
  newButton1: {
    height: 60,
    width: 200,
    borderRadius: 0,
    fontSize: ".3em",
    color: "white",
    backgroundColor: "#569936",
    "&:hover": {
      backgroundColor: "#000",
    },
  },
  newImg: {
    marginTop: "-2.3em",
  },
  avatar: {
    height: "3.5em",
    width: "3.5em",
    [theme.breakpoints.down("sm")]: {
      height: "3em",
      width: "3em",
      maxHeight: 300,
      maxWidth: 300,
    },
  },
  root: {
    display: "flex",
    flexWrap: "wrap",
    justifyContent: "space-around",
    overflow: "hidden",
    backgroundColor: null,
    justifyItems: "flex-end",
  },
  gridList: {
    width: 500,
    height: 450,
  },
  media: {
    height: 100,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
  },
  formControl: {
    margin: theme.spacing(1),
    minWidth: 160,
    color: "inherit",
  },
  selectEmpty: {
    marginTop: theme.spacing(2),
  },
  formControl1: {
    margin: theme.spacing(1),
    minWidth: 380,
  },
  formControl2: {
    margin: theme.spacing(1),
    minWidth: 160,
  },
  formControl3: {
    margin: theme.spacing(2),
    minWidth: 270,
  },
  formControl4: {
    margin: theme.spacing(2),
    minWidth: 560,
  },
  message: {
    border: `2px solid #808080`,
    marginTop: ".5em",
    borderRadius: ".3em",
  },
  sendButton: {
    ...theme.typography.estimate,
    borderRadius: 50,
    height: 45,
    width: 245,
    fontSize: "1rem",
    backgroundColor: theme.palette.common.orange,
    "&:hover": {
      backgroundColor: theme.palette.secondary.light,
    },
    [theme.breakpoints.down("sm")]: {
      height: 40,
      width: 225,
    },
  },
}));

const AccordionDetails = withStyles((theme) => ({
  root: {
    padding: theme.spacing(0),
  },
}))(MuiAccordionDetails);

const AccordionDetailsFilter = withStyles((theme) => ({
  root: {
    padding: theme.spacing(0),
  },
}))(MuiAccordionDetails);

const AccordionSummary = withStyles({
  root: {
    backgroundColor: "rgba(0, 0, 0, .03)",
    borderBottom: "1px solid rgba(0, 0, 0, .125)",
    marginBottom: -1,
    minHeight: 56,
    "&$expanded": {
      minHeight: 56,
    },
  },
  content: {
    "&$expanded": {
      margin: "12px 0",
    },
  },
  expanded: {},
})(MuiAccordionSummary);

const AccordionSummaryFilter = withStyles({
  root: {
    flexDirection: "column",
  },
  content: {
    marginBottom: 0,
  },
  expandIcon: {
    marginRight: 0,
    paddingTop: 0,
  },
})(MuiAccordionSummary);

const Accordion = withStyles({
  root: {
    border: "1px solid rgba(0, 0, 0, .125)",
    boxShadow: "none",
    "&:not(:last-child)": {
      borderBottom: 0,
    },
    "&:before": {
      display: "none",
    },
    "&$expanded": {
      margin: "auto",
    },
  },
  expanded: {},
})(MuiAccordion);

const AccordionFilter = withStyles({
  root: {
    border: "3px solid rgba(0, 0, 0, .125)",
    boxShadow: "none",
    "&:not(:last-child)": {
      borderBottom: 30,
    },
  },
  expanded: {},
})(MuiAccordion);

const BtnGroup = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: flex-start;
  max-height: 100%;
  padding: 0 2rem;
  margin-top: -3em;
  width: 100%;
  color: #fff;
  text-transform: uppercase;
  line-height: 1;
  font-weight: bold;

  @media screen and (max-width: 650px) {
    width: 100%;
  }
`;

const ButtonSec = styled.button`
  font-size: 0.7rem;
  padding: 1rem 3.2rem 1rem 3.2rem;
  margin-right: 0.1em;
  border-radius: 0.3em;
  background: #4563;
  color: #000;
  transition: 0.2s ease-out;

  &:hover {
    background: #7bb989;
    cursor: pointer;
    color: #000;
  }
`;
const ButtonSec1 = styled.button`
  font-size: 0.7rem;
  padding: 1rem 2.7rem 1rem 2.7rem;
  border-radius: 0.3em;
  background: #4563;
  color: #000;
  transition: 0.2s ease-out;

  &:hover {
    background: #7bb989;
    cursor: pointer;
    color: #000;
  }
`;
const ButtonSec2 = styled.button`
  font-size: 0.7rem;
  padding: 1rem 2.3rem 1rem 2.3rem;
  border-radius: 0.3em;
  background: #4563;
  color: #000;
  transition: 0.2s ease-out;

  &:hover {
    background: #7bb989;
    cursor: pointer;
    color: #000;
  }
`;
const ButtonSec3 = styled.button`
  font-size: 0.7rem;
  padding: 1rem 3.6rem 1rem 3.6rem;
  border-radius: 0.3em;
  background: #4563;
  color: #000;
  transition: 0.2s ease-out;

  &:hover {
    background: #7bb989;
    cursor: pointer;
    color: #000;
  }
`;
const SampleOrder = styled.button`
  font-size: 1rem;
  padding: 1rem 10.2rem 1rem 10.2rem;
  margin-right: 0.1em;
  background: #4563;
  color: #000;

  &:hover {
    background: #7bb989;
    cursor: pointer;
    color: #fff;
  }
`;

export default function Marine60() {
  const classes = useStyles();
  const theme = useTheme();
  const matchesSM = useMediaQuery(theme.breakpoints.down("sm"));
  const matchesMD = useMediaQuery(theme.breakpoints.down("md"));
  const matchesXS = useMediaQuery(theme.breakpoints.down("xs"));

  const [open, setOpen] = useState(false);
  const [sampleOpen, setSampleOpen] = useState(false);

  const [expanded, setExpanded] = React.useState("panel1");
  const [state, setState] = useState([]);

  const [stateForm, setStateForm] = useState({ age: "" });

  const [name, setName] = useState("");

  const [email, setEmail] = useState("");
  const [emailHelper, setEmailHelper] = useState("");

  const [phone, setPhone] = useState("");
  const [phoneHelper, setPhoneHelper] = useState("");

  const [message, setMessage] = useState("");

  const handleChange = (panel) => (event, newExpanded) => {
    setExpanded(newExpanded ? panel : false);
  };

  const handleChangeForm = (event) => {
    const name = event.target.name;
    setState({
      ...state,
      [name]: event.target.value,
    });
  };

  const onChange = (event) => {
    let valid;

    switch (event.target.id) {
      case "email":
        setEmail(event.target.value);
        valid = /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/.test(
          event.target.value
        );
        if (!valid) {
          setEmailHelper("Invalid Email");
        } else {
          setEmailHelper("");
        }
        break;
      case "phone":
        setPhone(event.target.value);
        valid = /^\(?([0-9]{3})\)?[-. ]?([0-9]{3})[-. ]?([0-9]{4})$/.test(
          event.target.value
        );
        if (!valid) {
          setPhoneHelper("Invalid Phone");
        } else {
          setPhoneHelper("");
        }
        break;
      default:
        break;
    }
  };

  const buttonContents = (
    <React.Fragment>
      Send Message
      <img src={airplane} alt="paper airplane" style={{ marginLeft: "1em" }} />
    </React.Fragment>
  );

  return (
    <Grid
      container
      alignItems="center"
      justify={matchesSM ? "center" : "space-between"}
      className={classes.background}
      direction={matchesSM ? "column" : "row"}
    >
      <div
        className={classes.root}
        style={{
          marginLeft: matchesSM ? ".3em" : matchesMD ? "6em" : "18em",
          marginRight: matchesSM ? ".5em" : "0.1em",
        }}
      >
        <Accordion
          square
          expanded={expanded === "panel1"}
          onChange={handleChange("panel1")}
        >
          <AccordionSummary
            style={{ backgroundColor: "#569936", color: "white" }}
          >
            {<AddIcon />}
            <Typography>Board & Colour</Typography>
          </AccordionSummary>

          <AccordionDetails
            square
            expanded={expanded === "panel1"}
            onChange={handleChange("panel1")}
          >
            <GridList
              cellHeight={150}
              spacing={5}
              className={classes.gridList}
              cols={3}
            >
              <GridListTile cols={1.5}>
                <Link
                  style={{ textDecoration: "none", color: "inherit" }}
                  to="/house"
                >
                  <Button
                    variant="contained"
                    className={classes.newButton2}
                  >
                    Marine 60
                  </Button>
                </Link>
              </GridListTile>
              <GridListTile cols={1.5}>
                <Link
                  style={{ textDecoration: "none", color: "inherit" }}
                  to="/garden"
                >
                  <Button
                    variant="contained"
                    style={{ marginTop: "-.4em" }}
                    className={classes.newButton3}
                  >
                    Marine 40
                  </Button>
                </Link>
              </GridListTile>
              <GridListTile cols={1.5}  style={{ marginTop: "-1.4em" }}>
                <Link
                  style={{ textDecoration: "none", color: "inherit" }}
                  to="/garden"
                >
                  <Button
                    variant="contained"
                    className={classes.newButton3}
                  >
                   Marine Art
                  </Button>
                </Link>
              </GridListTile>
              <GridListTile cols={1.5}  style={{ marginTop: "-1.4em" }}>
                <Link
                  style={{ textDecoration: "none", color: "inherit" }}
                  to="/garden"
                >
                  <Button
                    variant="contained"
                    className={classes.newButton3}
                  >
                   Marine Cap
                  </Button>
                </Link>
              </GridListTile>
              <GridListTile cols={1.5}  style={{ marginTop: "-1.4em" }}>
                <Link
                  style={{ textDecoration: "none", color: "inherit" }}
                  to="/garden"
                >
                  <Button
                    variant="contained"
                    className={classes.newButton3}
                  >
                   Marine Jumbo
                  </Button>
                </Link>
              </GridListTile>
         


              <GridListTile
                className={classes.backImg}
                onClick={() => setOpen(true)}
                style={{ marginTop: "-1.25em" }}
                cols={3}
              >
                <PlayCircleOutlineIcon
                  style={{ color: "white", width: "20em", height: "6em" }}
                />
              </GridListTile>
              <GridListTile
                className={classes.backImg1}
                style={{ justifyContent: "center" }}
                cols={1.5}
              >
                <Typography
                  style={{ marginTop: "4.5em", color: "white" }}
                  variant="h5"
                >
                  145mm Classic
                </Typography>
              </GridListTile>
              <GridListTile
                className={classes.backImg2}
                style={{ justifyContent: "center" }}
                cols={1.5}
              >
                <Typography
                  style={{ marginTop: "4.5em", color: "white" }}
                  variant="h5"
                >
                  145mm Classic
                </Typography>
              </GridListTile>
              <GridListTile
                style={{ marginTop: ".4em", marginLeft: ".4em" }}
                cols={0.5}
              >
                <Avatar
                  alt="releated images"
                  src={ReleatedImg1}
                  className={classes.avatar}
                />
              </GridListTile>
              <GridListTile style={{ marginTop: ".4em" }} cols={0.5}>
                <Avatar
                  alt="releated images"
                  src={ReleatedImg2}
                  className={classes.avatar}
                />
              </GridListTile>
              <GridListTile style={{ marginTop: ".4em" }} cols={0.5}>
                <Avatar
                  alt="releated images"
                  src={ReleatedImg3}
                  className={classes.avatar}
                />
              </GridListTile>
              <GridListTile style={{ marginTop: ".4em" }} cols={0.5}>
                <Avatar
                  alt="releated images"
                  src={ReleatedImg4}
                  className={classes.avatar}
                />
              </GridListTile>
              <GridListTile style={{ marginTop: ".4em" }} cols={0.5}>
                <Avatar
                  alt="releated images"
                  src={ReleatedImg5}
                  className={classes.avatar}
                />
              </GridListTile>
              <GridListTile style={{ marginTop: "-1.4em" }} cols={3}>
                <Typography variant="h6">Nature Brown</Typography>
              </GridListTile>
              <GridListTile style={{ marginTop: "-1.9em" }} cols={3}>
                <Card style={{ backgroundColor: "Grey" }}>
                  <CardContent>
                    <Typography variant="h6">Border Surface</Typography>
                  </CardContent>
                </Card>
                <Divider />
              </GridListTile>
              <GridListTile className={classes.backImg3} cols={3}>
               
              </GridListTile>
              <GridListTile cols={3}>
                <SampleOrder onClick={() => setSampleOpen(true)}>
                  Sample Order
                </SampleOrder>
              </GridListTile>
            </GridList>
          </AccordionDetails>
        </Accordion>
        <GridList cellHeight={210} cols={3}>
          <GridListTile cols={1.5}>
            <Button
              variant="contained"
              component={Link}
              to="/decking"
              className={classes.newButton1}
            >
              Back
            </Button>
          </GridListTile>
          <GridListTile cols={1.5}>
            <Button
              variant="contained"
              component={Link}
              to="/form"
              className={classes.newButton1}
            >
              Next
            </Button>
          </GridListTile>
        </GridList>
      </div>

      {/* Gallery Slider Popup */}
      <Dialog
        style={{ zIndex: 1302 }}
        open={open}
        onClose={() => setOpen(false)}
        PaperProps={{
          style: {
            paddingTop: matchesXS ? "1em" : "3em",
            paddingBottom: matchesXS ? "1em" : "3em",
            paddingLeft: matchesXS
              ? 0
              : matchesSM
              ? "3em"
              : matchesMD
              ? "10em"
              : "7em",
            paddingRight: matchesXS
              ? 0
              : matchesSM
              ? "3em"
              : matchesMD
              ? "10em"
              : "7em",
          },
        }}
      >
        <Grid item style={{ marginBottom: "2em", fontWeight: 400 }}>
          <Typography variant="h2" align="center" gutterBottom>
            Gallery
          </Typography>
        </Grid>
        <Banner />
        <Grid item container style={{ marginTop: "2em" }} alignItems="center">
          <Grid item style={{ marginLeft: "9em" }}>
            <Button
              variant="container"
              align="center"
              style={{
                fontWeight: 300,
                color: "white",
                backgroundColor: "red",
              }}
              onClick={() => setOpen(false)}
            >
              Cancel
            </Button>
          </Grid>
        </Grid>
      </Dialog>

      {/* Sample Popup  */}
      <Dialog
        fullWidth
        style={{ zIndex: 1302 }}
        open={sampleOpen}
        onClose={() => setSampleOpen(false)}
        PaperProps={{
          style: {
            paddingTop: matchesXS ? "1em" : 0,
            paddingBottom: matchesXS ? "1em" : 0,
            paddingLeft: matchesXS
              ? 0
              : matchesSM
              ? "3em"
              : matchesMD
              ? "5em"
              : 0,
            paddingRight: matchesXS
              ? 0
              : matchesSM
              ? "3em"
              : matchesMD
              ? "5em"
              : 0,
            minWidth: "1400px",
            minHeight: "200px",
          },
        }}
      >
        <AppBar style={{ backgroundColor: "#369956" }} position="static">
          <Toolbar>
            <IconButton
              edge="start"
              className={classes.menuButton}
              color="inherit"
              aria-label="menu"
            ></IconButton>
            <Typography variant="h6" className={classes.title}>
              Sample Order Form
            </Typography>
            <Button onClick={() => setSampleOpen(false)} color="inherit">
              cancel
            </Button>
          </Toolbar>
        </AppBar>
        <img src={img11} alt="images" style={{ marginBottom: "4em" }} />
        <Grid item style={{ marginBottom: "2em", fontWeight: 400 }}>
          <Typography variant="h3" align="center" gutterBottom>
            <span style={{ fontWeight: "bold" }}>Sample Order Form</span>
          </Typography>
        </Grid>
        <Grid
          item
          style={{
            marginBottom: "2em",
            padding: ".5em 14em 1em 14em",
            fontWeight: 400,
          }}
        >
          <Typography paragraph align="center" gutterBottom>
            We will gladly send you samples of our products free of charge
            according to your wishes! Select which products in which colour you
            would like to receive in the drop-down menus. You can order up to 3
            products per category. You can open a preview of the samples by
            clicking on the red "i". You can find more information about the
            products on our website in the "Product world" section.
          </Typography>
        </Grid>
        <Grid
          container
          direction="column"
          style={{ backgroundColor: "#F8F8FF", padding: "4em 4em 9em 4em" }}
        >
          <Grid item>
            <Grid container direction="column">
              <Typography variant="h5">Terrace pattern</Typography>
              <Typography paragraph>Please select up to 3 patterns</Typography>
            </Grid>
          </Grid>
          <Grid item>
            <Grid conatiner direction="row">
              <Grid item>
                <FormControl variant="outlined" className={classes.formControl}>
                  <InputLabel htmlFor="outlined-age-native-simple">
                    Classic
                  </InputLabel>
                  <Select
                    native
                    value={state.age}
                    onChange={handleChangeForm}
                    label="Classic"
                    inputProps={{
                      name: "age",
                      id: "outlined-age-native-simple",
                    }}
                  >
                    <option aria-label="None" value="" />
                    <option value={10}>21x45mm varia brun</option>
                    <option value={20}>24x55mm varia brun</option>
                    <option value={30}>30x65mm varia brun</option>
                  </Select>
                </FormControl>
                <FormControl variant="outlined" className={classes.formControl}>
                  <InputLabel htmlFor="outlined-age-native-simple">
                    Classic Varia
                  </InputLabel>
                  <Select
                    native
                    value={state.age}
                    onChange={handleChangeForm}
                    label="Classic"
                    inputProps={{
                      name: "age",
                      id: "outlined-age-native-simple",
                    }}
                  >
                    <option aria-label="None" value="" />
                    <option value={10}>Ten</option>
                    <option value={20}>Twenty</option>
                    <option value={30}>Thirty</option>
                  </Select>
                </FormControl>
                <FormControl variant="outlined" className={classes.formControl}>
                  <InputLabel htmlFor="outlined-age-native-simple">
                    Premium
                  </InputLabel>
                  <Select
                    native
                    value={state.age}
                    onChange={handleChangeForm}
                    label="Classic"
                    inputProps={{
                      name: "age",
                      id: "outlined-age-native-simple",
                    }}
                  >
                    <option aria-label="None" value="" />
                    <option value={10}>Ten</option>
                    <option value={20}>Twenty</option>
                    <option value={30}>Thirty</option>
                  </Select>
                </FormControl>
                <FormControl variant="outlined" className={classes.formControl}>
                  <InputLabel htmlFor="outlined-age-native-simple">
                    Dynum
                  </InputLabel>
                  <Select
                    native
                    value={state.age}
                    onChange={handleChangeForm}
                    label="Classic"
                    inputProps={{
                      name: "age",
                      id: "outlined-age-native-simple",
                    }}
                  >
                    <option aria-label="None" value="" />
                    <option value={10}>Ten</option>
                    <option value={20}>Twenty</option>
                    <option value={30}>Thirty</option>
                  </Select>
                </FormControl>
                <FormControl variant="outlined" className={classes.formControl}>
                  <InputLabel htmlFor="outlined-age-native-simple">
                    Signum
                  </InputLabel>
                  <Select
                    native
                    value={state.age}
                    onChange={handleChangeForm}
                    label="Classic"
                    inputProps={{
                      name: "age",
                      id: "outlined-age-native-simple",
                    }}
                  >
                    <option aria-label="None" value="" />
                    <option value={10}>Ten</option>
                    <option value={20}>Twenty</option>
                    <option value={30}>Thirty</option>
                  </Select>
                </FormControl>
                <FormControl variant="outlined" className={classes.formControl}>
                  <InputLabel htmlFor="outlined-age-native-simple">
                    Delta
                  </InputLabel>
                  <Select
                    native
                    value={state.age}
                    onChange={handleChangeForm}
                    label="Classic"
                    inputProps={{
                      name: "age",
                      id: "outlined-age-native-simple",
                    }}
                  >
                    <option aria-label="None" value="" />
                    <option value={10}>Ten</option>
                    <option value={20}>Twenty</option>
                    <option value={30}>Thirty</option>
                  </Select>
                </FormControl>
                <FormControl variant="outlined" className={classes.formControl}>
                  <InputLabel htmlFor="outlined-age-native-simple">
                    Premium Plus
                  </InputLabel>
                  <Select
                    native
                    value={state.age}
                    onChange={handleChangeForm}
                    label="Classic"
                    inputProps={{
                      name: "age",
                      id: "outlined-age-native-simple",
                    }}
                  >
                    <option aria-label="None" value="" />
                    <option value={10}>Ten</option>
                    <option value={20}>Twenty</option>
                    <option value={30}>Thirty</option>
                  </Select>
                </FormControl>
              </Grid>
            </Grid>
          </Grid>
          <Grid
            container
            direction="column"
            style={{ padding: "4em 4em .1em 0" }}
          >
            <Typography variant="h5">Facade patterns</Typography>
            <Typography paragraph>
              Only a limited selection of façade patterns is available. The full
              range includes all panel widths in all colours respectively.
              Please select up to 3 patterns.
            </Typography>
          </Grid>
          <Grid item>
            <Grid container direction="row">
              <Grid item>
                <FormControl
                  variant="outlined"
                  className={classes.formControl1}
                >
                  <InputLabel htmlFor="outlined-age-native-simple">
                    Delta
                  </InputLabel>
                  <Select
                    native
                    value={state.age}
                    onChange={handleChangeForm}
                    label="Classic"
                    inputProps={{
                      name: "age",
                      id: "outlined-age-native-simple",
                    }}
                  >
                    <option aria-label="None" value="" />
                    <option value={10}>Ten</option>
                    <option value={20}>Twenty</option>
                    <option value={30}>Thirty</option>
                  </Select>
                </FormControl>
                <FormControl
                  variant="outlined"
                  className={classes.formControl1}
                >
                  <InputLabel htmlFor="outlined-age-native-simple">
                    Delta
                  </InputLabel>
                  <Select
                    native
                    value={state.age}
                    onChange={handleChangeForm}
                    label="Classic"
                    inputProps={{
                      name: "age",
                      id: "outlined-age-native-simple",
                    }}
                  >
                    <option aria-label="None" value="" />
                    <option value={10}>Ten</option>
                    <option value={20}>Twenty</option>
                    <option value={30}>Thirty</option>
                  </Select>
                </FormControl>
                <FormControl
                  variant="outlined"
                  className={classes.formControl1}
                >
                  <InputLabel htmlFor="outlined-age-native-simple">
                    Delta
                  </InputLabel>
                  <Select
                    native
                    value={state.age}
                    onChange={handleChangeForm}
                    label="Classic"
                    inputProps={{
                      name: "age",
                      id: "outlined-age-native-simple",
                    }}
                  >
                    <option aria-label="None" value="" />
                    <option value={10}>Ten</option>
                    <option value={20}>Twenty</option>
                    <option value={30}>Thirty</option>
                  </Select>
                </FormControl>
              </Grid>
            </Grid>
          </Grid>
          <Grid
            container
            direction="column"
            style={{ padding: "4em 4em .1em 0" }}
          >
            <Typography variant="h5">
              Fence and construction timber pattern
            </Typography>
            <Typography paragraph>Please select up to 3 patterns.</Typography>
          </Grid>
          <Grid item>
            <Grid container direction="row" style={{ paddingBottom: "4em" }}>
              <Grid item>
                <FormControl
                  variant="outlined"
                  className={classes.formControl2}
                >
                  <InputLabel htmlFor="outlined-age-native-simple">
                    Delta
                  </InputLabel>
                  <Select
                    native
                    value={state.age}
                    onChange={handleChangeForm}
                    label="Classic"
                    inputProps={{
                      name: "age",
                      id: "outlined-age-native-simple",
                    }}
                  >
                    <option aria-label="None" value="" />
                    <option value={10}>Ten</option>
                    <option value={20}>Twenty</option>
                    <option value={30}>Thirty</option>
                  </Select>
                </FormControl>
                <FormControl
                  variant="outlined"
                  className={classes.formControl2}
                >
                  <InputLabel htmlFor="outlined-age-native-simple">
                    Delta
                  </InputLabel>
                  <Select
                    native
                    value={state.age}
                    onChange={handleChangeForm}
                    label="Classic"
                    inputProps={{
                      name: "age",
                      id: "outlined-age-native-simple",
                    }}
                  >
                    <option aria-label="None" value="" />
                    <option value={10}>Ten</option>
                    <option value={20}>Twenty</option>
                    <option value={30}>Thirty</option>
                  </Select>
                </FormControl>
                <FormControl
                  variant="outlined"
                  className={classes.formControl2}
                >
                  <InputLabel htmlFor="outlined-age-native-simple">
                    Delta
                  </InputLabel>
                  <Select
                    native
                    value={state.age}
                    onChange={handleChangeForm}
                    label="Classic"
                    inputProps={{
                      name: "age",
                      id: "outlined-age-native-simple",
                    }}
                  >
                    <option aria-label="None" value="" />
                    <option value={10}>Ten</option>
                    <option value={20}>Twenty</option>
                    <option value={30}>Thirty</option>
                  </Select>
                </FormControl>
                <FormControl
                  variant="outlined"
                  className={classes.formControl2}
                >
                  <InputLabel htmlFor="outlined-age-native-simple">
                    Delta
                  </InputLabel>
                  <Select
                    native
                    value={state.age}
                    onChange={handleChangeForm}
                    label="Classic"
                    inputProps={{
                      name: "age",
                      id: "outlined-age-native-simple",
                    }}
                  >
                    <option aria-label="None" value="" />
                    <option value={10}>Ten</option>
                    <option value={20}>Twenty</option>
                    <option value={30}>Thirty</option>
                  </Select>
                </FormControl>
                <FormControl
                  variant="outlined"
                  className={classes.formControl2}
                >
                  <InputLabel htmlFor="outlined-age-native-simple">
                    Delta
                  </InputLabel>
                  <Select
                    native
                    value={state.age}
                    onChange={handleChangeForm}
                    label="Classic"
                    inputProps={{
                      name: "age",
                      id: "outlined-age-native-simple",
                    }}
                  >
                    <option aria-label="None" value="" />
                    <option value={10}>Ten</option>
                    <option value={20}>Twenty</option>
                    <option value={30}>Thirty</option>
                  </Select>
                </FormControl>
                <FormControl
                  variant="outlined"
                  className={classes.formControl2}
                >
                  <InputLabel htmlFor="outlined-age-native-simple">
                    Delta
                  </InputLabel>
                  <Select
                    native
                    value={state.age}
                    onChange={handleChangeForm}
                    label="Classic"
                    inputProps={{
                      name: "age",
                      id: "outlined-age-native-simple",
                    }}
                  >
                    <option aria-label="None" value="" />
                    <option value={10}>Ten</option>
                    <option value={20}>Twenty</option>
                    <option value={30}>Thirty</option>
                  </Select>
                </FormControl>
              </Grid>
            </Grid>
            <Divider />
          </Grid>
          <Grid container direction="row" style={{ padding: "4em 4em .1em 0" }}>
            <Typography variant="h5">My Address Detail</Typography>
          </Grid>
          <Grid item direction="column">
            <Grid container direction="row">
              <Grid item className={classes.formControl3}>
                <TextField
                  style={{ marginBottom: "0.3em" }}
                  fullWidth
                  label="Name"
                  id="name"
                  value={name}
                  onChange={(event) => setName(event.target.value)}
                />
              </Grid>
              <Grid item className={classes.formControl3}>
                <TextField
                  helperText={emailHelper}
                  error={emailHelper.length !== 0}
                  style={{ marginBottom: "0.3em" }}
                  fullWidth
                  label="Email"
                  id="email"
                  value={email}
                  onChange={onChange}
                />
              </Grid>
            </Grid>
            <Grid container direction="row">
              <Grid item className={classes.formControl3}>
                <TextField
                  helperText={phoneHelper}
                  error={phoneHelper.length !== 0}
                  style={{ marginBottom: "0.3em" }}
                  fullWidth
                  label="Phone"
                  id="phone"
                  value={phone}
                  onChange={onChange}
                />
              </Grid>
              <Grid item className={classes.formControl3}>
                <TextField
                  helperText={emailHelper}
                  error={emailHelper.length !== 0}
                  style={{ marginBottom: "0.3em" }}
                  fullWidth
                  label="Email"
                  id="email"
                  value={email}
                  onChange={onChange}
                />
              </Grid>
            </Grid>
            <Grid container direction="row">
              <Grid item className={classes.formControl4}>
                <TextField
                  fullWidth
                  label="Message"
                  InputProps={{ disableUnderline: true }}
                  id="message"
                  className={classes.message}
                  multiline
                  rows={4}
                  value={message}
                  onChange={(event) => setMessage(event.target.value)}
                />
              </Grid>
            </Grid>
            <Grid container direction="row">
              <Grid item className={classes.formControl3}>
                <Button
                  variant="contained"
                  className={classes.sendButton}
                  disabled={
                    name.length === 0 ||
                    message.length === 0 ||
                    email.length === 0 ||
                    phone.length === 0
                  }
                  onClick={() => setOpen(true)}
                >
                  {buttonContents}
                </Button>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </Dialog>
    </Grid>
  );
}
