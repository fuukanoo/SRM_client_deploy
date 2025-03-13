import { styled } from "@mui/system";
import {Box, Container, Grid, Card, Button, Typography } from "@mui/material";

export const SMaxContainer = styled(Container)({
    flexGrow: 1,
    height: "100%",
    display: "flex",
    flexDirection: "column",
});

export const SCard = styled(Card)({
  boxShadow: 3,
  height: "100%",
  width: "100%",
  display: "flex",
});

export const SLeftGridItem = styled(Grid)({
    display: "flex",
    padding: "32px",
    paddingBottom: "0px",
});

export const SItemsBox = styled(Box)({
  width: "100%",
  display: "flex",
  flexDirection: "column",
  gap: "8px", 
  padding : "24px", 
});

export const SEachItemBox = styled(Box)({
  display: "flex",
  alignItems: "center",
  gap: "8px",
  justifyContent: "space-between",
});

export const InterviewItemTypography = styled(Typography)({
  fontWeight: "bold",
  fontSize: "1.2rem",
  width: "150px",
  textAlign: "left",
});

export const SRightGridItem = styled(Grid)({
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-between",
    padding: "32px",
    paddingBottom: "0px",
});

export const SNoteBox = styled(Box)({
    display: "flex",
    flexDirection: "column",
    padding: "16px",
    paddingRight: "24px",
});

export const SBottomGrid = styled(Grid)({
    display: "flex",
    justifyContent: "flex-end",
    paddingRight: "32px",
    paddingLeft: "48px",
});

export const SSubmitButton = styled(Button)({
    marginRight: "24px",
    fontSize: "0.8rem",
});