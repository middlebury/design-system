---
title: Grid
desc: Responsive, mobile first grid system based on Bootstrap v4
path: style/grid
responsive: true
group: style
---


## Intro

> Our grid is based on Bootstrap v4's flexbox grid, so if you are unfamiliar, we recommend [reviewing their documentation][bootstrap]. 

Key changes from their grid to ours:
- Our breakpoint sizes differ. See [breakpoints](#breakpoints).
- Container widths do not varying across breakpoints. Instead we have a max width (1440px) then the container is viewport width all the way down to extra small breakpoint. 
- Our gutter widths start at 32px (16px on left and right) up to medium and larger screens where they become 80px (40px on left and right).
- We use BEM, so `.container-fluid` becomes `.container--fluid` and `.no-gutters` becomes `.row--no-gutters`. All other Bootsrap grid classes are as-is.
- We have an `.order` [utility class](/utilities/order) but it does not apply to all 12 columns. Most of the time `order-first` and `order-last` will get us what we need.

`preview:objects/grid/grid.html`
`embed:objects/grid/grid.html`


## Container

The `.container` is the main parent element for a grid and your website content. It makes sure the content does not span the full browser width (unless you prefer it to) and keeps it centered.

```html example
<div class="container">
  Lorem ipsum dolor sit, amet consectetur adipisicing elit. Inventore minima error est ea quo doloribus esse quos velit incidunt, perferendis quae at? Molestiae totam placeat architecto repudiandae blanditiis beatae tenetur.
</div>
```

Use `.container--fluid` to make it full width of the browser.
```html example
<div class="container container--fluid">
  Lorem ipsum dolor sit, amet consectetur adipisicing elit. Inventore minima error est ea quo doloribus esse quos velit incidunt, perferendis quae at? Molestiae totam placeat architecto repudiandae blanditiis beatae tenetur.
</div>
```

## Row
Row applies the negative margin for gutters (columns reapply padding gutters) and display flex so its children are displayed in a row.

> Row should not be used alone and instead have `col` children.


```html example
<div class="container">
  <div class="row">
    <div class="col-6">
      Column 6 of 12
    </div>
    <div class="col-6">
      Column 6 of 12
    </div>
  </div>
</div>
```

## Column
The column classname is composed of 3 pieces to define its width across breakpoints. 

`.col-{breakpoint}-{size}`

- *prefix* - `.col` to define it as a column
- *breakpoint* `sm|md|lg` - the name of the breakpoint defined in `$grid-breakpoints` Sass map
- *size* `1..12` - the number of columns it should span (1 through 12)

## Breakpoints

name|size
---|---
xs|0px
sm|580px
md|768px
lg|1024px
xl|1280px

[bootstrap]: http://getbootstrap.com/docs/4.0/layout/grid/
