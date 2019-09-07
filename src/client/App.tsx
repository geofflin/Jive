import * as React from 'react';
import MessageContainer from './containers/MessageContainer';

interface Props {};

const App: React.FC<Props> = () => {
  return (
    <React.Fragment>
      <h2>Jive</h2>
      <MessageContainer />
    </React.Fragment>
  )
};

export default App;