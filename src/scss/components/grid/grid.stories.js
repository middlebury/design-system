import React from 'react';
import { storiesOf } from '@storybook/react';
import { withNotes } from '@storybook/addon-notes';

import gridDocs from './grid.md';

storiesOf('grid', module).add(
  'grid',
  withNotes(gridDocs)(() => (
    <div class="container">
      <div class="row">
        <div class="col-md-1">1</div>
        <div class="col-md-1">1</div>
        <div class="col-md-1">1</div>
        <div class="col-md-1">1</div>
        <div class="col-md-1">1</div>
        <div class="col-md-1">1</div>
        <div class="col-md-1">1</div>
        <div class="col-md-1">1</div>
        <div class="col-md-1">1</div>
        <div class="col-md-1">1</div>
        <div class="col-md-1">1</div>
        <div class="col-md-1">1</div>
      </div>
      <div class="row">
        <div class="col-md-3">3</div>
        <div class="col-md-3">3</div>
        <div class="col-md-3">3</div>
        <div class="col-md-3">3</div>
      </div>
      <div class="row">
        <div class="col-md-4">4</div>
        <div class="col-md-4">4</div>
        <div class="col-md-4">4</div>
      </div>
      <div class="row">
        <div class="col-md-6">6</div>
        <div class="col-md-6">6</div>
      </div>
      <div class="row">
        <div class="col-md-4">4</div>
        <div class="col-md-8">8</div>
      </div>
    </div>
  ))
);
