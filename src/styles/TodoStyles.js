import sizes from "../utils/sizes";

const styles = {
  Todo: {
    fontSize: "1.2rem",
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    minHeight: "3rem",
  },
  TodoTask: {
    width: "85%",
    marginLeft: "1rem",
    display: "flex",
    alignItems: "center",
    [sizes("sm")]: {
      width: "75%",
    },
    "& p": {
      marginLeft: "1.5rem",
      color: "rgba(0,0,0,0.7)",
      fontFamily: "Rubik, sans-serif",
      [sizes("sm")]: {
        marginLeft: "1rem",

        fontSize: "1rem",
      },
    },
    "& input": {
      "&:checked": {
        color: "red",
      },
    },
  },
  TodoBtns: {
    width: "15%",
    display: "flex",
    justifyContent: "space-around",
    [sizes("sm")]: {
      width: "25%",
    },
    "& i": {
      cursor: "pointer",

      "&.fa-trash": {
        "&:hover": {
          color: "red",
        },
      },
      "&.fa-edit": {
        color: "rgb(98,104,216)",
        "&:hover": {
          color: "rgb(49,58,214)",
        },
      },
    },
  },
  task: {
    textDecoration: (props) => (props.isComplete ? "line-through" : "none"),
  },
};
export default styles;
