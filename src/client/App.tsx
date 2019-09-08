import React, { Fragment } from 'react';
import MessageContainer from './containers/MessageContainer';

interface Props {};

const App: React.FC<Props> = () => {
  const ws = new WebSocket('ws://localhost:3000');
  return (
    <Fragment>
      <MessageContainer ws={ws} />
    </Fragment>
  )
};

export default App;