'use strict';

var Page = require('../../../').Page;

//
// A simple FAQ page test route.
//
Page.extend({
  method: 'GET',
  path: '/faq'
}).on(module);
