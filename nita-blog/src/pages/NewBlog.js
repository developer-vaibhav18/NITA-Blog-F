import { useState } from "react";
import { RichTextEditor } from "@mantine/rte";
import { makeStyles } from "@mui/styles";
import { TextInput } from "@mantine/core";
import Button from "@mui/material/Button";
import { InputLabel, Paper } from "@mui/material";
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

  gridContainer: {
    "@media (min-width: 780px)": {
      maxWidth: "65%",
      marginLeft: "auto",
      marginRight: "auto",
    },
  },
});

var handleImageUpload = function (file) {
  // console.log(file);
  return new Promise(function (resolve, reject) {
    // console.log(file);
    var formData = new FormData();
    formData.append("image", file);
    // console.log("aand");
    fetch(
      "https://api.imgbb.com/1/upload?key=dcdbaa0a689c529dd200cfe147cdef01",
      {
        method: "POST",
        body: formData,
      }
    )
      .then(function (response) {
        console.log("success");
        return response.json();
      })
      .then(function (result) {
        // console.log(result);
        return resolve(result.data.url);
      })
      .catch(function () {
        console.log("error");
        return reject(new Error("Upload failed"));
      });
  });
};

export default function NewBlog() {
  const classes = useStyles();
  const [value, onChange] = useState("");
  const [valueTitle, onChangeTitle] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(value, valueTitle);
  };

  return (
    <Grid
      container
      alignItems="center"
      direction="column"
      className={classes.gridContainer}
    >
      <Grid item xs={12} sm={12}>
        <Paper className={classes.editorContainer}>
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
            {/* <div className={classes.textArea}> */}
            <RichTextEditor
              value={value}
              onChange={onChange}
              onImageUpload={handleImageUpload}
              sticky={true}
              // labels={"Start Typing"}
            />
            {/* </div> */}
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
