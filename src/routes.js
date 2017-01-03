import React from 'react';
import { Route, IndexRoute } from 'react-router';

import App from './pages/App';
import PostsIndex from './pages/PostsIndex';

export default <Route path="/" component={App}>
  <IndexRoute component={PostsIndex} />
  {/*<Route component={SearchLayout}>*/}
    {/*<Route path="users" component={UsersList} />*/}
  {/*</Route>*/}
</Route>
