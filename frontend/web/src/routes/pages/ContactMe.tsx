import React, { useState } from "react";
import { TextField, Button, Grid, Paper, Typography } from "@mui/material";

const ContactMeForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (event: any) => {
    const { name, value } = event.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (event: any) => {
    event.preventDefault();
    // Add your logic to handle form submission (e.g., sending an email)
    console.log("Form Data:", formData);
    // Reset form after submission
    setFormData({
      name: "",
      email: "",
      message: "",
    });
  };

  return (
    <Paper sx={{ padding: 3 }}>
      <Typography variant="h5" align="center">
        Contact Me
      </Typography>
      <form style={{ wordSpacing: 3 }} onSubmit={handleSubmit}>
        <Grid container spacing={3}>
          <Grid item xs={12}>
            <TextField
              label="Name"
              variant="outlined"
              fullWidth
              required
              name="name"
              value={formData.name}
              onChange={handleChange}
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              label="Email"
              variant="outlined"
              fullWidth
              required
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              label="Message"
              variant="outlined"
              fullWidth
              required
              multiline
              rows={4}
              name="message"
              value={formData.message}
              onChange={handleChange}
            />
          </Grid>
          <Grid item xs={12}>
            <Button
              type="submit"
              variant="contained"
              color="primary"
              fullWidth
              sx={{
                wordSpacing: 2,
              }}
            >
              Submit
            </Button>
          </Grid>
        </Grid>
      </form>
    </Paper>
  );
};

export default ContactMeForm;
