import * as React from "react";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";
import { Chip, styled } from "@mui/material";

const Dialogs = () => {
  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };
  


  return (
    <div>
      <Chip color="error" label="Unvarified" onClick={handleClickOpen} >
        Unvarified
      </Chip>
      <Dialog open={open} onClose={handleClose}>
        <DialogTitle>Varify Your Email</DialogTitle>
        <DialogContent>
          <DialogContentText>
            Please enter your email here. We will send the OTP.
          </DialogContentText>
          <TextField
            autoFocus
            margin="dense"
            id="name"
            label="Email Address"
            type="email"
            fullWidth
            variant="standard"
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>Cancel</Button>
          <Button onClick={handleClose}>Varify Now</Button>
        </DialogActions>
      </Dialog>
    </div>
  );
};

export default Dialogs;
