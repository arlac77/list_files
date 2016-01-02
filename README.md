list_files
==========

crawls a directory recursively for files.

[![npm](https://img.shields.io/npm/v/list_files.svg)](https://www.npmjs.com/package/list_files)
[![semantic-release](https://img.shields.io/badge/%20%20%F0%9F%93%A6%F0%9F%9A%80-semantic--release-e10079.svg)](https://github.com/arlac77/list_files)
[![Build Status](https://secure.travis-ci.org/arlac77/list_files.png)](http://travis-ci.org/arlac77/list_files)
[![bithound](https://www.bithound.io/github/arlac77/list_files/badges/score.svg)](https://www.bithound.io/github/arlac77/list_files)
[![Coverage Status](https://coveralls.io/repos/arlac77/list_files/badge.svg?branch=master&service=github)](https://coveralls.io/github/arlac77/list_files?branch=master)
[![Test Coverage](https://codeclimate.com/github/arlac77/list_files/badges/coverage.svg)](https://codeclimate.com/github/arlac77/list_files/coverage)
[![GitHub Issues](https://img.shields.io/github/issues/arlac77/list_files.svg?style=flat-square)](https://github.com/arlac77/list_files/issues)
[![Dependency Status](https://david-dm.org/arlac77/list_files.svg)](https://david-dm.org/arlac77/list_files)
[![devDependency Status](https://david-dm.org/arlac77/list_files/dev-status.svg)](https://david-dm.org/arlac77/list_files#info=devDependencies)
[![docs](http://inch-ci.org/github/arlac77/list_files.svg?branch=master)](http://inch-ci.org/github/arlac77/list_files)
[![downloads](http://img.shields.io/npm/dm/list_files?style=flat-square)](https://npmjs.org/package/list_files)

Quick Examples
--------------

```javscript
var list_files  = require('../lib/list_files').list_files;

var cache = "CACHE MANIFEST\n# version 1\n\nCACHE:\n";

list_files("docroot",
    '',
    /.*\.js$/,
    function(error, file, fstat) {
        // each matching file
        cache += file + "\n";
    },
    function(error) {
        // in the end
        cache += "\nNETWORK:\n";
});
```

Download
--------

```
Releases are available for download from
[GitHub](git@github.com:arlac77/list_files.git).
```

Legal Stuff
-----------

"list_files" is owned by Markus Felten. All rights not explicitly granted in the MIT license are reserved. See the included LICENSE file for more details.

"Node.js" and "node" are trademarks owned by Joyent, Inc.
