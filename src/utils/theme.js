import { createMuiTheme } from "@material-ui/core/styles";
import orange from "@material-ui/core/colors/orange";
import green from "@material-ui/core/colors/green";
import grey from "@material-ui/core/colors/grey";

export const fabTheme = createMuiTheme({
  palette: {
    primary: {
      main: orange[500],
    },
    secondary: {
      main: green[500],
    },
    textColor: {
      main: grey[50],
    },
  },
});
