---
title: Form
desc: Form styles for user data entry with text fields, validation, radio buttons, and more.
path: components/form
group: components
---

## General guidelines

- Use vertical aligned forms (label above field)
- Try to supply placeholder/example content when possible
- Use [help text](#help-text) for fields with complex requirements
- Group multiple checkboxes/radio inputs in [fieldset with legend](#checkboxes-and-radios)
- Error messaging must be next to the related field
- Use checkboxes or radios instead of a dropdown with 2-3 options
- Do not use reset/clear form buttons

<!-- - Right align long form submit buttons  -->


```html example
<form>
  <div class="form-group">
    <label for="email">Email</label>
    <input type="email" class="form-control" required>
  </div>
  <div class="form-group">
    <label for="name">Name (optional)</label>
    <input type="text" class="form-control">
  </div>
  <div class="form-group">
    <label for="">Topic</label>
    <select class="form-control" required>
      <option selected>Choose a topic...</option>
      <option value="">Found a bug</option>
    </select>
  </div>
  <div class="form-group">
    <label for="">Message</label>
    <textarea class="form-control" required></textarea>
  </div>
  <div class="form-group">
    <input type="submit" class="button button--primary">
  </div>
</form>
```


## Dropdowns
```html example
<div class="form-group">
  <label for="">Choose a country</label>
  <select class="form-control">
    <option value="">United States</option>
  </select>
</div>
```


## Checkboxes and radios

Group multiple checkboxes and radios with fieldset and legend since each input should have its own label.

### Checkboxes

```html example
<fieldset class="form-fieldset">
  <legend class="form-legend">Status</legend>

  <div class="form-check">
    <input type="checkbox" name="status" class="form-check__input" id="open">
    <label for="open" class="form-check__label">Open</label>
  </div>
  <div class="form-check">
    <input type="checkbox" name="status" class="form-check__input" id="closed">
    <label for="closed" class="form-check__label">Closed</label>
  </div>
  <div class="form-check">
    <input type="checkbox" name="status" class="form-check__input" id="pending">
    <label for="pending" class="form-check__label">Pending</label>
  </div>
</fieldset>
```

### Radios

```html example
<fieldset class="form-fieldset">
  <legend class="form-legend">Frequency</legend>

  <div class="form-check">
    <input type="radio" name="frequency" class="form-check__input" id="daily">
    <label for="daily" class="form-check__label">Daily</label>
  </div>
  <div class="form-check">
    <input type="radio" name="frequency" class="form-check__input" id="weekly">
    <label for="weekly" class="form-check__label">Weekly</label>
  </div>
  <div class="form-check">
    <input type="radio" name="frequency" class="form-check__input" id="monthly">
    <label for="monthly" class="form-check__label">Monthly</label>
  </div>
</fieldset>
```

## Help text

```html example
<div class="form-group">
  <label for="help-text-username">Username</label>
  <input type="text" class="form-control" id="help-text-username" aria-describedby="help-text-username-form-text">
  <p class="form-text" id="help-text-username-form-text">Letters and numbers only</p>
</div>
```

<!-- ## Required fields 
Use `<abbr title="required">*</abbr>` to denote required fields.

```html example
<div class="form-group">
  <label> Email <abbr title="required">*</abbr></label>
  <input type="email" class="form-control">
</div>
``` -->

## Validation

### Form errors

Display error messages alongside their field.

```html example
<div class="form-group has-error">
  <label for="email" class="form-label">Email</label>
  <input type="email" class="form-control" value="test example.com" required>
  <p class="form-text">Email is not valid</p>
</div>
```

### Optional vs. required fields

TODO: should we denote ALL required fields, only optional fields, or both?

```html example
<div class="form-group">
  <label for="email">Email</label>
  <input type="email" class="form-control">
</div>
<div class="form-group">
  <label for="name">Name (optional)</label>
  <input type="text" class="form-control">
</div>
<div class="form-group">
  <input type="submit" class="button button--primary">
</div>
```
