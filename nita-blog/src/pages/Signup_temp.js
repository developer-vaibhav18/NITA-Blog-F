import Avatar from "@mui/material/Avatar";
import CssBaseline from "@mui/material/CssBaseline";
import TextField from "@mui/material/TextField";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import { useState } from "react";
import { makeStyles } from "@mui/styles";
import * as React from "react";
import { styled } from "@mui/material/styles";
import Button from "@mui/material/Button";
import IconButton from "@mui/material/IconButton";
import PhotoCamera from "@mui/icons-material/PhotoCamera";
import Stack from "@mui/material/Stack";

const Input = styled("input")({
  display: "none",
});

// function UploadButtons() {
//   return (

//   );
// }

const theme = createTheme();

export default function SignUp() {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [password, setPassword] = useState("");
  const [branch, setBranch] = useState("");
  const [startYear, setStartYear] = useState("");
  const [endYear, setEndYear] = useState("");
  const [about, setAbout] = useState("");
  const [profile, setProfile] = useState(null);

  var years = [];
  for (var i = 1950; i <= 2022; i++) {
    years.push(i);
  }

  const handleSubmit = (event) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    console.log(data);
    console.log({
      password: data.get("password"),
    });
  };

  // var onImageChange = () => {
  //   // setProfile({ profile : event.target.files[0]});
  // };

  var handleImageUpload = function (file) {
    // files = event.target.files[0];
    return new Promise(function (resolve, reject) {
      var formData = new FormData();
      formData.append("image", file);
      fetch(
        "https://api.imgbb.com/1/upload?key=dcdbaa0a689c529dd200cfe147cdef01",
        {
          method: "POST",
          body: formData,
        }
      )
        .then(function (response) {
          console.log("success1");
          return response.json();
        })
        .then(function (result) {
          // console.log(result);
          console.log("success2");
          return resolve(result.data.url);
        })
        .catch(function () {
          console.log("error");
          return reject(new Error("Upload failed"));
        });
    });
  };

  const useStyle = makeStyles({
    container: {
      "@media (min-width: 780px)": {
        maxWidth: "40%",
        marginLeft: "auto",
        marginRight: "auto",
      },
    },
  });

  const styles = useStyle("");

  return (
    <ThemeProvider theme={theme}>
      <Container component="main" maxWidth="xs" className={styles.container}>
        <CssBaseline />
        <Box
          sx={{
            marginTop: 8,
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <Avatar sx={{ m: 1, bgcolor: "secondary.main" }}>
            <LockOutlinedIcon />
          </Avatar>
          <Typography component="h1" variant="h5">
            Complete your account setup
          </Typography>
          <Box
            component="form"
            noValidate
            onSubmit={handleSubmit}
            sx={{ mt: 3 }}
          >
            <Grid container spacing={2}>
              <Grid item xs={12} sm={6}>
                <TextField
                  autoComplete="given-name"
                  name="firstName"
                  required
                  fullWidth
                  id="firstName"
                  label="First Name"
                  autoFocus
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField
                  required
                  fullWidth
                  id="lastName"
                  label="Last Name"
                  name="lastName"
                  autoComplete="family-name"
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  required
                  fullWidth
                  name="password"
                  label="Password"
                  type="password"
                  id="password"
                  autoComplete="new-password"
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <FormControl fullWidth>
                  <InputLabel id="demo-simple-select-label">
                    Start Year
                  </InputLabel>
                  <Select
                    labelId="demo-simple-select-label"
                    id="demo-simple-select"
                    // value={startYear}
                    label="Start Year"
                    // onChange={setStartYear}
                  >
                    {years.map((year) => (
                      <MenuItem value={year} key={year}>
                        {year}
                      </MenuItem>
                    ))}
                  </Select>
                </FormControl>
              </Grid>

              <Grid item xs={12} sm={6}>
                <FormControl fullWidth>
                  <InputLabel id="demo-simple-select-label">
                    End Year
                  </InputLabel>
                  <Select
                    labelId="demo-simple-select-label"
                    id="demo-simple-select"
                    // value={endYear}
                    label="End Year"
                    // onChange={setEndYear}
                  >
                    {years.map((year) => (
                      <MenuItem value={year} key={year}>
                        {year}
                      </MenuItem>
                    ))}
                  </Select>
                </FormControl>
              </Grid>
              <Grid item xs={12}>
                <TextField
                  required
                  fullWidth
                  name="branch"
                  label="Your Branch"
                  id="branch"
                  autoComplete="ECE"
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  fullWidth
                  name="about"
                  label="About Yourself"
                  id="about"
                  multiline
                  rows={2}
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  fullWidth
                  name="linkedin"
                  label="Linkedin"
                  id="linkedin"
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  fullWidth
                  name="twitter"
                  label="Twitter"
                  id="twitter"
                />
              </Grid>
            </Grid>
            <Stack
              direction="row"
              alignItems="center"
              spacing={2}
              style={{
                padding: "15px",
                marginLeft: "33%",
              }}
            >
              <label>Profile Picture: </label>
              <label htmlFor="contained-button-file">
                <Input
                  accept="image/*"
                  id="contained-button-file"
                  type="file"
                  // onChange={onImageChange}
                />
                <Button
                  variant="contained"
                  component="span"
                  onSubmit={handleImageUpload}
                >
                  Upload
                </Button>
              </label>
            </Stack>
            <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
            >
              SUBMIT
            </Button>
            <Grid container justifyContent="center">
              <Grid item></Grid>
            </Grid>
          </Box>
        </Box>
      </Container>
    </ThemeProvider>
  );
}
