---
title: Images
desc: Best practices for using images with Middlebury Design System.
path: guidelines/images
group: guidelines
---


## Aspect ratios

Middlebury Design Systems uses predefined aspect ratios for sizing images. This way we have a consistent way to resize and scale down images for responsive use.

Ratio|Description|Example
---|---|---
16:9|Landscape | [Top level page template](#)
5:2|Landscape (shorter)| [Areas of Focus](http://middlebury.edu/institute)
3:4|Portrait |[Profile images](#)

## Preparing images for web
- TODO

## Responsive images
- Use `srcset` attribute if you are only changing resolutions e.g. need small images on mobile but larger on desktop
- Use `<picture>` element if the image aspect ratio or if the crop changes

## Build tools
- TODO: [gulp-imagemin](https://github.com/sindresorhus/gulp-imagemin)

## Resources
- Easily calculate image sizes based on an aspect ratio [Calculateaspectratio.com](http://calculateaspectratio.com/)
- Optimize images for web by dragging them to an app [Imageoptim](https://imageoptim.com/mac)
