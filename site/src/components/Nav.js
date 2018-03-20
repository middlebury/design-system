import React, {Component} from 'react';
import Link from 'gatsby-link';
import classNames from 'classnames';

const Caret = () => (
  <svg
    fillRule="evenodd"
    height="5"
    name="caret--down"
    role="img"
    viewBox="0 0 10 5"
    width="10"
    aria-hidden="true"
    alt="Menu arrow icon"
    aria-label="Menu arrow icon"
  >
    <title>Menu arrow icon</title>
    <path d="M10 0L5 5 0 0z" />
  </svg>
);

class SubNav extends Component {
  state = {
    isActive: false
  };

  toggle = e => {
    this.setState({
      isActive: !this.state.isActive
    });
  };

  render() {
    const {label, items = []} = this.props;
    const {isActive} = this.state;

    const sortedItems = items.sort(
      (a, b) => (a.node.frontmatter.title < b.node.frontmatter.title ? -1 : 1)
    );

    return (
      <div>
        <button
          onClick={this.toggle}
          className={classNames('docs-subnav__button', {
            'is-active': isActive
          })}
        >
          <span className="docs-subnav__button-text">{label}</span>
          <span className="docs-subnav__icon">
            <Caret />
          </span>
        </button>
        <nav className={classNames('docs-subnav', {'is-active': isActive})}>
          <ul className="docs-subnav__list">
            {sortedItems.map(({node}, i) => (
              <li key={i} className="docs-subnav__item">
                <Link
                  to={'/' + node.frontmatter.path}
                  className="docs-subnav__link"
                >
                  {node.frontmatter.title}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    );
  }
}

const findGroup = (items, name) => items.find(g => g.fieldValue === name);

const Nav = ({items = []}) => {
  // rebuilds the items in the order we prefer
  const navItems = [
    'getting started',
    'guidelines',
    'style',
    'components',
    'utilities',
    'scope'
  ].map(name => findGroup(items, name));

  return (
    <nav className="docs-nav">
      <ul className="docs-nav__list">
        {navItems.map((group, i) => (
          <li key={i} className="docs-nav__item">
            <SubNav label={group.fieldValue} items={group.edges} />
          </li>
        ))}
      </ul>
    </nav>
  );
};
export default Nav;
