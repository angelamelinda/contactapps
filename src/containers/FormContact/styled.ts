import styled from "styled-components";
import { COLOR } from "../../constants";

export const FormContactSaveButton = styled.div`
  padding: 5px 20px;
  text-align: center;
  border: 1px solid #${COLOR.PRIMARY};
  background: #${COLOR.PRIMARY};
  color: #${COLOR.WHITE};
  cursor: pointer;
`;

export const FormContactDeleteButton = styled.div`
  padding: 5px 20px;
  text-align: center;
  border: 1px solid #${COLOR.PRIMARY};
  color: #${COLOR.PRIMARY};
  cursor: pointer;
`;

export const FormContactWrapperButton = styled.div``;

export const FormField = styled.div`
  &:not(:last-of-type) {
    margin-bottom: 10px;
  }
`;

export const Form = styled.div`
  margin-bottom: 20px;
`;

export const FormImage = styled.div`
  width: 100%;
  max-width: 300px;
  height: 300px;
  overflow: hidden;
  background: #${COLOR.GREY};
  margin: 0 auto 20px;
  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    object-position: top;
  }
`;
