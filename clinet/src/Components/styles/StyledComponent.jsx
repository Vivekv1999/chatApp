import { styled } from "@mui/material";
import { Link as LinkComponent } from "react-router-dom";
import { greyColor } from "../../constants/constants";

export const VisuallyHidden = styled("input")({
  border: 0,
  clip: "rect(0 0 0 0)",
  height: 1,
  margin: -1,
  padding: 0,
  overflow: "hidden",
  position: "absolute",
  whiteSpace: "nowrap",
  width: 1,
});

export const Link = styled(LinkComponent)`
  text-decoration: none;
  color: black;
  padding: 0.5rem;
  &:hover {
    background-color:rgba(0,0,0,0.1);
  }
`;

export const InputBox = styled("input")`
  width:100%;
  height:100%;
  border:none;
  outline:none;
  padding:0 3rem;
  border-radius:1.5rem;
  background-color:${greyColor}
`;
