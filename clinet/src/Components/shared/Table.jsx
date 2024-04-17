import { Container, Paper, Typography } from "@mui/material";
import React from "react";
import {DataGrid} from "@mui/x-data-grid"
import { mateBlack, textColorBlack } from "../../constants/constants";

const Table = ({ rows, columns, heading, rowHeight = 52 }) => {
  return (
    <Container
      sx={{
        height: "100vh",
      }}
    >
        <Paper
        elevation={3}
        sx={{
            pading:"1rem 4rem",
            borderRadius:"1rem",
            margin:"auto",
            width:"100%",
            overflow:"hidden",
            height:"100%",
            boxShadow:"none"
        }}
        >
            <Typography
            textAlign={"center"}
            variant="h4"
            color={textColorBlack}
            sx={{
                textTransform:"uppercase",
                margin: "2rem"
            }}
            >
                {heading}
            </Typography>
            <DataGrid
            rows={rows}
            columns={columns}
            rowHeight={rowHeight}
            style={{
                height:"80%",
            }}
            sx={{
                border: "none",
                ".table-header":{
                    bgcolor:mateBlack,
                    color:"white"
                }
            }}


            />
        </Paper>
    </Container>
  );
};

export default Table;
