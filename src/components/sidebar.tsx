import { h, FunctionComponent as FC } from 'preact';

export const SidebarItem: FC = ({ children }) => (
  <div className="sidebar-item">{children}</div>
);

export const SidebarGroup: FC<{ title: string }> = ({ children, title }) => (
  <div className="sidebar-group">
    <span className="title">{title}</span>
    {children}
  </div>
);

export const Sidebar: FC = () => (
  <aside className="navigation">
    <SidebarGroup title="お知らせ" />
    <SidebarGroup title="イベント" />
    <SidebarGroup title="フォーラム" />
    <SidebarGroup title="公式 Twitter">
      <SidebarItem>
        <a
          className="twitter-timeline"
          data-dnt="true"
          data-theme="dark"
          href="https://twitter.com/NimmerJp?ref_src=twsrc%5Etfw"
        >
          Tweets by NimmerJp
        </a>
        <script async src="https://platform.twitter.com/widgets.js" />
      </SidebarItem>
    </SidebarGroup>
    <SidebarGroup title="公式 SNS">
      <SidebarItem>
        <img
          src="assets/img/Twitter_Logo_Blue.svg"
          alt="twitter logo"
          className="tw-logo"
        />
        Twitter:
        <a href="https://twitter.com/NimmerJp">@NimmerJp</a>
      </SidebarItem>
      <SidebarItem>
        <img
          src="assets/img/GitHub-Mark-Light-64px.png"
          alt="GitHub logo"
          className="gh-logo"
        />
        GitHub:
        <a href="https://github.com/NimmerJp">@nimmer-jp</a>
      </SidebarItem>
    </SidebarGroup>
  </aside>
);
