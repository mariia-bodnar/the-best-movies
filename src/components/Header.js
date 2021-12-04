import { Link } from "react-router-dom";
import styled from "@emotion/styled";
import Home from "@mui/icons-material/Home";
import { IconButton } from "@mui/material";

const Header = () => (
  <Container>
    <Link to="/">
      <IconButton style={{ marginLeft: "2rem" }}>
        <Home fontSize="large" sx={{ color: "white" }} />
      </IconButton>
    </Link>
    <h1 style={{ color: "white", margin: "auto", paddingRight: "51px" }}>
      Best 20 Movies of 2021
    </h1>
  </Container>
);

const Container = styled.div`
  display: flex;
  align-items: center;
  height: 100px;
  background-color: #043959;
  width: 100vw;
`;

export default Header;
