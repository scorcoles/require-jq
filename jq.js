//jq require plugin.
define('jq', {
    load: function (name, req, load) {
        req(['jquery'], function() {
            req([name], function (value) {
                load(value);
            });
        });
    }
});