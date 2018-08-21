import React from 'react';
import { storiesOf } from '@storybook/react';
import { withNotes } from '@storybook/addon-notes';

import form from './form.md';

storiesOf('form', module)
  .add(
    'basic form',
    withNotes(form)(() => (
      <form>
        <div class="form-group">
          <label for="email">Email</label>
          <input type="email" class="form-control" id="email" required />
        </div>
        <div class="form-group">
          <label for="name">Name (optional)</label>
          <input type="text" class="form-control" id="name" />
        </div>
        <div class="form-group">
          <label for="topic">Topic</label>
          <select class="form-control" id="topic" required>
            <option selected>Choose a topic...</option>
            <option value="">Found a bug</option>
          </select>
        </div>
        <div class="form-group">
          <label for="message">Message</label>
          <textarea class="form-control" id="message" required />
        </div>
        <div class="form-group">
          <button type="submit" class="button button--primary">
            Send message
          </button>
        </div>
      </form>
    ))
  )

  .add('dropdown', () => (
    <div class="form-group">
      <label for="">Choose a country</label>
      <select class="form-control">
        <option value="">United States</option>
      </select>
    </div>
  ))

  .add(
    'checkboxes',
    withNotes(
      'Group multiple checkboxes and radios with fieldset and legend since each input should have its own label.'
    )(() => (
      <fieldset class="form-fieldset">
        <legend class="form-fieldset__legend">Status</legend>

        <div class="form-check">
          <input
            type="checkbox"
            name="status"
            class="form-check__input"
            id="open"
          />
          <label for="open" class="form-check__label">
            Open
          </label>
        </div>
        <div class="form-check">
          <input
            type="checkbox"
            name="status"
            class="form-check__input"
            id="closed"
          />
          <label for="closed" class="form-check__label">
            Closed
          </label>
        </div>
        <div class="form-check">
          <input
            type="checkbox"
            name="status"
            class="form-check__input"
            id="pending"
          />
          <label for="pending" class="form-check__label">
            Pending
          </label>
        </div>
      </fieldset>
    ))
  )

  .add('radio', () => (
    <fieldset class="form-fieldset">
      <legend class="form-fieldset__legend">Frequency</legend>

      <div class="form-check">
        <input
          type="radio"
          name="frequency"
          class="form-check__input"
          id="daily"
        />
        <label for="daily" class="form-check__label">
          Daily
        </label>
      </div>
      <div class="form-check">
        <input
          type="radio"
          name="frequency"
          class="form-check__input"
          id="weekly"
        />
        <label for="weekly" class="form-check__label">
          Weekly
        </label>
      </div>
      <div class="form-check">
        <input
          type="radio"
          name="frequency"
          class="form-check__input"
          id="monthly"
        />
        <label for="monthly" class="form-check__label">
          Monthly
        </label>
      </div>
    </fieldset>
  ))

  .add('file browser', () => (
    <div class="form-file">
      <input type="file" class="form-file__input" id="customFile" />
      <label class="form-file__label button button--primary" for="customFile">
        Choose file
      </label>
    </div>
  ))

  .add('help text', () => (
    <div class="form-group">
      <label for="help-text-username">Username</label>
      <input
        type="text"
        class="form-control"
        id="help-text-username"
        aria-describedby="help-text-username-form-text"
      />
      <p class="form-text" id="help-text-username-form-text">
        Letters and numbers only
      </p>
    </div>
  ))

  .add('validation', () => (
    <div class="form-group">
      <label for="email" class="form-label">
        Email
      </label>
      <input
        type="email"
        class="form-control form-control--is-error"
        value="test example.com"
        required
      />
      <p class="form-feedback form-feedback--is-error">Email is not valid</p>
    </div>
  ))

  .add(
    'required/optional fields',
    withNotes('Denote all required and optional fields')(() => (
      <form>
        <div class="form-group">
          <label for="email">Email*</label>
          <input type="email" class="form-control" />
        </div>
        <div class="form-group">
          <label for="name">Name (optional)</label>
          <input type="text" class="form-control" />
        </div>
        <div class="form-group">
          <button type="submit" class="button button--primary">
            Subscribe
          </button>
        </div>
      </form>
    ))
  );
