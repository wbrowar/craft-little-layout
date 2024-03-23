# Little Layout Changelog

All notable changes to this project will be documented in this file.

The format is based on [Keep a Changelog](http://keepachangelog.com/) and this project adheres to [Semantic Versioning](http://semver.org/).

## 3.0.0 - 2024-03-23
### Added
- Added support for Craft 5


## 2.0.0 - 2023-12-05
### Added
- Added field setting to add icons to Little Layout field boxes.
- Added field setting to set the height and width of Little Layout field boxes, using CSS values.
- Added ability to get column and row settings from a field in your Twig templates and GraphQL queries.

### Changed
- Improved performance by refactoring Little Layout field from a Vue app to a Web Component.
- Refactored field settings from a Vue app to a Web Component.
- Changed layout boxes in field from clickable div elements to `button` elements.
- Updated doc blocks and added return types to all PHP files.
- Updated JS bundler to Vite 5.x.
- Bumped NodeJS to Node 20.x.

### Removed
- Removed message that popped up when it was detected that you would need to horizontally scroll.
- Removed Vue and Tailwind CSS as front-end dependencies.

### Fixed
- Update the way the field is saved in order to allow for resaving via the CLI.
- Removed field value change on initialization that caused Craft to think the field was updated before changes were made.


## 1.2.0 - 2022-05-01
### Added
- Added support for Craft 4


## 1.1.0 - 2021-07-14
### Added
- Added a new "Selection Mode" field setting, allowing you to restrict field selection to a single cell.
  - This could be useful for simple layout fields, like text align, or a 9-box style layout.
  - NOTE: changing this setting will not retroactively update any of your existing layout values.


## 1.0.1 - 2021-04-06
### Fixed
- Fixed an issue that broke PHP 7.2.5 support. ([#1](https://github.com/wbrowar/craft-little-layout/issues/1))
- Fixed plugin assets loading in front-end Twig templates. ([#2](https://github.com/wbrowar/craft-little-layout/issues/2))


## 1.0.0 - 2021-03-20
### Added
- Initial release 🎉
