var Luminous = require('./base');

Luminous.Config = typeof document == 'undefined' ? require('luminous-server-config') : require('luminous-client-config');
