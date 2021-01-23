export default {
  EditTodo: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    height: "3rem",

    "& input": {
      fontSize: "1.2rem",
      height: "95%",
      border: "none",
      width: "85%",
      outline: "none",
      paddingLeft: "1rem",
    },
    "& div": {
      width: "15%",
      display: "flex",
      justifyContent: "center",
    },
    "& button": {
      borderRadius: "50%",
      backgroundColor: "rgb(250,103,104)",
      color: "white",
      border: "none",
      outline: "none",
      fontSize: "1.5rem",
      margin: "0 1rem",
      width: "2.5rem",
      cursor: "pointer",
      height: "80%",
      "&:hover": {
        backgroundColor: "rgb(255,79,80)",
      },
    },
  },
};
