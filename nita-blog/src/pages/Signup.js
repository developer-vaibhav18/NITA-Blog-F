import Joi from "joi";
import { useForm, joiResolver } from "@mantine/form";
import {
  NumberInput,
  TextInput,
  Button,
  Box,
  Group,
  Textarea,
  PasswordInput,
} from "@mantine/core";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import { useState } from "react";
import ImageUploading from "react-images-uploading";

const schema = Joi.object({
  firstName: Joi.string()
    .min(1)
    .message("Name should have at least 1 letters")
    .required(),
  lastName: Joi.string().min(0),
  startYear: Joi.number()
    .min(1980)
    .message("Year must be greater than 1980")
    .required(),
  endYear: Joi.number()
    .min(1980)
    .message("Year must be greater than 1980")
    .required(),
  password: Joi.string().required(),
  branch: Joi.string().required(),
  about: Joi.string().min(0),
  twitter: Joi.string().min(0),
  linkedin: Joi.string().min(0),
});

const SignUp = () => {
  const form = useForm({
    schema: joiResolver(schema),
    initialValues: {
      firstName: "",
      lastName: "",
      startYear: 2019,
      endYear: 2023,
      password: "",
      branch: "",
      about: "",
      twitter: "",
      linkedin: "",
    },
  });
  const [images, setImages] = useState([]);
  const [profileURL, setProfileURL] = useState("");
  const [urlChangeIsPending, setUrlChangeIsPending] = useState(false);

  var handleImageUpload = function (url) {
    var temp = url.substr(22);
    var formData = new FormData();
    formData.append("image", temp);
    setUrlChangeIsPending(true);
    fetch(
      "https://api.imgbb.com/1/upload?key=dcdbaa0a689c529dd200cfe147cdef01",
      {
        method: "POST",
        body: formData,
      }
    )
      .then((response) => {
        console.log("success");
        return response.json();
      })
      .then((data) => {
        console.log(data);
        console.log(data.data.display_url);
        setProfileURL(data.data.display_url);
        setUrlChangeIsPending(false);
      })
      .catch(() => {
        setUrlChangeIsPending(false);
        console.log("error");
      });
  };

  const onChange = (imageList) => {
    // data for submit
    setImages(imageList);
    if (imageList.length === 0) {
      setProfileURL("");
      return 0;
    }
    console.log(imageList[0].data_url);
    handleImageUpload(imageList[0].data_url);
  };

  const uploadOnDB = (values) => {
    console.log(values);
    console.log(profileURL);
  };
  // const useStyles = makeStyles({});
  // const classes = useStyles();

  return (
    <Box sx={{ maxWidth: 500 }} mx="auto">
      <Typography
        component="h1"
        variant="h5"
        align="center"
        mt="sm"
        sx={{ mt: 8, mb: 5 }}
      >
        Complete your account setup
      </Typography>
      <Grid container spacing={2}>
        <Grid item xs={12} textAlign="center">
          <ImageUploading
            value={images}
            onChange={onChange}
            dataURLKey="data_url"
          >
            {({
              imageList,
              onImageUpload,
              onImageUpdate,
              onImageRemove,
              dragProps,
            }) => (
              // write your building UI
              <div className="upload__image-wrapper">
                <button
                  style={{
                    backgroundColor: "#0099ff",
                    color: "white",
                    border: "none",
                    borderRadius: "7px",
                    padding: "10px",
                    cursor: "pointer",
                  }}
                  onClick={onImageUpload}
                  disabled={urlChangeIsPending}
                  {...dragProps}
                >
                  Upload Your Profile Picture here
                </button>
                &nbsp;
                {imageList.map((image, index) => (
                  <div key={index} className="image-item">
                    <img src={image["data_url"]} alt="" width="100" />
                    <div className="image-item__btn-wrapper">
                      <button
                        style={{
                          backgroundColor: "#0099ff",
                          color: "white",
                          border: "none",
                          borderRadius: "7px",
                          padding: "7px",
                          cursor: "pointer",
                        }}
                        onClick={() => onImageUpdate(index)}
                        disabled={urlChangeIsPending}
                      >
                        Update
                      </button>
                      <button
                        style={{
                          backgroundColor: "#0099ff",
                          color: "white",
                          border: "none",
                          borderRadius: "7px",
                          marginLeft: "3px",
                          padding: "7px",
                          cursor: "pointer",
                        }}
                        onClick={() => onImageRemove(index)}
                        disabled={urlChangeIsPending}
                      >
                        Remove
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </ImageUploading>
        </Grid>
      </Grid>
      <form onSubmit={form.onSubmit((values) => uploadOnDB(values))}>
        <Grid container spacing={2}>
          <Grid item xs={12} sm={6}>
            <TextInput
              required
              label="First Name"
              placeholder="Vaibhav"
              mt="sm"
              {...form.getInputProps("firstName")}
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextInput
              label="Last Name"
              placeholder="Sinha"
              mt="sm"
              {...form.getInputProps("lastName")}
            />
          </Grid>
          <Grid item xs={12}>
            <PasswordInput
              label="Password"
              placeholder="Password"
              {...form.getInputProps("password")}
            />
          </Grid>
          <Grid item xs={12}>
            <TextInput
              required
              label="Branch"
              placeholder="ex-ECE"
              mt="sm"
              {...form.getInputProps("branch")}
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <NumberInput
              required
              label="Start Year"
              placeholder="Ex-2019"
              mt="sm"
              {...form.getInputProps("startYear")}
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <NumberInput
              required
              label="End Year"
              placeholder="Ex-2023"
              mt="sm"
              {...form.getInputProps("endYear")}
            />
          </Grid>
          <Grid item xs={12}>
            <TextInput
              label="Linkedin"
              placeholder="URL of Linkedin"
              mt="sm"
              {...form.getInputProps("linkedin")}
            />
          </Grid>
          <Grid item xs={12}>
            <TextInput
              label="Twitter"
              placeholder="URL of Twitter"
              mt="sm"
              {...form.getInputProps("twitter")}
            />
          </Grid>
          <Grid item xs={12}>
            <Textarea
              label="About"
              placeholder="Anything about yourself"
              mt="sm"
              {...form.getInputProps("about")}
            />
          </Grid>
        </Grid>
        <Group position="right" mt="xl">
          <Button
            type="submit"
            style={{ color: "white" }}
            disabled={urlChangeIsPending}
          >
            Submit
          </Button>
        </Group>
      </form>
    </Box>
  );
};

export default SignUp;
