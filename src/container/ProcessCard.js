import React from "react";
import { Card, Grid, CardContent, CardMedia, Typography } from "@mui/material";
import { styled } from "@mui/system";

const CardContainer = styled(Grid)(({ theme }) => ({
  padding: theme.spacing(2),
}));

const StyledCard = styled(Card)({
  backgroundColor: "#b40008",
  color: "#0D0D0D",
  height: "100%",
  display: "flex",
  flexDirection: "column",
});

const StyledCardContent = styled(CardContent)({
  flexGrow: 1,
  color: "white",
});

const StyledCardMedia = styled(CardMedia)({
  paddingTop: "56.25%", // 16:9 aspect ratio
});

const ProcessCard = (props) => {
  return (
    <React.Fragment>
      <CardContainer container>
        <StyledCard>
          <StyledCardMedia image={props.img} />
          <StyledCardContent>
            <Typography gutterBottom variant="h4">
              {props.heading}
            </Typography>
            <Typography>{props.body}</Typography>
          </StyledCardContent>
        </StyledCard>
      </CardContainer>
    </React.Fragment>
  );
};

export default ProcessCard;
