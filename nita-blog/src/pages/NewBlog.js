import { useState } from "react";
import { RichTextEditor } from "@mantine/rte";
import { makeStyles } from "@mui/styles";
import { TextInput } from "@mantine/core";
import Button from "@mui/material/Button";
import { InputLabel, Paper } from "@mui/material";
// import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";

const useStyles = makeStyles({
  editorContainer: {
    padding: "5%",
    marginLeft: "1%",
    marginRight: "1%",
    marginTop: "50px",
  },
  TextField: {
    marginBottom: "15px",
  },
});

var handleImageUpload = function (file) {
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
        return response.json();
      })
      .then(function (result) {
        // console.log(result);
        return resolve(result.data.url);
      })
      .catch(function () {
        // console.log("error");
        return reject(new Error("Upload failed"));
      });
  });
};

export default function NewBlog() {
  const classes = useStyles();
  const [value, onChange] = useState("");
  const [valueTitle, onChangeTitle] = useState("");
  // const valueTitle = "";

  const handleSubmit = (event) => {
    event.preventDefault();
    // const data = new FormData(event.currentTarget);
    // eslint-disable-next-line no-console
    console.log(value, valueTitle);
  };

  return (
    <Grid container alignItems="center" direction="column">
      <Grid item xs={12} sm={12}>
        <Paper className={classes.editorContainer} onSubmit={handleSubmit}>
          <div>
            <InputLabel required>Enter Title:</InputLabel>
            <TextInput
              className={classes.TextField}
              placeholder="Title"
              value={valueTitle}
              onChange={(e) => onChangeTitle(e.target.value)}
              required
            />
            <InputLabel required>Write Blog:</InputLabel>
            <RichTextEditor
              value={value}
              onChange={onChange}
              onImageUpload={handleImageUpload}
              sticky={true}
              // labels={"Start Typing"}
            />
          </div>
          <Grid item sx={{ textAlign: "right" }}>
            {/* <Box onSubmit={handleSubmit}> */}
            <Button
              type="submit"
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
              onClick={handleSubmit}
            >
              Post
            </Button>
            {/* </Box> */}
          </Grid>
        </Paper>
      </Grid>
    </Grid>
  );
}
