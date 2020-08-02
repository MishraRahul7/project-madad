import React from "react";
import Snackbar from "@material-ui/core/Snackbar";
import { useDispatch, useSelector } from "react-redux";
import IconButton from "@material-ui/core/IconButton";
import { Icon } from "@material-ui/core";
import { clearSnackbar } from "../actions/index";

const Notification = () => {
  const dispatch = useDispatch();

  const { successSnackbarOpen, successSnackbarMessage } = useSelector(
    (state) => state.ui
  );

  function handleClose() {
    dispatch(clearSnackbar());
  }

  return (
    <div>
      <Snackbar
        anchorOrigin={{
          vertical: "bottom",
          horizontal: "left",
        }}
        open={successSnackbarOpen}
        autoHideDuration={4000}
        onClose={handleClose}
        aria-describedby="client-snackbar"
        message={
          <span id="client-snackbar">
            <Icon>check_circle</Icon>
            {successSnackbarMessage}
          </span>
        }
        action={[
          <IconButton
            key="close"
            aria-label="close"
            color="inherit"
            onClick={handleClose}
          >
            <Icon>close</Icon>
          </IconButton>,
        ]}
      />
    </div>
  );
};
export default Notification;
