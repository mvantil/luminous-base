var Luminous = require('./base'),
    EventEmitter = require('events').EventEmitter;

Luminous.Template = function() {
    var emitter = new EventEmitter();

    this.load = function(type, callback) {
        emitter.once('complete', function(template) {
            template.load(type, callback);
        });
    };

    this.resolve = function(child) {
        emitter.emit('complete', child);
    };
};
