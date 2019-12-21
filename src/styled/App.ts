import styled, { createGlobalStyle } from "styled-components";
import { COLOR } from "../constants";

export const GlobalStyle = createGlobalStyle`
  html, body {
    width: 100%;
    padding: 0;
    margin: 0;
    background: #${COLOR.GREY}
	}
	
  #root {
    height: 100%;
  }

  *, :after, :before {
    box-sizing: border-box;
  }

  .text-decoration__none {
    text-decoration: none;
  }

  .w-100 {
    width: 100%!important;
  }
`;

export const Container = styled.div`
  width: 100%;
  margin: 0 auto;
  max-width: 600px;
  height: 100%;
  background: #${COLOR.WHITE};
  padding: 10px;
`;

export const HeaderTitleWrapper = styled.div`
  margin-bottom: 10px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 10px;
  padding: 10px;
  font-size: 1.6rem;
  border-bottom: 1px solid #${COLOR.GREY};
`;

export const HeaderTitle = styled.div``;

export const HeaderAddContactAction = styled.div`
  text-align: center;
  border: 1px solid #${COLOR.PRIMARY};
  height: 30px;
  width: 30px;
  line-height: 1;
  color: #${COLOR.PRIMARY};
  cursor: pointer;
`;

export const Row = styled.div`
  display: flex;
  flex-wrap: wrap;
  margin-right: -10px;
  margin-left: -10px;
`;

export const Col = styled.div`
  flex-basis: 0;
  flex-grow: 1;
  max-width: 100%;
  position: relative;
  width: 100%;
  padding-right: 10px;
  padding-left: 10px;
`;
