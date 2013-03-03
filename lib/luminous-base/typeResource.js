var Luminous = require('./base'),
    EventEmitter = require('events').EventEmitter;

Luminous.TypeResource = function() {
    var emitter = new EventEmitter();

    this.load = function(type, callback) {
        emitter.once('complete', function(typeResource) {
            typeResource.load(type, callback);
        });
    };

    this.resolve = function(child) {
        emitter.emit('complete', child);
    };
};
