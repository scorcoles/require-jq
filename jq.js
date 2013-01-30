/*
 * jq! loader plugin
 *
 * Allows loading jquery prior to files depending on it.
 */
define([], function() {
  return {
      load : function(name, req, load) {
          req(['jquery'], function() {
              req([name], function (value) {
                  load(value);
              });
          });
      }
  };
});
