import React from 'react';
import { storiesOf } from '@storybook/react';

storiesOf('page-menu', module).add('page-menu', () => (
  <div class="page-nav">
    <button class="page-nav__toggler" data-toggle-target=".js-page-nav-1">
      Additional Navigation
      <svg class="page-nav__icon icon">
        <use xlinkHref="#icon-chevron-down" />
      </svg>
    </button>
    <nav class="page-nav__content js-page-nav-1">
      <ul class="page-nav__list">
        <li class="page-nav__item">
          <a href="#" class="page-nav__link page-nav__link--home">
            Student Activities
          </a>
          <ul class="page-nav__list">
            <li class="page-nav__item">
              <a href="#" class="page-nav__link">
                Student Organizations
              </a>
            </li>
            <li class="page-nav__item">
              <a href="#" class="page-nav__link">
                Student Government Association (SGA)
              </a>
            </li>
            <li class="page-nav__item">
              <a href="#" class="page-nav__link">
                Middlebury College Activities Board (MCAB)
              </a>
            </li>
            <li class="page-nav__item">
              <a href="#" class="page-nav__link">
                Middlebury Outdoor Programs
              </a>
            </li>
            <li class="page-nav__item">
              <a href="#" class="page-nav__link">
                Winter Term Workshops
              </a>
            </li>
            <li class="page-nav__item">
              <a href="#" class="page-nav__link">
                McCullough Student Center
              </a>
            </li>
            <li class="page-nav__item">
              <a href="#" class="page-nav__link">
                Our Team
              </a>
            </li>
          </ul>
        </li>
      </ul>
    </nav>
  </div>
));
