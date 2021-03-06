import { useState } from "react";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import CssBaseline from "@mui/material/CssBaseline";
import TextField from "@mui/material/TextField";
import { Link } from "react-router-dom";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import { createTheme, ThemeProvider } from "@mui/material/styles";

const theme = createTheme();

export default function EmailVerification() {
  const [invalid, setInvalid] = useState({
    email: false,
  });
  const [disableSubmit, setDisableSubmit] = useState(false);
  const [errorMessage, setErrorMessage] = useState({
    email: "",
  });

  const handleSubmit = (event) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    // set inValidMail true incase of error
    console.log({
      email: data.get("email"),
    });
  };

  return (
    <ThemeProvider theme={theme}>
      <Container component="main" maxWidth="xs">
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
          {/* {invalidEmail && (
            <h4
              style={{
                color: "red",
                textAlign: "center",
              }}
            >
              Entered mail is not valid!! Try again!!
            </h4>
          )} */}
          <Typography component="h1" variant="h5">
            Enter Your Email
          </Typography>
          <Box
            component="form"
            onSubmit={handleSubmit}
            noValidate
            sx={{ mt: 1 }}
          >
            <TextField
              margin="normal"
              required
              fullWidth
              id="email"
              label="Email Address"
              name="email"
              autoComplete="email"
              helperText={errorMessage.email}
              error={invalid.email}
              autoFocus
            />
            <Button
              type="submit"
              fullWidth
              variant="contained"
              disabled={disableSubmit}
              sx={{ mt: 3, mb: 2 }}
            >
              Verify Email
            </Button>
            <Grid container justifyContent="center">
              <Grid item>
                <Link
                  to="/login"
                  style={{
                    textDecoration: "none",
                    cursor: "pointer",
                    color: "#0099ff",
                  }}
                >
                  {"Already have an account? Sign in"}
                </Link>
              </Grid>
            </Grid>
          </Box>
        </Box>
      </Container>
    </ThemeProvider>
  );
}
