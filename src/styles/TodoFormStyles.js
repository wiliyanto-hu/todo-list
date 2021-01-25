const styles = {
  Form: {
    height: "3rem",
    width: "100%",
    display: "flex",
    alignItems: "center",

    "& div": {
      display: "flex",
      justifyContent: "center",
    },
  },
  FormInput: {
    height: "95%",
    border: "none",
    outline: "none",
    fontSize: "1.2rem",
    width: "90%",
    paddingLeft: "1rem",
    borderBottomLeftRadius: "7px",
  },
  FormAddBtn: {
    width: "10%",
    borderRadius: "50%",
    backgroundColor: "rgb(250,103,104)",
    color: "white",
    border: "none",
    outline: "none",
    fontSize: "1.6rem",
    margin: "0 1rem",
    width: "2.5rem",
    cursor: "pointer",
    height: "80%",
    "&:hover": {
      backgroundColor: "rgb(255,79,80)",
    },
  },
};
export default styles;
