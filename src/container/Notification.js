import React from "react";
import Snackbar from "@material-ui/core/Snackbar";

const Notification = (props) => {
  const [snackbarOpen, setSnakbarOpen] = React.useState(false);

  const handleClose = (e) => {
    setSnakbarOpen(false);
  };
  return (
    <div>
      <Snackbar
        anchorOrigin={{ horizontal: "center", vertical: "bottom" }}
        open={snackbarOpen}
        onClose={handleClose}
        message={props.mess}
        autoHideDuration={3000}
      />
    </div>
  );
};
export default Notification;
