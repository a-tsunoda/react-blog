import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";

function BodyCard() {
  return (
    <Card variant="outlined">
      <CardContent>
        <Typography variant="h4" component="h1">
          title
        </Typography>
        <Typography variant="body2" component="p">
          main message...
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small">read continuation</Button>
      </CardActions>
    </Card>
  );
}

export default BodyCard;
