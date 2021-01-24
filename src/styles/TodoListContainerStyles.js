import sizes from "../utils/sizes";

const styles = {
  container: {
    width: "40%",
    backgroundColor: "white",
    borderRadius: "7px",
    margin: "0 auto",

    [sizes("md")]: {
      width: "50%",
    },
    [sizes("sm")]: {
      width: "65%",
    },
    [sizes("xs")]: {
      width: "85%",
    },
  },
  header: {
    backgroundColor: "rgb(245,245,255)",
    borderTopLeftRadius: "7px",
    borderTopRightRadius: "7px",
    fontFamily: "Work Sans, sans-serif",
    textAlign: "left",
    padding: "0.5rem 1rem ",
    display: "flex",
    justifyContent: "space-between",
    [sizes("sm")]: {
      "& h2": {
        fontSize: "1.2rem",
      },
    },
  },
  rightSide: {
    "& h2": {
      fontWeight: "400",
      color: "rgb(98,104,216)",
    },
  },
};
export default styles;
