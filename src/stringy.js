// These are some basic extensions to Javascripts **String**. They're
// likely not unique, and they're certainly not revolutionary. I needed to
// mimic a method or two from Rails' ActiveSupport String extensions, and
// these are the result.
//
// Some of these were borrowed from [https://github.com/osteele/lzosutils/blob/master/lib/string-utils.js]().
//
// I know I am currently lacking tests. I'll get there. (I intend to use
// [Jasmine](http://pivotal.github.com/jasmine/), as I am already familiar with it.)

// Convert a string to one with its words separated by underscores,
// e.g. some_stupid_string
// Expects the string to be camelized, e.g. SomeStupidString
String.prototype.underscore = function() {
  var upCase = new RegExp('([A-Z])','g');
  var fb = new RegExp('^_');
  return this.replace(upCase,'_$1').replace(fb,'').toLowerCase();
}

// Convert a string to one with each new word capitalized,
// e.g. SomeStupidString
// Expects the string to be underscored, e.g. some_stupid_string
String.prototype.camelize = function() {
  var substrings = this.split('_');
  for(var i = 0; i < substrings.length; i++) {
    substrings[i] = substrings[i].charAt(0).toUpperCase() + substrings[i].substring(1);
  }
  return substrings.join('');
}

// Capitalize the first character of a string
// Yes, it is pretty 'dumb' - just the first character
String.prototype.capitalize = function() {
  return this.slice(0,1).toUpperCase() + this.slice(1);
}

// Convert a string into one with its words separated by a dash,
// e.g. some-stupid-string
// Turns _any_ char not a letter into a dash!
String.prototype.cssClassify = function() {
  return this.replace(/[^a-zA-Z]/g, '-').replace(/-{2,}/g, '-');
}

// Convert a string into a suitably capitalized title by capitalizing
// any lowercase letter, 'a' through 'z', that follows a space.
// This is a lazy approach -- it should not capitalize
// articles, prepositions unless at the beginning
String.prototype.titleize = function() {
  return this.replace(/\s([a-z])/g, function(match) {
    return " " + match.replace(/\s/g, '').toUpperCase();
  }).capitalize();
}
