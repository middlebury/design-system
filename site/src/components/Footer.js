import React from 'react';

const Footer = ({ version, bugsUrl, buildTime }) => (
  <footer className="docs-footer">
    <div className="docs-footer__meta">
      <p>v{version}</p>
      <p>Website last updated {buildTime}</p>
    </div>
    <div className="docs-footer__contact">
      <p>
        See a problem? <a href={bugsUrl}>Open an issue</a> on GitHub
      </p>
    </div>
  </footer>
);

export default Footer;
