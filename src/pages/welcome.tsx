import { h, FunctionComponent as FC } from 'preact';
import { Sidebar } from '../components/sidebar';
import AboutNim from '../contents/about-nim';
import GettingStarted from '../contents/getting-started';
import AboutUs from '../contents/about-us';
import OurProjects from '../contents/our-projects';

const Welcome: FC = () => (
  <main>
    <Sidebar />
    <div className="articles">
      <article>
        <h2>Nim とは</h2>
        <AboutNim />
      </article>
      <article>
        <h2>はじめに</h2>
        <GettingStarted />
      </article>
      <article>
        <h2>Nim in Japan とは</h2>
        <AboutUs />
      </article>
      <article>
        <h2>Nim in Japan のプロジェクト</h2>
        <OurProjects />
      </article>
    </div>
  </main>
);

export default Welcome;
