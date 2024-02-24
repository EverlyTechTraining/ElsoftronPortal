import { Typography } from "@mui/material";
import { Link as LinkRoute } from "react-router-dom";

export const Copyright = (props) => {
     return (
       <Typography
         variant="body2"
         color="text.secondary"
         align="center"
         {...props}
         sx={{ mt: 8, mb: 4 }}
       >
         {"Copyright © "}
         Elsoftron
         {" "}
         {new Date().getFullYear()}
         {"."}
       </Typography>
     );
}