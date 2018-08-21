import React from 'react';
import { storiesOf } from '@storybook/react';

storiesOf('audio', module).add('audio', () => (
  <div className="audio">
    <audio>
      <source
        src="https://www.middlebury.edu/institute/sites/www.middlebury.edu.institute/files/2018-02/Ace_Your_Interview_v2.mp3"
        type="audio/mpeg"
      />
    </audio>
    <h3 className="audio__title">Audio title</h3>
    <p className="audio__text">
      Lorem ipsum dolor, sit amet consectetur adipisicing elit. Reiciendis
      commodi placeat, perferendis ratione vitae officiis vero. Commodi ullam
      fugiat expedita qui veritatis adipisci minus quod neque! Voluptatum
      tempora iure quo.
    </p>
  </div>
));
