import React from 'react';
import Proptypes from 'prop-types';
import { MessageContainer, WritingDots } from './styledComponents';

const Message = ({ itsMe, itsWriting, message }) => (
  <MessageContainer
    itsMe={itsMe}
  >
    {message}
    {itsWriting ? [0, 1, 2].map((delay) => <WritingDots delay={delay} />) : null}
  </MessageContainer>
);

Message.propTypes = {
  itsMe: Proptypes.bool.isRequired,
  itsWriting: Proptypes.bool.isRequired,
  message: Proptypes.string.isRequired,
};

export default Message;
