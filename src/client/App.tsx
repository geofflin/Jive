import React, { Fragment } from 'react';
import MessageContainer from './containers/MessageContainer';

interface Props {};

const App: React.FC<Props> = () => {
  return (
    <Fragment>
      <MessageContainer />
    </Fragment>
  )
};

export default App;