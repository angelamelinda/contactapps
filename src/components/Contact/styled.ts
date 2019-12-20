import styled from "styled-components";
import { COLOR } from "../../constants";

export const ContactWrapper = styled.div`
  display: flex;
  padding: 0 10px;
  &:not(:last-of-type) {
    margin-bottom: 10px;
  }
`;

export const ContactPhoto = styled.div`
  width: 100px;
  height: 100px;
  overflow: hidden;
  background: #${COLOR.GREY};
  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`;

export const ContactLeft = styled.div`
  max-width: 100px;
  flex: 0 0 100px;
  overflow: hidden;
  margin-right: 10px;
`;

export const ContactRight = styled.div`
  align-items: center;
  display: flex;
  justify-content: space-between;
  max-width: calc(100% - 110px);
  flex: 0 0 calc(100% - 110px);
`;

export const ContactName = styled.div``;

export const ContactAction = styled.div``;

export const ContactActionButton = styled.div`
  background: #${COLOR.PRIMARY};
  color: #${COLOR.WHITE};
  padding: 5px 20px;
  box-sizing: border-box;
  border-radius: 2px;
  cursor: pointer;
`;
