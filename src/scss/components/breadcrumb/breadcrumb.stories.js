import React from 'react';
import { storiesOf } from '@storybook/react';

storiesOf('breadcrumb', module).add('breadcrumb', () => (
  <nav class="breadcrumb" aria-labelledby="breadcrumb">
    <h2 id="breadcrumb" class="sr-only">
      Breadcrumb
    </h2>
    <ol class="breadcrumb__list">
      <li class="breadcrumb__item">
        <a href="#" class="breadcrumb__link">
          Home
        </a>
      </li>
      <li class="breadcrumb__item">
        <a href="#" class="breadcrumb__link">
          Academics
        </a>
      </li>
      <li class="breadcrumb__item">
        <a href="#" class="breadcrumb__link">
          Degree Programs
        </a>
      </li>
    </ol>
  </nav>
));
