import React, {Fragment} from 'react';
import { Globalstyle } from './style'
import { GlobalstyleFoot } from './statics/iconfont/iconfont'
import Header from './common/header';

function App() {
  return (
      <Fragment>
          <Header />
          <Globalstyle />
          <GlobalstyleFoot />
      </Fragment>

  );
}

export default App;
