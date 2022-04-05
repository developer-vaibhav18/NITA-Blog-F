import { makeStyles } from "@mui/styles";
import TwitterIcon from "@mui/icons-material/Twitter";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import MailIcon from "@mui/icons-material/Mail";
const useStyles = makeStyles({
  profilepc: {
    width: "100px",
    height: "100px",
    display: "block",
    borderRadius: "50%",
  },
  picdiv: {
    display: "flex",
    justifyContent: "center",
  },
  container: {
    border: "red 2px solid",
    marginLeft: "10px",
    marginRight: "10px",
  },
  info: {
    "& p": {
      textAlign: "center",
    },
  },
  socialMedia: {
    "& p": {
      textAlign: "center",
    },
    display: "flex",
    marginTop: "10px",
    alignItems: "center",
  },
  about: {
    marginTop: "100px",
    "& p": {
      textAlign: "center",
    },
  },
  leftHR: {
    width: "48.5%",
    backgroundColor: "blue",
    height: "2px",
  },
  rightHR: {
    width: "48.5%",
    textAlign: "right",
    backgroundColor: "blue",
    height: "2px",
  },
  socialIcons: {
    "& p": {
      paddingLeft: "5px",
    },
    display: "flex",
    justifyContent: "center",
  },
});

const Profile = () => {
  const classes = useStyles();
  return (
    <div className={classes.container}>
      <div className={classes.picdiv}>
        <img className={classes.profilepc} src="vk.jpg" alt="image here" />
      </div>
      <div className={classes.info}>
        <p>Vaibhav Kumar Sinha</p>
        <p>Civil Engineering</p>
        <p>2019-2023</p>
      </div>
      <div className={classes.about}>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi,
          nesciunt. Lorem ipsum dolor sit amet consectetur adipisicing elit.
          Quos, amet.
        </p>
      </div>
      <div className={classes.socialMedia}>
        <p className={classes.leftHR}></p>
        <p className={classes.contact}>CONTACT</p>
        <p className={classes.rightHR}></p>
      </div>
      <div className={classes.socialIcons}>
        <p>
          <LinkedInIcon />
        </p>
        <p>
          <MailIcon />
        </p>
        <p>
          <TwitterIcon />
        </p>
      </div>
    </div>
  );
};

export default Profile;

// name, batch, branch, about, profile picture, socialmedia(linkedin, twitter, others)
