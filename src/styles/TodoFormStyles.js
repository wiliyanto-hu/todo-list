export default {
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
    flexBasis: "85%",
    paddingLeft: "1rem",
    borderBottomLeftRadius: "7px",
  },
  FormAddBtn: {
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
};
