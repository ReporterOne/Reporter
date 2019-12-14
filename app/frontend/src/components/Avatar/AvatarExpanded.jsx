import React from 'react';
import styled from 'styled-components';
import Avatar from './Avatar.jsx';

import { Container } from '~/components/common';

const AvatarWrapper = styled(Container)`
  margin: 0 5px;
  display: flex;
  opacity: ${({faded}) => faded? 0.5 : 1};
  will-change: opacity;
  transition: opacity ${({theme}) => theme.animationsSpeed}s cubic-bezier(0.4, 0, 0.2, 1);
  align-items: center;
  position: relative;
`;

const Background = styled(Container)`
  background-color: white;
  height: calc(100% - 11px);
  margin: 9px 0 2px 0;
  /* fitting to big avatar! */
  padding-left: 32px;
  left: 32px;
  top: 0;
  z-index: -1;
  position: absolute;
`;

const Details = styled(Container)`
  border-top-right-radius: 5px;
  border-bottom-right-radius: 5px;
  background-color: white;
  height: calc(100% - 11px - 4px);
  margin: 9px 0 2px 0;
  padding: 2px 0; 
`;

const Name = styled(Container)`
  color: gray;
  font-weight: 600;
`;

const Reason = styled(Container)`
  justify-content: center;
  align-items: center;
  font-size: 1.8rem;
  line-height: 100%;
`;


export const AvatarExpanded = ({name, details, ...props}) => {
  return (
    <AvatarWrapper row>
      <Avatar type="big" {...props} />
      <Background stretched>
      </Background>
      <Details stretched row>
        <Container stretched>
          <Name>{name}</Name>
          <Reason>{details}</Reason>
        </Container>
      </Details>
    </AvatarWrapper>

  );
}

export default AvatarExpanded;