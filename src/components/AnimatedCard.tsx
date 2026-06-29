import React from 'react';
import styled from 'styled-components';

interface CardProps {
  children: React.ReactNode;
  className?: string;
  style?: React.CSSProperties;
}

const AnimatedCard = ({ children, className = '', style }: CardProps) => {
  return (
    <StyledWrapper className={className} style={style}>
      <div className="card">
        {children}
      </div>
    </StyledWrapper>
  );
}

const StyledWrapper = styled.div`
  width: 100%;
  height: 100%;

  .card {
    width: 100%;
    height: 100%;
    border-radius: 30px;
    background: #212121;
    box-shadow: 15px 15px 30px rgb(25, 25, 25),
                -15px -15px 30px rgb(60, 60, 60);
    padding: 20px;
    box-sizing: border-box;
    display: flex;
    flex-direction: column;
    justify-content: center;
  }
`;

export default AnimatedCard;
