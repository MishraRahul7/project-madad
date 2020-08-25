import React ,{useEffect}from "react";
import Snackbar from "@material-ui/core/Snackbar";

const Notification = ({open,message}) => {

 
  const [snackbarOpen, setSnakbarOpen] = React.useState(open);
  useEffect(()=>{
    setSnakbarOpen(open)
  },[open])

  const handleClose = (e) => {
    setSnakbarOpen(false);
  };
  return (
    <div>
      <Snackbar
        anchorOrigin={{ horizontal: "center", vertical: "bottom" }}
        open={snackbarOpen}
        onClose={handleClose}
        message={message}
        autoHideDuration={3000}
      />
    </div>
  );
};
export default Notification;
