import { h, FunctionComponent as FC } from 'preact';
import { Link } from 'preact-router';

const Footer: FC = () => (
  <footer>
    <div className="footer-group">
      <span className="title">Nim</span>
      <div className="footer-group-items">
        <p>
          <a href="https://nim-lang.org">Nim 公式</a>
        </p>
        <p>
          <a href="https://docs.nim-lang.org">Nim リファレンス</a>
        </p>
        <p>
          <Link href="/the-right-way">The Right Way of Nim</Link>
        </p>
      </div>
    </div>
    <div className="footer-group">
      <span className="title">このサイトについて</span>
      <div className="footer-group-items">
        <p>
          <Link href="/disclaimer">免責事項</Link>
        </p>
        <p>
          <Link href="/about-cookies">Cookieについて</Link>
        </p>
        <p>
          <Link href="/privacy-policy">個人情報保護方針</Link>
        </p>
        <p>
          <a href="mailto:nimmer.jp@gmail.com">お問い合わせ</a>
        </p>
      </div>
    </div>
  </footer>
);

export default Footer;
