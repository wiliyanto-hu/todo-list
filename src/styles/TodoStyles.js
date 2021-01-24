const styles = {
  Todo: {
    fontSize: "1.2rem",
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    height: "3rem",
  },
  TodoTask: {
    width: "85%",
    marginLeft: "1rem",
    display: "flex",
    alignItems: "center",
    "& p": {
      marginLeft: "1.5rem",
      color: "rgba(0,0,0,0.7)",
      fontFamily: "Rubik, sans-serif",
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
