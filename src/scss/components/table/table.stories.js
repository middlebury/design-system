import React from 'react';
import { storiesOf } from '@storybook/react';
import { withNotes } from '@storybook/addon-notes';

import tableDocs from './table.md';

storiesOf('table', module).add(
  'table',
  withNotes(tableDocs)(() => (
    <table class="table">
      <thead>
        <tr>
          <th>Spring 1</th>
          <th>16 Credits</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>International Education Program Design and Assessment</td>
          <td>4</td>
        </tr>
        <tr>
          <td>Logic Model Framework for International Education</td>
          <td>1</td>
        </tr>
        <tr>
          <td>Staff Management in International Context</td>
          <td>2</td>
        </tr>
        <tr>
          <td>Language Studies</td>
          <td>4</td>
        </tr>
        <tr>
          <td>Intercultural Competency Studies</td>
          <td>2</td>
        </tr>
        <tr>
          <td>Electives</td>
          <td>3</td>
        </tr>
      </tbody>
    </table>
  ))
);
