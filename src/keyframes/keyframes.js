import styled, { keyframes } from "styled-components";

// styled.p`
//   animation: ${fadeIn} 3s forward;
// `

export const fadeIn = keyframes`
    from { opacity: 0; }
    to { opacity: 1; }
`;

export const slideUp = keyframes`
    from { transform: translateY(100%); }
    to { transform: translateY(0); }
`;

export const typing = keyframes`
    from { width: 0; }
    to { width: 100%; }
`;