import { styled } from "@mui/system";
import {Box, Container, Grid, Card, Button, Typography } from "@mui/material";

export const SAdjustmentContainer = styled(Container)({
    padding: "56px",
    paddingBottom: "24px",
    height: "100%",
    width: "100%",
    border: "1px solid black",
    borderRadius: "16px",
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-between",
});

export const SAdjustmentBox = styled(Box)({
    display: "flex",
    justifyContent: "flex-end"
})