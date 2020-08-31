import { h, FunctionComponent as FC } from 'preact';
import { Router, Route } from 'preact-router';
import Footer from '../components/footer';
import Welcome from './welcome';

const Routes: FC = () => (
  <div className="root">
    <header>
      <img src="" alt="Nim in Japanロゴ" className="logo" />
      <Router>
        <Route path="/" component={() => <h1>Nim in Japan</h1>} />
        <Route default component={() => <span>Nim in Japan</span>} />
      </Router>
    </header>
    <Router>
      <Route path="/" component={Welcome} />
    </Router>
    <Footer />
  </div>
);

export default Routes;
