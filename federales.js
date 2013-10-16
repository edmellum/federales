(function() {
  linkTarget = function(el) {
    var title = el.attr('title');
    var target = el.attr('href');

    if(target.match(/mailto:/)) {
      return target.replace(/mailto:/, '');
    }
    if(title) return title;
    if(el.text()) return el.text();

    return target;
  };

  var track = function(prefix, category, selector, label) {
    var el = $(selector);
    var event = 'click';

    if(!el.length && console) return console.error('Needs an element to track');

    if(!label) label = linkTarget(el);

    if($.isFunction(label)) {
      label = label.call(this, el);
    }

    if(el.is('form')) event = 'submit';

    el.on(event, function(evt) {
      evt.preventDefault();
      _gaq.push(['_trackEvent', prefix + ' - ' + category, label]);
      window.setTimeout(function () {
          window.location.href = el.attr('href');
      }, 100);
    });
  };

  // Expose track globally or using Node.js module system if possible.
  if(module) {
    module.exports = track;
  } else {
    window.track = track;
  }
})();
