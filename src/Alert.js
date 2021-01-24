import React from "react";
import { withStyles } from "@material-ui/styles";
import { alertContext } from "./context/AlertContext";
import styles from "./styles/AlertStyles";

const Alert = ({ classes }) => {
  const { toggleAlert } = React.useContext(alertContext);
  const alertBox = React.useRef();

  const handleClick = (e) => {
    if (!alertBox.current.contains(e.target)) {
      toggleAlert();
    }
  };

  React.useEffect(() => {
    // add when mounted
    document.addEventListener("mousedown", handleClick);
    // return function to be called when unmounted
    return () => {
      document.removeEventListener("mousedown", handleClick);
    };
  }, []);

  return (
    <div className={classes.Alert}>
      <div className={classes.AlertBox} onClick={handleClick} ref={alertBox}>
        <span>!</span>
        <p>Task cannot be empty</p>
        <button onClick={toggleAlert}> Close </button>
      </div>
    </div>
  );
};

export default withStyles(styles)(Alert);
