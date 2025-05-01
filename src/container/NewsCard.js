import React from "react";
import { Card, Grid, Button, CardActions, CardContent, CardMedia, Typography } from "@mui/material";
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

const StyledButton = styled(Button)({
  color: "white",
  borderColor: "white",
});

const NewsCard = (props) => {
  return (
    <React.Fragment>
      <CardContainer container>
        <StyledCard>
          <StyledCardMedia image="https://source.unsplash.com/random" />
          <StyledCardContent>
            <Typography gutterBottom variant="h5" component="h2">
              {props.heading}
            </Typography>
            <Typography>
              This is a media card. You can use this section to describe the content.
            </Typography>
          </StyledCardContent>
          <CardActions>
            <StyledButton variant="outlined" size="small">
              View full news
            </StyledButton>
          </CardActions>
        </StyledCard>
      </CardContainer>
    </React.Fragment>
  );
};

export default NewsCard;
