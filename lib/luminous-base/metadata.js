var Luminous = require('./base'),
    EventEmitter = require('events').EventEmitter;

Luminous.Metadata = function() {
    var emitter = new EventEmitter();

    this.list = function(callback) {
        emitter.once('complete', function(metadata) {
            metadata.list(callback);
        });
    };

    this.add = function(item, callback) {
        emitter.once('complete', function(metadata) {
            metadata.add(item, callback);
        });
    };

    this.load = function(typeName, callback) {
        emitter.once('complete', function(metadata) {
            metadata.load(typeName, callback);
        });
    };

    this.resolve = function(child) {
        emitter.emit('complete', child);
    };
};
