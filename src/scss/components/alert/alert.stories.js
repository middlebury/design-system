import React from 'react';
import { storiesOf } from '@storybook/react';

storiesOf('alert', module)
  .add('info', () => (
    <div className="alert alert--info">Some alert message</div>
  ))
  .add('info with paragraphs', () => (
    <div className="alert alert--info">
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Earum repellat
        tempora illum nihil, quis assumenda, magnam nisi inventore rem
        architecto odio, modi eaque consequuntur? Quod consectetur tenetur
        reiciendis velit fuga?
      </p>
    </div>
  ))
  .add('success', () => (
    <div className="alert alert--success">Some alert message</div>
  ))
  .add('warning', () => (
    <div className="alert alert--warning">Some alert message</div>
  ))
  .add('danger', () => (
    <div className="alert alert--danger">Some alert message</div>
  ));
