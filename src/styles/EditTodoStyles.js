const styles = {
  EditTodo: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    height: "3rem",
    backgroundColor: "rgb(245,245,255)",

    "& input": {
      fontSize: "1.2rem",
      height: "95%",
      border: "none",
      width: "85%",
      outline: "none",
      paddingLeft: "1rem",
      backgroundColor: "inherit",
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
      fontSize: "1.4rem",
      padding: "0.2rem 0.5rem",
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
export default styles;
