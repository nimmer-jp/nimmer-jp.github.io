import { h, FunctionComponent as FC } from 'preact';
import { Router, Route } from 'preact-router';
import Welcome from './welcome';

const Routes: FC = () => (
  <Router>
    <Route path="/" component={Welcome} />
  </Router>
);

export default Routes;
