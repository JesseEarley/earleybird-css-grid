# earleybird-css-grid
A custom responsive CSS Grid system that uses Bootstrap naming conventions and a 12-column grid system.

## The Grid

The Earley Bird Grid System is a custom responsive 12-column grid system that is built using CSS Grid. It uses the Bootstrap naming conventions for grid
and column setup, but does NOT use Bootstrap in any manner.

### The Wrapper

The grid must be setup inside of the .container element.
```html
<div class="container">
</div>
```

### The Row

Within the .container element, the .row element must follow.
```html
<div class="container">
  <div class="row">
  </div>
</div>
```

### The Columns

There are 5 column widths:
* .col-xs-* 
* .col-sm-* (min-width breakpoint is 576px)
* .col-md-* (min-width breakpoint is 768px)
* .col-lg-* (min-width breakpoint is 992px)
* .col-xl-* (min-width breakpoint is 1200px)

(Note: The * can be replaced with any number between 1 and 12 to create a column of that width. Adding multiple column widths to a column is required for maximum responsiveness.)

Within the .row element, columns can be added.

```html
<div class="container">
  <div class="row">
    <div class="col-md-6 col-xs-12">I am 6 columns wide at the medium breakpoint, but 12 columns wide at the extra small breakpoint.</div>
    <div class="col-md-6 col-xs-12">I am also 6 columns wide at the medium breakpoint, but 12 columns wide at the extra small breakpoint</div>
  </div>
</div>
```

## Installation

### Requirements
* SASS - the grid system styles are written in SASS, but could easily be converted to standard CSS if desired.
* Grunt - Grunt was used for SASS compilation and CSS minification, but the project could easily be modified to not use it.

## Usage
* Incorporate the SCSS file into your own project to use the custom grid system

## Contributing
Pull requests are welcome. For major changes, please open an issue first to discuss what you would like to change.

## License
[GNU GPL v3](https://www.gnu.org/licenses/gpl-3.0.en.html)
