const styles = {
  "@global": {
    ".todo-enter": {
      opacity: 0,
    },
    ".todo-enter-active": {
      opacity: 1,
      transition: "opacity 300ms ease-in",
    },
    ".todo-exit": {
      opacity: 1,
    },
    ".todo-exit-active": {
      opacity: 0,
      transition: "opacity 300ms ease-in",
    },
  },
};
export default styles;
