import React from 'react';
import { storiesOf } from '@storybook/react';

storiesOf('media-object', module)
  .add('media-object', () => (
    <div class="media-object">
      <div class="media-object__image">
        <figure class="media">
          <img src="http://placehold.it/300x400" alt="" />
          <figcaption class="media__caption">Caption here</figcaption>
        </figure>
      </div>
      <div class="media-object__body">
        <div class="typography">
          <h3>Lorem ipsum, dolor sit amet consectetur adipisicing elit</h3>
          <p>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Sed,
            nulla. Error ea corrupti repellat asperiores fuga magnam minus,
            dolore veritatis eos? Laudantium, reiciendis quos. Est provident
            sint dolorem temporibus quam!
          </p>
        </div>
      </div>
    </div>
  ))

  .add('media-object--right', () => (
    <div class="media-object media-object--right">
      <div class="media-object__image">
        <img src="http://placehold.it/300x400" alt="" />
      </div>
      <div class="media-object__body">
        <div class="typography">
          <h3>Lorem ipsum, dolor sit amet consectetur adipisicing elit</h3>
          <p>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Sed,
            nulla. Error ea corrupti repellat asperiores fuga magnam minus,
            dolore veritatis eos? Laudantium, reiciendis quos. Est provident
            sint dolorem temporibus quam!
          </p>
        </div>
      </div>
    </div>
  ));
