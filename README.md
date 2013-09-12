# Federales

Google Analytics helpers to hunt down and track links that aren't automatically tracked by Google Analytics.

Development of this project has been sponsored by [![Knowit](http://www.knowit.no/Templates/Market/images/logo/knowit-logo.png)](http://knowit.no)

## Installation

Include jQuery and `federales.js` in your site.

## Examples

```javascript
// Track elements with a specific selector providing a label.
track('Thing', 'Special thing', '.special', 'Some value');

// Leave out label to get one automatically depending on element type.
track('Thing', 'E-mail', '.email');

// Curry if tracking a bunch of similar things.
var trackThings = track.bind(track, 'Things');
trackThings('subthing', '.thing', 'Value');
```

## Methods

```javascript
track('Thing', 'Special thing', '.special', 'Some value');
```

### track(prefix, category, selector, [label])

Track all elements matching selector sending prefix and category to Google Analytics as a category in the format `prefix - category`. If label isn't supplied one will be taken from the element based on the type IE `mailto` links will have the target email address as a label.

## Todo
* Docs for label generating
* Tests
* Automatic link discovery

## License

Copyright 2012 Knowit

MIT
