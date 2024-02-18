// SwipeModalStyles.ts
import styled from 'styled-components';

interface SwipeModalStylesProps {
    $animationDurationInMs: string;
    $backdropOpacity: number;
    $barColor: string;
    $modalColor: string;
}

export const StyledSwipeModal = styled.div<SwipeModalStylesProps>`
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
  }

  .modal {
    position: fixed;
    left: 0;
    bottom: 0;
    width: 100vw;
    background-color: ${(props) => props.$modalColor};
    border-radius: 1.2rem 1.2rem 0 0;
    transform: translateY(100%);

    .bar-touchzone {
      display: grid;
      place-items: center;

      .bar {
        height: 0.3rem;
        width: 4rem;
        margin-block: 0.4rem;
        border-radius: 2rem;
        background-color: ${(props) => props.$barColor};
      }
    }
  }
`;
