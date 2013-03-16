var Luminous = require('./base'),
    EventEmitter = require('events').EventEmitter;

Luminous.RepositoryFactory = function() {
    var emitter = new EventEmitter();

    this.get = function(type, callback) {
        emitter.once('complete', function(metadata) {
            metadata.get(type, callback);
        });
    };

    this.resolve = function(child) {
        emitter.emit('complete', child);
    };
};
