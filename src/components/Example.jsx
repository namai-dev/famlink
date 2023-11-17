import { Box, Button, FormControl, TextField } from "@mui/material";
import React, { useState } from "react";

const Example = () => {
  const [user, setUser] = useState({
    name: null,
    email: null,
  });

  const handleOnChange = (e) => {
    let name = e.target.name;
    let value = e.target.value;
    setUser((prev) => {
      return { ...prev, [name]: value };
    });
    console.log(user);
  };

  const handleOnChange2 = (e) => {
    setUser((prev) => ({ ...prev, [e.target.name]: e.target.value }));
    console.log(user);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(user);
  };

  return (
    <>
      <Box component="form" onSubmit={handleSubmit}>
        <FormControl>
          <TextField
            placeholder="name"
            name="name"
            onChange={handleOnChange2}
          />
          <TextField
            placeholder="email"
            name="email"
            onChange={handleOnChange2}
          />
        </FormControl>
        <Button type="submit"> submit</Button>
      </Box>
    </>
  );
};

export default Example;
