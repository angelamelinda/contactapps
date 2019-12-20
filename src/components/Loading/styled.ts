import styled from "styled-components";

export const LoadingContainer = styled.div`
  .stardust-spinner {
    animation: 0.4s movement linear infinite;

    &:nth-child(2) {
      animation-delay: 0.1s;
    }

    &:nth-child(3) {
      animation-delay: 0.2s;
    }
  }

  @keyframes movement {
    0% {
      transform: translateY(2px);
    }

    50% {
      transform: translateY(-2px);
    }

    to {
      transform: translateY(2px);
    }
  }
`;

export const LoadingWrapper = styled.div`
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
`;
