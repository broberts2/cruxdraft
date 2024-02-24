import styled from "styled-components";

const Bar = styled.div`
  animation-fill-mode: forwards;
  -webkit-animation-timing-function: linear;
  animation-timing-function: linear;
  animation: grow linear infinite;
  transform: scale(1, 0);
  @keyframes grow {
    100% {
      transform: scale(1, ${(props) => props.height});
    }
  }
`;

export default {
  Bar,
};
