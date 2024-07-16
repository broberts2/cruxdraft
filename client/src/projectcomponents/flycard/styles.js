import styled from "styled-components";

const Container = styled.div``;

const Bg = styled.div`
  background-color: rgba(0, 0, 0, 0.5);
`;

const FlyCard = styled.div`
  .flip-card {
    perspective: 1000px;
    position: relative;
    transform-style: preserve-3d;
    transition: transform 3.5s;
  }

  .container {
    display: flex;
    justify-content: center;
  }

  .flip-card.flipped {
    transform: rotateY(180deg);
    transition: transform 3.5s;
  }

  .flip-card-inner {
    transform-style: preserve-3d;
  }

  .flip-card-front,
  .flip-card-back {
    position: absolute;
    backface-visibility: hidden;
  }

  .flip-card-front {
  }

  .flip-card-back {
    transform: rotateY(180deg);
  }

  .card-content {
    text-align: center;
  }

  @keyframes fade-in-left {
    0% {
      opacity: 0;
      transform: translateX(-300px);
    }
    100% {
      opacity: 1;
      transform: translateX(0px);
    }
  }

  @keyframes fade-out-left {
    0% {
      opacity: 1;
      transform: translateX(0px);
    }
    100% {
      opacity: 0;
      transform: translateX(-300px);
    }
  }

  @keyframes fade-in-right {
    0% {
      opacity: 0;
      transform: translateX(300px);
    }
    100% {
      opacity: 1;
      transform: translateX(0px);
    }
  }

  @keyframes fade-out-right {
    0% {
      opacity: 1;
      transform: translateX(0px);
    }
    100% {
      opacity: 0;
      transform: translateX(300px);
    }
  }
`;

export default { Container, Bg, FlyCard };
