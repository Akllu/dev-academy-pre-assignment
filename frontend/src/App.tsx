import { Button, Typography } from "@mui/material";
import axios from "axios";
import { useState } from "react";

const App = () => {
  const [buttonText, setButtonText] = useState<string>("Ping");

  const handlePing = async () => {
    const { data } = await axios.get<string>("http://localhost:4000/health");
    setButtonText(data);
  };

  return (
    <div>
      <Typography>Hello World!</Typography>
      <Button variant="contained" onClick={handlePing}>
        {buttonText}
      </Button>
    </div>
  );
};

export default App;
