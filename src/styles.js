import styled, { createGlobalStyle } from "styled-components";
import { Link, NavLink } from "react-router-dom";

export const GlobalStyle = createGlobalStyle`
align-items: center;
h1{
    font-family: cursive;
}

body
{
  color: ${(props) => props.theme.mainColor} ;
  background-color: ${(props) => props.theme.backgroundColor}

};


`;

export const theme = {
  light: {
    mainColor: "#242424", // main font color
    backgroundColor: "#fefafb", // main background color
    pink: "#ff85a2",
    red: "#ff3232",
  },
  dark: {
    mainColor: "#fefafb", // main font color
    backgroundColor: "#242424", // main background color
    pink: "#ff85a2",
    red: "#ff3232",
  },
};

export const Title = styled.h2`
  text-align: center;
  color: #e9d2c0;

  background-color: #4b3f72;
  min-height: 10vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  font-size: calc(10px + 2vmin);
`;
export const Description = styled.h4`
  text-align: center;
`;

export const CoverImg = styled.img`
  width: 1586px;
  height: 700px;
`;

export const Image = styled.img`
  width: 300px;
  height: 300px;
`;

export const List = styled.div`
  display: flex;
  padding: 15px;
  text-align: center;
  justify-content: space-around;
`;

export const ThemeButton = styled.button`
  font-size: 1em;
  margin: 1.25em;
  padding: 0.25em 1em;
  border-radius: 3px;
  background-color: ${(props) => props.theme.mainColor};
  color: ${(props) => props.theme.backgroundColor};
`;

export const ListWrapper = styled.div`
  align-items: center;
  justify-content: center;
  display: flex;
`;

export const SearchBarStyled = styled.input`
  padding: 0.5rem;
  margin: 1rem auto;
  display: block;
  width: 40%;
`;
export const DetailWrapper = styled.div`
  display: block;
  margin-left: auto;
  margin-right: auto;
  width: 80%;
  img {
    width: 40%;
    float: left;
  }
  p {
    vertical-align: middle;
  }
`;

export const DeleteButtonStyled = styled.button`
  background-color: green;
`;

export const NavBar = styled.div`
  background-color: #333;
  overflow: hidden;
`;

export const Logo = styled(Link)`
  display: flex;
  justify-content: center;
  padding: 5px;
  color: violet;
  text-decoration: unset;
`;

export const NavProducts = styled(NavLink)`
  color: ${(props) => props.theme.mainColor};
`;

export const UpdateButtonStyled = styled(Link)``;
