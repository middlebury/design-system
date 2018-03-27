---
title: Grid
desc: Responsive, mobile first grid system based on Bootstrap v4
path: style/grid
responsive: true
group: style
---


## Intro

Our grid is based on Bootstrap v4's flexbox grid, so if you are unfamiliar, we recommend [reviewing their documentation](http://getbootstrap.com/docs/4.0/layout/grid/). 

Key changes from their grid to ours:
- Our breakpoint sizes differ. See [breakpoints](#breakpoints).
- Container widths do not varying across breakpoints. Instead we have a max width (1440px) then the container is viewport width all the way down to extra small breakpoint. 
- Our gutter widths start at 32px (16px on left and right) up to medium and larger screens where they become 80px (40px on left and right).
- We use BEM, so `.container-fluid` becomes `.container--fluid` and `.no-gutters` becomes `.row--no-gutters`. All other Bootsrap grid classes are as-is.
- We have an `.order` [utility class](/utilities/order) but it does not apply to all 12 columns. Most of the time `order-first` and `order-last` will get us what we need.

`preview:objects/grid/grid.html`
`embed:objects/grid/grid.html`
