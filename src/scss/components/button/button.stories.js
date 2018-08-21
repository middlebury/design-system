import React from 'react';
import { storiesOf } from '@storybook/react';

storiesOf('button', module)
  .add('primary', () => (
    <div>
      <button className="button button--primary">Some cta message</button>
      <br />
      <br />
      <button className="button button--primary button--sm">
        small primary button
      </button>
      <br />
      <br />
      <button className="button button--primary button--lg">
        large primary button
      </button>
    </div>
  ))
  .add('', () => (
    <div className="alert alert--danger">
      Some alert message
      <button data-toggle-target=".alert">toggle</button>
    </div>
  ));
