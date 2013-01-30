require-jq
==========

Jquery require plugin for loading jquery plugins and extensions as per requirejs issue #658 suggestion

Overview
--------

Allows the construction of scripts that can require the Jquery library (eg: plugins), using the simple RequireJS syntax.
This plugin comes out from the need of resolving at runtime the dependency for certain files of jquery lib. As per

```javascript
define(['jq!path/to/jquery/plugins/myplugin'], function() {
  //code that requires the plugin: path/to/jquery/plugins/myplugin
});

//you can also use an URL
define(['jq!http://www.mysite.com/path/to/jquery/plugins/myplugin.js'], function() {
  //still should work
});
```

Installation and Setup
----------------------

Download the require-jq folder manually or use [bower](https://github.com/volojs/volo)(`npm install bower -g`):

```bash
bower install eherrera/require-jq
```

To allow the direct `jq!` usage, add the following [map configuration](http://requirejs.org/docs/api.html#config-map) in RequireJS:

```javascript
map: {
  '*': {
    'jq': 'require-jq/jq' // or whatever the path to require-jq is
  }
}
```

Use Cases and Benefits
----------------------

### Motivation

The use case for require-jq came out of a need to manage non amd jquery dependant files (i.e. most jquery plugins) at runtime and not at shim
config. The main reason for that is that using shim config for this task in large projects would grow the config file in size and comlexity quickly.
With this plugin the declaration of the dependency can be put into the require call therefore resolve new dependencies without the need for a extra shim config.
When writing a large dynamic application, the number of jquery plugins trends to grow, it can be beneficial to inject the plugin only if needed instead of at page load.

Roadmap
-------
* ~~Comprehensive CSS minification including style reduction~~
* ~~LESS extension~~
* Sprite compilation
* Source maps?

Suggestions always appreciated - feel free to post a feature request.
