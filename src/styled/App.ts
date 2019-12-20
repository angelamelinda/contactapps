import styled, { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
  html, body {
    height: 100%;
    width: 100%;
    padding: 0;
    margin: 0;
	}
	
  #root {
    height: 100%;
  }
`;

export const Container = styled.div`
  width: 100%;
  margin: 0 auto;
  max-width: 600px;
  height: 100%;
`;
