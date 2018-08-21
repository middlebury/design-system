import React from 'react';
import { storiesOf } from '@storybook/react';

storiesOf('link-list', module).add('link-list', () => (
  <nav className="link-list" aria-labelledby="midd-quick-links">
    <h2 className="link-list__title" id="midd-quick-links">
      Resources
    </h2>
    <p>
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsa commodi
      perspiciatis qui quasi necessitatibus, aspernatur molestias, dolor esse
      temporibus provident eligendi quos officia veniam expedita exercitationem!
      Corporis quod consequuntur quidem?
    </p>
    <ul className="link-list__list">
      <li className="link-list__item">
        <div className="link-list__box">
          <a href="" className="link-list__link">
            Some resource
          </a>
          <p className="link-list__info">
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
          </p>
        </div>
      </li>
      <li className="link-list__item">
        <div className="link-list__box">
          <a href="" className="link-list__link">
            Some resource
          </a>
          <p className="link-list__info">
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
          </p>
        </div>
      </li>
      <li className="link-list__item">
        <div className="link-list__box">
          <a href="" className="link-list__link">
            Some other resource
          </a>
          <p className="link-list__info">
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
          </p>
        </div>
      </li>
      <li className="link-list__item">
        <div className="link-list__box">
          <a href="" className="link-list__link">
            Some more resources
          </a>
          <p className="link-list__info">
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
          </p>
        </div>
      </li>
      <li className="link-list__item">
        <div className="link-list__box">
          <a href="" className="link-list__link">
            Some resource
          </a>
        </div>
      </li>
      <li className="link-list__item">
        <div className="link-list__box">
          <a href="" className="link-list__link">
            Another resource
          </a>
          <p className="link-list__info">
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
          </p>
        </div>
      </li>
      <li className="link-list__item">
        <div className="link-list__box">
          <a href="" className="link-list__link">
            A resource elsewhere
          </a>
        </div>
      </li>
      <li className="link-list__item">
        <div className="link-list__box">
          <a href="" className="link-list__link">
            Some resource
          </a>
          <p className="link-list__info">
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
          </p>
        </div>
      </li>
    </ul>
  </nav>
));
