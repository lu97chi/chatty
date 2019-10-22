import styled, { keyframes } from 'styled-components';

const UpDownDots = keyframes`
    from {
        transform: translate(0px, 0px);
        background: #040404; 
    }
    to {
        
        transform: translate(0px, 10px);
        background: #adb1b3;
    }
`;

export const MessageContainer = styled.div`
    background-color: ${({ itsMe }) => (itsMe ? '#6329f8' : '#f1f5f9')} ;
    width: 250px;
    border-radius: ${({ itsMe }) => (itsMe ? '10px 10px 0px 10px' : '10px 10px 10px 0px')};
    padding: 14px;
    margin: 14px 0px;
    color: ${({ itsMe }) => (itsMe ? '#eae3fd' : '#5a5b5c')} ;
    font-size: 12px;
`;

export const WritingDots = styled.div`
    width: 10px;
    height: 10px;
    background-color: #adb1b3;
    border-radius: 100%;
    display: inline-block;
    margin: 0 5px;
    animation: ${UpDownDots} 1s linear infinite alternate;
    animation-delay: ${({ delay }) => `${delay / 5}s`};
`;
// f1f5f9
// 6329f8
