import styled from "styled-components";

const Tracer = styled.div`
  -webkit-animation-timing-function: linear;
  animation-timing-function: linear;
  box-shadow: 0px 0px 2px 2px #0ff;
  animation: ${(props) => (props.bottom ? "bottom" : "top")} linear infinite;
  @keyframes top {
    20% {
      left: 100%;
      top: 0%;
    }
    50% {
      left: 100%;
      top: 100%;
    }
    70% {
      left: 0%;
      top: 100%;
    }
    100% {
      left: 0%;
      top: 0%;
    }
  }
  @keyframes bottom {
    20% {
      right: 100%;
      bottom: 0%;
    }
    50% {
      right: 100%;
      bottom: 100%;
    }
    70% {
      right: 0%;
      bottom: 100%;
    }
    100% {
      right: 0%;
      bottom: 0%;
    }
  }
`;

export default {
  Tracer,
};
