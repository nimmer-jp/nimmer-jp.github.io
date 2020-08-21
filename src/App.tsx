import { h, FunctionComponent as FC } from 'preact';
import './App.scss';
import Routes from './pages/routing';

// TODO: アプリケーションのテーマを作る
const App: FC = () => (
  <div className="container">
    <Routes />
  </div>
);

export default App;
