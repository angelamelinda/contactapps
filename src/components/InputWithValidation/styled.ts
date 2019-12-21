import styled from "styled-components";

export const InputLabel = styled.label`
  margin-bottom: 5px;
  display: block;
`;

export const Input = styled.input`
  height: 32px;
  line-height: 32px;
  padding: 10px;
  border: 1px solid #c0c0c0;
  &.error {
    border-color: red;
  }
`;

export const InputError = styled.div`
  color: red;
  margin-top: 5px;
  font-size: 0.875rem;
`;
