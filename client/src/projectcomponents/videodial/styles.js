import styled from "styled-components";

const fade = `radial-gradient(circle, black 55%, transparent 70%)`;

const BackgroundImgFade = styled.img`
  -webkit-mask-image: ${fade};
  mask-image: ${fade};
`;

const Border = styled.div`
  border-left-width: 6px;
  border-right-width: 18px;
  border-top-width: 8px;
  border-bottom-width: 24px;
  animation: wavy linear infinite;
  @keyframes wavy {
    25% {
      border-left-width: 10px;
      border-right-width: 24px;
      border-top-width: 12px;
      border-bottom-width: 28px;
    }
    50% {
      border-left-width: 8px;
      border-right-width: 18px;
      border-top-width: 4px;
      border-bottom-width: 6px;
      border-color: purple;
    }
    75% {
      border-left-width: 18px;
      border-right-width: 4px;
      border-top-width: 24px;
      border-bottom-width: 8px;
    }
  }
`;

export default {
  BackgroundImgFade,
  Border,
};
