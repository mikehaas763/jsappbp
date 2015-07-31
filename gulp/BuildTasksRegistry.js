var util = require('util');
var DefaultRegistry = require('undertaker-registry');
var clean =

module.exports = BuildTasksRegistry;

util.inherits(BuildTasksRegistry, DefaultRegistry);
function BuildTasksRegistry() {
    DefaultRegistry.call(this);

    this.set('clean', foo);
}

function foo(done) {
    done();
}