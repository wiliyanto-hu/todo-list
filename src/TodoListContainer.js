import { withStyles } from "@material-ui/styles";
import { today, fullDate } from "./date";
const styles = {
  container: {
    width: "40%",
    backgroundColor: "white",
    borderRadius: "7px",
    margin: "2rem auto",
  },
  header: {
    backgroundColor: "rgb(245,245,255)",
    borderTopLeftRadius: "7px",
    borderTopRightRadius: "7px",
    fontFamily: "Work Sans, sans-serif",
    textAlign: "left",
    padding: "0.5rem 1rem ",
  },
};
const TodoListContainer = ({ classes }) => {
  return (
    <div className={classes.container}>
      <div className={classes.header}>
        <h2 style={{ fontWeight: 400, color: "rgb(98,104,216)" }}>{today}</h2>
        <h2 style={{ color: "rgba(0,0,0,0.65)" }}>{fullDate}</h2>
      </div>
      <div>
        <h2>Thursday 15th</h2>
      </div>
    </div>
  );
};

export default withStyles(styles)(TodoListContainer);
