# Contributing

## Requirements

- [nodejs](http://nodejs.org) v6.4+ ([use `n` to manage multiple node versions](https://yarnpkg.com/en/package/n) )
- [yarn](https://yarnpkg.com) `brew install yarn` (see [install instructions](https://yarnpkg.com/en/docs/install) for other methods)

## Install node dependencies

```bash
yarn
```

## Run the demo site to work on components

```bash 
yarn dev
```

## Codestyle

We use stylelint and eslint to lint scss and js respectively.

```
yarn lint
```

### Prettier
- Use [Prettier](https://prettier.io) to autoformat js/scss `yarn prettier`

## Naming conventions

### JS hooks

- Prefix classes with `js-` if javascript is intended to hook into the element
- Do not style `js-` classes

### CSS/Sass code style

- Keep selectors flat as possible.
- Do not use `#{&}__element` pattern for block children as it clutters the styles and makes it hard to find classes.
- Avoid `!important` as much as possible. Utility classes are barely an exception.

### Use BEM for class names

We use BEM(block, element, modifier) to structure our component classes.

```html
<div class="card card--tall">
  <div class="card__header">
    <h2 class="card__title">...</h2>
  </div>
</div>
```


#### Should I make a new block or element?

Occasionally you will encounter scenarios where you may feel like you need to add

```html

<ol class="program-spotlight">
  <li class="program-spotlight__item">
    <!-- What should you call this? -->
    <!-- <div class="program-spotlight__item">...</div> -->
    <div class="program-spotlight-item">...</div>
  </li>
</ol>
```


#### Never chain child elements

```html
<div class="card">
  <div class="card__header">
    <!-- bad -->
    <!-- <h2 class="card__header__title">Title</h2> -->

    <!-- good -->
    <h2 class="card__title">...</h2>
  </div>
</div>
```


<!-- ## Commit messages -->
<!-- TODO: (should we use \<TYPE>(\<SCOPE>) pattern?) -->

## Testing

TODO


## Versioning

This project adheres to [semantic versioning](https://semver.org/)

<!-- use `release` or just maintain a changelog.md? -->

## Commit messages

Commit messages should contain a succinct description of the change.

- use the imperative, present tense: "change" not "changed" nor "changes"
- don't capitalize first letter
- no dot (.) at the end


## Submitting changes

- Always work on a separate branch than master
- Pull request your changes into master
- Add suitable GitHub labels
- Be sure to request a reviewer



