import styled from "styled-components";

export const ButtonStyled = styled.button`
  height: 50px;
  border-radius: 8px;
  font-weight: 500;
  background: #8350fd;
  color: #fff;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  border: 0;
  transition: filter 0.2s;
  padding: 0 32px;

  &.outlined {
    background: #fff;
    border: 1px solid #8350fd;
    color: #8350fd;
  }

  img {
    margin-right: 8px;
  }

  &:not(:disabled):hover {
    filter: brightness(0.9);
  }

  &:disabled {
    opacity: 0.6;
    cursor: not-allowed;
  }
`;
