# Changelog
All notable changes to this project will be documented in this file.

The format is based on [Keep a Changelog](http://keepachangelog.com/en/1.0.0/)
and this project adheres to [Semantic Versioning](http://semver.org/spec/v2.0.0.html).

## [Unreleased]

## [0.4.1] - 2018-06-20
## Fixed
- Remove yarn engine from package.json

## [0.4.0] - 2018-06-18
### Added
- Order 0-11 utils
- Offset-{breakpoint}-0 classes
- Responsive flexbox order utils
- New icons: caret-left, caret-down, caret-right, caret-up, chevron-up, chevron-down, calendar-alt
- New colors: gray-ligher, navy, navy-dark, teal-dark

### Changed
- All icons redrawn
- Calendar icon no longer has number on it. Instead, there is a `calendar-alt` with the number.
- Reduced font sizes on small buttons and inputs
- Increased font size on large buttons and inputs
- Revised color variable names for consistency
- Use Middlebury green color for `$success` instead of `forestgreen`
- `npm run dev` to `npm start` for local development

### Fixed
- JS bundle was incorrectly saved as `mds.min..js` instead of `mds.min.js`

### Removed
- `button--xl` modifier
- Various unused colors: `$brand-tertiary`, `$warm-gray`, `$text-gray`

### Breaking
- Renamed icon `map` to `map-marker`
- Renamed icon `email` to `envelope`
- Renamed icon `close` to `times`
- Renamed `arrow-*` to `chevron-*`
- Added a spacing unit for 48px. This makes spacing-6 48px, spacing-7 become 64px, and spacing-8 become 96px
- Renamed `$light-blue` to `$blue-light`
- Renamed `$lighter-blue` to `$blue-lighter`
- Changed `line-gray` usage to use `gray-light`


## [0.3.0] - 2018-04-24
### Added
- Flexbox order-first and order-last utilities
- Flexbox align-items and justify-content utilities
- This changelog file

### Removed
- Bottom margin from list items in `.typography`

## [0.2.0] - 2017-04-17
### Added
- Spacing x and y utilities

[Unreleased]: https://github.com/middlebury/design-system/compare/v0.4.1...HEAD
[0.4.1]: https://github.com/middlebury/design-system/compare/v0.4.0...v0.4.1
[0.4.0]: https://github.com/middlebury/design-system/compare/v0.3.0...v0.4.0
[0.3.0]: https://github.com/middlebury/design-system/compare/v0.2.0...v0.3.0
[0.2.0]: https://github.com/middlebury/design-system/compare/v0.1.0...v0.2.0
