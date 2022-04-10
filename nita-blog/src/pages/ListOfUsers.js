import { Paper } from "@mui/material";
import Grid from "@mui/material/Grid";
import { makeStyles } from "@mui/styles";
import * as React from "react";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import Divider from "@mui/material/Divider";
import ListItemText from "@mui/material/ListItemText";
import ListItemAvatar from "@mui/material/ListItemAvatar";
import Avatar from "@mui/material/Avatar";
import Typography from "@mui/material/Typography";
import Link from "@mui/material/Link";
import InputBase from "@mui/material/InputBase";
import SearchIcon from "@mui/icons-material/Search";
import IconButton from "@mui/material/IconButton";

const useStyles = makeStyles({
  container: {
    padding: "5%",
  },
});

const ListOfUsers = () => {
  const classes = useStyles();
  return (
    <Grid container alignItems="center" direction="column">
      <Grid item xs={12} sm={12} className={classes.container}>
        <Paper
          component="form"
          sx={{
            p: "2px 4px",
            display: "flex",
            alignItems: "center",
            width: 700,
            mb: 2,
          }}
        >
          <InputBase sx={{ ml: 1, flex: 1 }} placeholder="Search Users" />
          <IconButton type="submit" sx={{ p: "10px" }} aria-label="search">
            <SearchIcon />
          </IconButton>
        </Paper>

        <Paper className={classes.container}>
          <List
            sx={{ width: "100%", maxWidth: 700, bgcolor: "background.paper" }}
          >
            <Link href="#" underline="none">
              <ListItem alignItems="flex-start">
                <ListItemAvatar>
                  <Avatar alt="Remy Sharp" src="vk.jpg" />
                </ListItemAvatar>
                <ListItemText
                  // name in primary
                  primary="Atul Pandey"
                  secondary={
                    <>
                      <Typography
                        sx={{ display: "inline" }}
                        component="span"
                        variant="body2"
                        color="text.primary"
                      >
                        {/* Batch/Branch */}
                        2019-23, CSE
                      </Typography>
                      {/* {" — I'll be in your neighborhood doing errands this…"} */}
                    </>
                  }
                />
              </ListItem>
            </Link>
            <Divider variant="inset" component="li" />
            <ListItem alignItems="flex-start">
              <ListItemAvatar>
                <Avatar alt="Travis Howard" src="vk.jpg" />
              </ListItemAvatar>
              <ListItemText
                primary="Summer BBQ"
                secondary={
                  <React.Fragment>
                    <Typography
                      sx={{ display: "inline" }}
                      component="span"
                      variant="body2"
                      color="text.primary"
                    >
                      to Scott, Alex, Jennifer
                    </Typography>
                    {" — Wish I could come, but I'm out of town this…"}
                  </React.Fragment>
                }
              />
            </ListItem>
            <Divider variant="inset" component="li" />
            <ListItem alignItems="flex-start">
              <ListItemAvatar>
                <Avatar alt="Cindy Baker" src="vk.jpg" />
              </ListItemAvatar>
              <ListItemText
                primary="Oui Oui"
                secondary={
                  <React.Fragment>
                    <Typography
                      sx={{ display: "inline" }}
                      component="span"
                      variant="body2"
                      color="text.primary"
                    >
                      Sandra Adams
                    </Typography>
                    {" — Do you have Paris recommendations? Have you ever…"}
                  </React.Fragment>
                }
              />
            </ListItem>
          </List>
        </Paper>
      </Grid>{" "}
    </Grid>
  );
};

// export default function ListOfUsers() {
//   return (

//   );
// }
export default ListOfUsers;
