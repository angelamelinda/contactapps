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
  min-height: 100vh;
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
  height: 20px;
  width: 20px;
  line-height: 1;
  color: #${COLOR.PRIMARY};
  cursor: pointer;
  border-radius: 100%;
  font-size: 17px;
`;

export const HeaderBackButton = styled.div`
  display: inline-block;
  margin-right: 10px;
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

export const Toast = styled.div`
  position: fixed;
  bottom: 40px;
  text-align: center;
  left: 50%;
  transform: translateX(-50%);
  background: rgba(0, 0, 0, 0.54);
  padding: 10px 20px;
  border-radius: 20px;
  color: #${COLOR.WHITE};
  transition: all 0.3s ease;
`;

export const ErrorPage = styled.div`
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
`;
