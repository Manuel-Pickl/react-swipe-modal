// SwipeModalStyles.ts
import styled from 'styled-components';

interface StyledSwipeModalProps {
    $animationDurationInMs: string;
    $backdropOpacity: number;
    $barColor: string;
    $borderRadius: string;
    $maxWidth: string;
    $modalColor: string;
}

export const StyledSwipeModal = styled.div<StyledSwipeModalProps>`
  .backdrop {
    position: fixed;
    top: 0;
    left: 0;
    width: 100vw;
    height: 100vh;
    background-color: black;
    opacity: ${(props) => props.$backdropOpacity};
    transition: opacity ${(props) => props.$animationDurationInMs};
    display: none;

    animation:
      changeColor2 350ms forwards 5s;

    @keyframes changeColor2 {
      to {
        opacity: 0.8;
      }
    }
  }

  .modal {
    position: fixed;
    left: 50%;
    bottom: 0;
    translate: -50% 0;
    width: 100vw;
    max-width: ${(props) => props.$maxWidth};
    color: hsl(0, 0%, 95%);
    background-color: ${(props) => props.$modalColor};
    border-radius: ${(props) => props.$borderRadius} ${(props) => props.$borderRadius} 0 0;
    transform: translateY(100%);
    animation:
    decreaseWidth 350ms forwards 4s,
      changeColor 350ms forwards 4s,
      decreaseBorder 350ms forwards 8s;

    @keyframes changeColor {
      to {
          background-color: #ffffff;
        }
    }
    @keyframes decreaseWidth {
      from {
        width: 100vw;
      }
      to {
        width: 60vw;
      }
    }
    @keyframes decreaseBorder {
      to {
        border-radius: 0;
      }
    }    

    .bar-touchzone {
      display: grid;
      place-items: center;

      .bar {
        height: 0.3rem;
        width: 4rem;
        margin-block: 0.4rem;
        border-radius: 2rem;
        background-color: ${(props) => props.$barColor};

        animation:
          changeColor1 350ms forwards 4s;

        @keyframes changeColor1 {
          to {
            background-color: #fa8072;
          }
        }
      }
    }
  }
`;
